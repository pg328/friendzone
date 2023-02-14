import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface IButtonProps extends Partial<TouchableOpacity> {
  className: string;
  onPress: () => void | Promise<void>;
  children: any;
}

const SignIn = ({ children, ...props }: IButtonProps) => {
  return (
    <View className="h-full w-full">
      <TouchableOpacity {...props}>
        <View className="flex items-center justify-center rounded-full bg-white p-4">
          <Text className="font-semibold text-slate-400">{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
