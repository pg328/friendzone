
import { A, H1, P, Text, TextLink } from 'solito-common/design/typography';
import { Row } from 'solito-common/design/layout';
import { View } from 'solito-common/design/view';
import React, { useState } from 'react';
import { MotiLink } from 'solito/moti';

export function HomeScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      className={`${darkMode ? 'bg-green-800' : 'bg-green-300'
        } flex-1 items-center justify-center p-3 transition-colors duration-300`}
    >
      <View className={`bg-white p-5 rounded-3xl shadow-lg ${darkMode ? 'dark:bg-gray-800' : ''}`}>
        <H1 className={`text-green-800 mb-5 ${darkMode ? 'dark:text-green-300' : ''}`}>
          Welcome to Friendzone.
        </H1>
        <P className={`text-green-900 mb-3 ${darkMode ? 'dark:text-green-200' : ''}`}>
          A matchmaking app to find your perfect match or help your friends find theirs.
        </P>
        <P className={`text-green-900 mb-5 ${darkMode ? 'dark:text-green-200' : ''}`}>
          By logging in, you agree to our{' '}
          <TextLink className={`text-green-600 font-bold ${darkMode ? 'dark:text-green-400' : ''}`} href="#">
            Terms
          </TextLink>{' '}
          and{' '}
          <TextLink className={`text-green-600 font-bold ${darkMode ? 'dark:text-green-400' : ''}`} href="#">
            Privacy Policy
          </TextLink>
          .
        </P>
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
            <Text
              selectable={false}
              className={`text-white bg-green-800 text-3xl p-4 rounded-3xl font-bold ${darkMode ? 'dark:bg-green-500' : ''
                }`}
            >
              Log In
            </Text>
          </MotiLink>
        </Row>
      </View>
      <View className="absolute top-5 right-5">
        <button
          className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-green-300' : 'bg-green-800'
            }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <Text className={`text-white ${darkMode ? 'dark:text-green-800' : ''}`}>Toggle Dark Mode</Text>
        </button>
      </View>
    </View>
  );
}
