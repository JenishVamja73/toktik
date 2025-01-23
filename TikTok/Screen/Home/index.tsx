import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Reel from '../Reel';




const Tab = createBottomTabNavigator();

const Home = () => {
return (
    <>
      <Tab.Navigator    screenOptions={{
    tabBarStyle: { 
      position: 'absolute', 
      backgroundColor: 'red' // Set background color here
    },
    tabBarActiveTintColor: '#fff', // Active icon color
    tabBarInactiveTintColor: 'gray', // Inactive icon color
  }}
>
        <Tab.Screen name="reel" component={Reel} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="home" size={size} color={color} />
          ),
        }} />

      </Tab.Navigator>
    </>


  )
}
export default Home;
