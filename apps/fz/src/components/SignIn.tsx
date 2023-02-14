//import { useSignIn } from "@clerk/clerk-expo";
import React from "react";
import { View, Text } from "react-native";
import Button from "./Button";

//import * as AuthSession from "expo-auth-session";

const SignIn = () => {
  const handleSignIn = async () => {};
  return (
    <View>
      <Button onPress={handleSignIn} className={""}>
        LOG IN
      </Button>
    </View>
  );
};

export default SignIn;
