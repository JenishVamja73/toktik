import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const data = [
  { id: '1', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 1' },
  { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 2' },
  { id: '3', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 3' },
];

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * height,
      index * height,
      (index + 1) * height,
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const paused = scrollY._value < index * height || scrollY._value > (index + 1) * height;

    return (
      <View style={styles.itemContainer}>
        <Animated.View style={[styles.videoContainer, { transform: [{ scale }] }]}>
          <Video
            source={{ uri: item.uri }} // Video URL
            style={styles.video}
            resizeMode="cover" // Scale the video to cover the container
            paused={paused} // Pause video when out of view
          />
        </Animated.View>
        <Text style={styles.videoTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={height} // Snap to each video (full screen height)
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  itemContainer: {
    width,
    height, // Full screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: width * 1, // 90% of screen width
    height: height * 1, // 60% of screen height
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Home;
