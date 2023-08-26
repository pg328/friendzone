import React, {useState} from 'react'
import {StyleSheet, KeyboardAvoidingView, Text, View, Platform} from 'react-native'
import {FilledButton, TextButton} from '../components/Button'
import {Input} from '../components/Input'
import {useAuthDispatch, authUser, createUser} from '../contexts'

export default function Auth () {
  const [hasAccount, setAccount] = useState(false)
  const [username, setUsername] = useState('')
  const [key, setKey] = useState('')
  const dispatch = useAuthDispatch()
  const toggleState = () => {
    setAccount(a=>!a)
  }

  const Login = () => {
  return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Venn</Text>
      </View>
      <Input value={key} onChangeText={setKey} placeholder='Enter your key' />
        <FilledButton onPress={()=> authUser(dispatch, {key: key})}>Login</FilledButton>
        <TextButton onPress={toggleState}>Create One</TextButton>
    </KeyboardAvoidingView>
  )
}
  
  const Register = () => {
  return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Venn</Text>
      </View>
      <Input value={username} onChangeText={setUsername} placeholder='Username' />
        <FilledButton onPress={()=> createUser(dispatch, {username: username})}>Register</FilledButton>
        <TextButton onPress={toggleState}>I already have an account</TextButton>
    </KeyboardAvoidingView>
  )
}

  return hasAccount ? <Login/> : <Register/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold'
  }
})
