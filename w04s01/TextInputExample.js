import { SafeAreaView, StyleSheet, TextInput, Text, Switch, Platform} from 'react-native'
import { useState } from 'react'

const TextInputExample = () => {
  const [name, setName] = useState('')
  const [value, setValue] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, backgroundColor: value ? 'yellow' : ''}}>{name}</Text>
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder='Enter your name'
        style={{borderWidth: 1, padding: 10, width: '80%'}}
      />
      <Switch value={value} onValueChange={setValue}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (Platform.OS == 'ios') ? '#fff' : 'red',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});

export default TextInputExample