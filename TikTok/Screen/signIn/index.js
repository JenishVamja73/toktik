import React, { useState,useEffect } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import style from "./style";

const SignIN = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Cleanup on unmount
  }, []);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (isMounted) {
        Alert.alert('Success', 'User registered successfully!');
        navigation.navigate('Home');
      }
    } catch (error) {
      if (isMounted) {
        Alert.alert('Error', error.message);
      }
      console.error('Registration Error:', error);
    }
  };

  


  return (
    <>
      <Pressable style={{ marginHorizontal: "5%", marginVertical: "2%" }} onPress={() => navigation.goBack()}>
        <AntDesign name="left" color={"black"} size={20} />
      </Pressable>
      <View style={style.conatra}>
        <View>
          <Text style={style.TextWelcome}>Hello, user</Text>
          <Text style={[style.TextWelcome, { right: "3%" }]}>Register to get started</Text>
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Username"
            value={userName}
            onChangeText={setUserName}

          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <Pressable style={style.LoginButton} onPress={handleRegister}>
          <Text style={style.loginText}>Register</Text>
        </Pressable>
        <View>
          <Text style={style.Login}>Or Login with</Text>
        </View>
        <View style={style.facbookView}>
          <Pressable>
            <FontAwesome name="facebook-square" color={"blue"} size={35} />
          </Pressable>
          <Pressable>
            <FontAwesome name="google-plus-square" color={"red"} size={35} />
          </Pressable>
          <Pressable>
            <FontAwesome name="apple" color={"black"} size={35} />
          </Pressable>
        </View>
        <View style={{ marginVertical: "5%" }}>
          <Text style={{ textAlign: "center", fontSize: 19 }}>
            Do you have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue", fontSize: 16 }}>Login Now</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </>
  );
};

export default SignIN;
