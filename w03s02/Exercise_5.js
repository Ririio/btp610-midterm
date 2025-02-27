import {SafeAreaView, Text, View, Image} from 'react-native'

const Exercise_5 = () => {
  return(
    <SafeAreaView style={{flex: 1, margin: 20, alignItems: 'center'}}>
      <View style={{flexDirection: 'column', borderWidth: 3, height: '25%', width: '100%', padding: 10}}>
        <Image source={{uri: 'https://www.cbc.ca/kids/images/bouncing_ball_v2_thumb_1050.jpg'}} width='100%' height='80%'/>
        <Text style={{opacity: '0.25'}}>ACTION GAME</Text>
        <Text style={{fontWeight: 'bold'}}>Bouncing Ball</Text>
      </View>
    </SafeAreaView>
  )
}

export default Exercise_5