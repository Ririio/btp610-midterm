import {  StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import Exercise_2 from './Exercise_2'
import Logical_Rendering from './Logical_Rending'
import TextInputExample from './TextInputExample'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Exercise 2' component={Exercise_2} />
        <Stack.Screen name='Text Input Example' component={TextInputExample} />
        <Stack.Screen name='Logical Rendering' component={Logical_Rendering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
