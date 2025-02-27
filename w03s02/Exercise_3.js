import { SafeAreaView, Text } from 'react-native'

const Exercise_3 = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', 
      alignItems: 'center', justifyContent:'space-between', padding: 10, backgroundColor: 'lavender'}}>
      <Text style={{fontSize: 20}}>Skill Up</Text>
      <Text style={{fontSize: 65, textAlign: 'center'}}>Choose from 210,000 courses</Text>
      <Text style={{fontSize: 20}}>Visit us at www.skillup.com</Text>
    </SafeAreaView>
  )
}

export default Exercise_3