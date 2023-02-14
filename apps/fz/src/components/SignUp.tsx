// import { useSignUp } from "@clerk/clerk-expo";
import React from "react";
import { View, Text } from "react-native";
import Button from "./Button";

//import * as AuthSession from "expo-auth-session";

const SignUp = () => {
  //const { signUp } = useSignUp();

  const handleSignUp = async () => {};

  return (
    <Button onPress={handleSignUp} className={"w-full"}>
      SIGN UP
    </Button>
  );
};

export default SignUp;
