import { SafeAreaView, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const Logical_Rendering = () => {
  const [num, setNum] = useState(0)
  const [display, setDisplay] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      {(display == true) && <Text style={{fontSize: 20}}>{num}</Text>}
      <TextInput value={num} onChangeText={setNum} placeholder="Type Number"
        style={{borderWidth: 1, padding: 10}}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <Button title='Click Me' onPress={() => setDisplay((num > 20) ? true: false)}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
})

export default Logical_Rendering