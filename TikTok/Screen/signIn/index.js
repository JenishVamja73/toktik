import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import auth from "@react-native-firebase/auth";
import style from "./style";

const SignIN = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log("User registered:", userCredential.user);
      Alert.alert("Success", "User registered successfully!");
      navigation.navigate("Home"); // Navigate to the home screen after registration
    } catch (error) {
      console.error(error);
      Alert.alert("Registration Failed", error.message);
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
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TextInput
            style={style.TextInputEmail}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
