import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Home';
import SignIN from '../signIn';
import Login from '../Login/Index';
import Reel from '../Reel';
const Stack = createNativeStackNavigator();



const Navgtion = () => {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name='reel' component={Reel}  options={{headerShown:false}}/>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} 
        />
        <Stack.Screen name="signin" component={SignIN} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>

      </Stack.Navigator>    
      </NavigationContainer>
      </>
  );
};
export default Navgtion;
