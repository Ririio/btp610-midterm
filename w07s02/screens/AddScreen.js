import { Button, SafeAreaView, Switch, Text, TextInput, StyleSheet, View } from "react-native"

import tasks from '../modules/common'
import { useState } from "react"

const AddScreen = () => {
  const [taskName, setTaskName] = useState('')
  const [isHighPriority, setIsHighPriority] = useState(false)
  const [resultLabel, setResultLabel] = useState('')

  const onSubmit = () => {
    tasks.push({id: tasks.length, name: taskName, isHighPriority: isHighPriority})
    alert('Done')

    setIsHighPriority('')
    setTaskName(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Task Name:</Text>
      <TextInput style={styles.input} value={taskName} onChangeText={setTaskName}/>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>High Priority</Text>
        <Switch value={isHighPriority} onValueChange={setIsHighPriority} />
      </View>

      <Button title='Submit' onPress={onSubmit} />

      <Text style={styles.text}>
        {resultLabel}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"white",
    flex:1,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent:"space-between"
  },
  text: {
    fontSize:16,
  }
  })
export default AddScreen