import { SafeAreaView, TextInput, StyleSheet, View, Button } from "react-native"
import { useState } from "react"

const LoginScreen = ({navigation}) => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={username} onChangeText={setUserName} placeholder="Enter Username"
        style={{borderWidth: 1, padding: 10, width: 200}}
      />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" 
        style={{borderWidth: 1, padding: 10, width: 200}}
      />
      <Button title='Submit' onPress={() => navigation.navigate('Screen 1', {username, password})} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default LoginScreen