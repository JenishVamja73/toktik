import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import auth from "@react-native-firebase/auth"; // Import Firebase Auth
import style from "./style";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Success", "You have logged in!");
      navigation.navigate("Home"); // Redirect to home screen
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={style.conatra}>
      <View>
        <Text style={style.TextWelcome}>Welcome back!</Text>
        <Text style={style.TextWelcome}>Good to see you again</Text>
      </View>

      <View>
        <TextInput
          style={style.TextInputEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={style.passwordView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1 }}
          />
          <AntDesign
            name={showPassword ? "eye" : "eyeo"}
            size={30}
            color="black"
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
      </View>

      <Pressable style={{ marginVertical: "4%" }}>
        <Text style={{ textAlign: "right" }}>Forgot password?</Text>
      </Pressable>

      <Pressable style={style.LoginButton} onPress={handleLogin}>
        <Text style={style.loginText}>Login</Text>
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
        <Pressable style={{ borderRadius: 10, borderColor: "black" }}>
          <FontAwesome name="apple" color={"black"} size={35} />
        </Pressable>
      </View>

      <View style={{ marginVertical: "5%" }}>
        <Text style={{ textAlign: "center", fontSize: 19 }}>
          Don't have an account?{" "}
          <Pressable  onPress={() => navigation.navigate("signin")}>
            <Text style={{ top: "3%", color: "blue", fontSize: 16 }}>Register Now</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Login;
