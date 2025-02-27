import { SafeAreaView, Text, Image } from "react-native"

const Exercise_4 = () => {
  return(
    <SafeAreaView style={{flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow'}}>
      <Image source={require('./assets/shape01.png')} 
        style={{resizeMode:'center', width: 200, height: 200}}/>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>Welcome</Text>
      <Text>We are so glad you are here</Text>
    </SafeAreaView>
  )
}

export default Exercise_4