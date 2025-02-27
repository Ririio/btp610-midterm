import { Button, View } from "react-native"

const HomeScreen = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', borderWidth: 1, flex: 1}}>
      <Button title='Exercise 1' onPress={() => navigation.navigate('Exercise 1')}/>
      <Button title='Exercise 2' onPress={() => navigation.navigate('Exercise 2')}/>
      <Button title='Exercise 3' onPress={() => navigation.navigate('Exercise 3')}/>
      <Button title='Exercise 4' onPress={() => navigation.navigate('Exercise 4')}/>
      <Button title='Exercise 5' onPress={() => navigation.navigate('Exercise 5')}/>
      <Button title='Exercise 6' onPress={() => navigation.navigate('Exercise 6')}/>
    </View>
  )
}

export default HomeScreen