import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import FlatListStudent from './FlatListStudent'
import FlatListCar from './FlatListCar'
import ConditionalRendering from './ConditionalRendering'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Home Screen'>
        <Stack.Screen name='Home Screen' component={HomeScreen} />
        <Stack.Screen name='Flat List Student' component={FlatListStudent} />
        <Stack.Screen name='Flat List Car' component={FlatListCar} />
        <Stack.Screen name='Conditional Rendering' component={ConditionalRendering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}