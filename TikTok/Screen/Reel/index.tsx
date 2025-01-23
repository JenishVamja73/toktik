import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';


const { width, height } = Dimensions.get('window');

const data = [
  { id: '1', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 1' ,musicUri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 2',musicUri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'  },
  { id: '3', uri: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 3' ,musicUri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
];

const Reel = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [liked, setLiked] = useState({});
  const [sound, setSound] = useState(null);

  const handleLike = (id) => {
    setLiked((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the like status
    }));
  };const handleMusicPlay = (musicUri) => {
    // Stop any currently playing music
    if (sound) {
      sound.stop(() => {
        sound.release();
      });
    }

    // Play the selected music
    const newSound = new Sound(musicUri, null, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
      } else {
        newSound.play();
      }
    });

    setSound(newSound);
  };



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
            {/* Overlay content */}
            <View style={styles.overlay}>
                <View style={styles.imageView}>
              <Image style={styles.userImage} source={require('./img/User.png')} />
              </View>
              <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
                <AntDesign
                  name={liked[item.id] ? 'heart' : 'hearto'}
                  size={30}
                  color={liked[item.id] ? 'red' : 'white'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMusicPlay(item.musicUri)} style={styles.musicButton}>
            <Text style={styles.musicButtonText}>{item.musicUri}</Text>
          </TouchableOpacity>
         </View>
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
    width: width * 1, // Full screen width
    height: height * 1, // Full screen height
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 30,
    left: 20,
    right: 20,
    bottom: 30,
    justifyContent: 'space-between', // Adjusts the position of the content inside
    alignItems: 'flex-end',
    padding: 10,
    zIndex: 10, // Ensure it's on top of other elements
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  likeButton: {
    padding: 10,
    borderRadius: 5,
    // bottom:"20%",
    top:"5%",
    left:"5%"

  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  imageView:{
 top:"45%",
 left:"5%",
 
  },
  musicButtonText:{
    color:"black"
  }
});

export default Reel;
