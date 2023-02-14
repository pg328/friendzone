import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { View, SafeAreaView, Text } from "react-native";
import SignUp from "../components/SignUp";

//colors={[green-400,amber-400, rose-400]}

const Disclaimer = () => (
  <Text className="text-center text-xs font-light text-white">
    By clicking "Log In", you agree with our{" "}
    <Text className="font-bold underline">Terms</Text>. Learn how we process
    your data in our <Text className="font-bold underline">Privacy Policy</Text>{" "}
    and <Text className="font-bold underline">Cookies Policy</Text>
  </Text>
);

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView className="bg-gradient-to-tr from-red-50 to-red-600">
      <LinearGradient
        className="h-full w-full"
        colors={["#34d399", "#f59e0b", "#fb7185"]}
      >
        <View className="flex h-full w-full items-center justify-center p-3">
          <View className="flex rounded-3xl">
            <View className="flex h-2/3 items-center justify-center sm:h-1/2">
              <View className="flex h-2/5">
                <Text className="text-4xl font-bold text-white">
                  friendzone
                </Text>
              </View>
            </View>
            <View className="flex h-1/3 w-11/12 items-center justify-around rounded-3xl p-3 sm:h-1/2 sm:flex-col-reverse ">
              <View className="flex items-center justify-around gap-4">
                <Disclaimer />
                <View className="flex w-full flex-row items-center justify-center px-4">
                  <SignUp />
                </View>
                <Text className="font-medium text-white">
                  Trouble logging in?
                </Text>
              </View>

              <View className="flex items-center gap-3">
                <Text className="font-light text-white">
                  Already have an account?{" "}
                  <Text className="font-medium underline">Sign In!</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
