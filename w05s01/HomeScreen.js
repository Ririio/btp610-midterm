import { SafeAreaView, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Button title='Flat List Demo' onPress={() => navigation.navigate('Flat List Student')} />
      <Button title='Flat List Car' onPress={() => navigation.navigate('Flat List Car')} />
      <Button title='Conditional Rendering' onPress={() => navigation.navigate('Conditional Rendering')} />
    </SafeAreaView>
  )
}

export default HomeScreen