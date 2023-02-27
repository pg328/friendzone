import { A, H1, P, Text, TextLink } from 'solito-common/design/typography'
import { Row } from 'solito-common/design/layout'
import { View } from 'solito-common/design/view'
import React from 'react'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Friendzone.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          By clicking "Log In", you agree with our <P>Terms</P>.
        </P>
        <P className="text-center">Learn how we process your data in our </P>
        <P className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink
          href="/user/fernando"
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
          <Text selectable={false} className="text-base font-bold">
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
