import auth from "@react-native-firebase/auth";

const handleRegister = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log("User account created!");
  } catch (error) {
    console.error("Registration Error:", error.message);
  }
};
