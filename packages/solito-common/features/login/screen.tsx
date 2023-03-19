
import { A, H1, P, Text, TextLink } from 'solito-common/design/typography'
import { Row } from 'solito-common/design/layout'
import { TextInput, TouchableOpacity } from 'react-native';
import { View } from 'solito-common/design/view'
import React, { useRef, useState } from 'react'
import { MotiLink } from 'solito/moti'

export const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleLogin = () => {
    // Implement your phone number authentication and 2FA here
  };

  const handleVerificationCode = () => {
    // Implement your 2FA code verification here
  };

  return (
    <View className={'flex-1 justify-center items-center bg-white'}>
      <Text className={'text-2xl font-bold text-blue-600'}>Welcome to the App!</Text>

      <TextInput
        className={'w-full p-2 my-3 border-b border-blue-400'}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />

      <TextInput
        className={'w-full p-2 my-3 border-b border-blue-400'}
        placeholder="Verification Code"
        keyboardType="number-pad"
        onChangeText={text => setVerificationCode(text)}
        value={verificationCode}
      />

      <TouchableOpacity onPress={handleLogin} className={'py-2 px-4 my-3 bg-blue-600 rounded'}>
        <Text className={'text-white'}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

