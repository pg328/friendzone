import { A, H1, P, Text, TextLink } from 'solito-common/design/typography'
import { Row } from 'solito-common/design/layout'
import { View } from 'solito-common/design/view'
import React from 'react'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black p-3">
      <H1 className="text-black dark:text-white">Welcome to Friendzone.</H1>
      <View className="max-w-xl ">
        <P className="text-center text-black dark:text-white">
          By clicking "Log In", you agree with our <P className="text-slate-800 font-bold dark:text-slate-200">Terms</P>.
        </P>
        {/* <P className="text-center text-black dark:text-white">Learn how we process your data</P>*/}
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <MotiLink
          href="/login"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-white dark:text-black bg-black dark:bg-orange-300 text-3xl p-20 rounded-3xl font-bold">Log In</Text>
        </MotiLink>
      </Row>
    </View>
  )
}
