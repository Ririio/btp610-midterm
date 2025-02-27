import { SafeAreaView, Text, Button, StyleSheet } from "react-native"

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Exercise 2' onPress={() => navigation.navigate('Exercise 2')} />
      <Button title='Getting Text Input from the User' onPress={() => navigation.navigate('Text Input Example')} />
      <Button title='Logical Rendering' onPress={() => navigation.navigate('Logical Rendering')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen