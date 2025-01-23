

import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from "./style";




const Login = ({ navigation }) => {
  return (
    <View style={style.conatra}>
        <View>
        <Text style={style.TextWelcome}>Welcome back! Gold  </Text>
            <Text style={style.TextWelcome}> to  see you agin</Text>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder="enter your email" keyboardType="email-address"></TextInput>
            </View>
            <View style={style.passwordView}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <TextInput placeholder="Enter password"/>
                         <AntDesign name="eyeo" size={30} color="black" style={{right:"1%"}} />

              </View>
              
            </View>
            <Pressable style={{marginVertical:"4%"}}>
              <Text style={{textAlign:"right"}}>Forget password</Text>
            </Pressable>
            <Pressable style={style.LoginButton}>
              <Text style={style.loginText}>Login</Text>
            </Pressable>
      <View>
        <Text style={style.Login}>Or Login with</Text>
      </View>
      <View style={style.facbookView}>
        <Pressable >
          <FontAwesome name = "facebook-square" color={"blue"} size={35}/>
        </Pressable>
        <Pressable >
          <FontAwesome name = "google-plus-square" color={"red"} size={35}/>
        </Pressable>
        <Pressable style={{borderRadius:10,borderColor:'black',}} >
          <FontAwesome name = "apple" color={"black"} size={35}/>
        </Pressable>

      </View>
      <View style={{marginVertical:"5%"}}>
  <Text style={{textAlign:"center",fontSize:19}}>Do have an account ? <Pressable  onPress={() => navigation.navigate('signin')}><Text style={{top:"3%",color:"blue",fontSize:16}}>Register Now</Text></Pressable></Text>
</View>
    </View>
  );
};

export default Login;