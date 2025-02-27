import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import Screen1 from './screens/Screen1'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Login Screen'>
        <Stack.Screen name='Login Screen' component={LoginScreen} options={() => ({
          headerRight: () => {
            return (
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text>Hello!</Text>
              </View>
            )
          },
          backgroundColor: 'red'
        })}/>
        <Stack.Screen name='Screen 1' component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
