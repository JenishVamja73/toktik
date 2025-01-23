import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from "./style";

const SignIN = ({ navigation })=>{
    return(
        <>
        <Pressable style={{marginHorizontal:"5%",marginVertical:"2%"}}>
                <AntDesign name="left" color={"black"} size={20}/>
            </Pressable>
        <View style={style.conatra}>
            

            <View>
        <Text style={style.TextWelcome}>Hello, user</Text>
            <Text style={[style.TextWelcome,{right:"3%"}]}> Register to get Started</Text>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder="userName" keyboardType="email-address"></TextInput>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder=" email" keyboardType="email-address"></TextInput>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder=" password" keyboardType="email-address"></TextInput>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder=" password" keyboardType="email-address"></TextInput>
            </View>
          
            <Pressable style={style.LoginButton}>
              <Text style={style.loginText}>Register</Text>
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
  <Text style={{textAlign:"center",fontSize:19}}>Do have an account ? <Pressable  onPress={() => navigation.navigate('Home')}><Text style={{top:"3%",color:"blue",fontSize:16}}>Login Now</Text></Pressable></Text>
</View>
        </View>
        </>
    )
}
export default SignIN