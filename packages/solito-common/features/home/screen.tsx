import { A, H1, P, Text, TextLink } from 'solito-common/design/typography';
import { Row } from 'solito-common/design/layout';
import { View } from 'solito-common/design/view';
import React from 'react';
import { MotiLink } from 'solito/moti';

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-green-400 via-pink-400 to-green-400 dark:from-green-800 dark:via-pink-800 dark:to-green-800 p-3">
      <H1 className="text-white font-bold mb-4">Welcome to Friendzone.</H1>
      <View className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded-lg">
        <P className="text-center text-black dark:text-white">
          By clicking "Log In", you agree with our{' '}
          <TextLink className="text-green-500 dark:text-green-300 font-bold" href="/terms">
            Terms
          </TextLink>
          . Learn how we process your data in our{' '}
          <TextLink className="text-green-500 dark:text-green-300 font-bold" href="/privacy">
            Privacy Policy
          </TextLink>
          .
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <MotiLink
          href="/login"
          animate={({ hovered, pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            };
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-white dark:text-black bg-black dark:bg-orange-300 text-3xl p-20 rounded-3xl font-bold">
            Log In
          </Text>
        </MotiLink>
      </Row>
    </View>
  );
}
