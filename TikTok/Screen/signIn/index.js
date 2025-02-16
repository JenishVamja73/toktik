import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import auth from "@react-native-firebase/auth";
import style from "./style";

const SignIN = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login"); // Navigate to Login screen
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    }
  };


  return (
    <>
      <Pressable style={{ marginHorizontal: "5%", marginVertical: "2%" }} onPress={() => navigation.goBack()}>
        <AntDesign name="left" color={"black"} size={20} />
      </Pressable>
      <View style={style.conatra}>
        <Text style={style.TextWelcome}>Hello, user</Text>
        <Text style={[style.TextWelcome, { right: "3%" }]}>Register to get started</Text>

        <TextInput style={style.TextInputEmail} placeholder="Username" value={userName} onChangeText={setUserName} />
        <TextInput style={style.TextInputEmail} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={style.TextInputEmail} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput style={style.TextInputEmail} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

        <Pressable style={style.LoginButton} onPress={handleRegister}>
          <Text style={style.loginText}>Register</Text>
        </Pressable>

        <Text style={style.Login}>Or Login with</Text>
        <View style={style.facbookView}>
          <Pressable>
            <FontAwesome name="google-plus-square" color={"red"} size={35} />
          </Pressable>
        </View>

        <Text style={{ textAlign: "center", fontSize: 19 }}>
          Do you have an account?{" "}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "blue", fontSize: 16 }}>Login Now</Text>
          </Pressable>
        </Text>
      </View>
    </>
  );
};

export default SignIN;
