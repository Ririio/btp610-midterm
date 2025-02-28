import { useEffect } from "react"
import { Button, SafeAreaView, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';


const Screen1 = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Home Page',
      headerRight: () => (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Button title='Click 1' onPress={() => alert('Click 1')} />
          <AntDesign name="user" size={24} color="black" />
        </View>
      )
    })
  }, [navigation])

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen 1</Text>
      <Button title='Next Screen' onPress={() => navigation.navigate('Screen 2')} />
    </SafeAreaView>
  )
}

export default Screen1