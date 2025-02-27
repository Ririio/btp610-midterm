import { View, Image, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Exercise_6 = () => {
  return (
    <View style={{flex: 1, width: '100%', flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 20, padding: 10}}>
        <Text>Gmail</Text>
        <Text>Images</Text>
        <Ionicons name="apps-sharp" size={24} color="black" />
        <Text style={{borderWidth: 1, borderRadius: 100, padding: 5, backgroundColor: 'green', color: 'white'}}>KP</Text>
      </View>
      <Image source={{uri: 'https://www.google.com/logos/doodles/2023/2023-womens-world-cup-opening-day-6753651837110060-2xa.gif'}} 
        width='100%' height={100}
        style={{resizeMode: 'stretch', borderWidth: 1}}
      />
    </View>
  )
}

export default Exercise_6