
import { A, H1, P, Text, TextLink } from 'solito-common/design/typography'
import { Row } from 'solito-common/design/layout'
import { View } from 'solito-common/design/view'
import PhoneInput from 'react-native-phone-number-input'
import React, { useRef, useState } from 'react'
import { MotiLink } from 'solito/moti'

export function LoginScreen() {
  const phoneInput = useRef<PhoneInput>(null)
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <View className="flex-1 items-center justify-center bg-orange-300 dark:bg-rose-900 p-3">
      <H1 className="text-rose-900 dark:text-orange-300">Log In</H1>
    </View>
  )
}
