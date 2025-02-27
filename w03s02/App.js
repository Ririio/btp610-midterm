import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Exercise_1 from './Exercise_1'
import Exercise_2 from './Exercise_2'
import Exercise_3 from './Exercise_3'
import Exercise_4 from './Exercise_4'
import Exercise_5 from './Exercise_5'
import Exercise_6 from './Exercise_6'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Home Screen'>
        <Stack.Screen name='Home Screen' component={HomeScreen} />
        <Stack.Screen name='Exercise 1' component={Exercise_1} />
        <Stack.Screen name='Exercise 2' component={Exercise_2} />
        <Stack.Screen name='Exercise 3' component={Exercise_3} />
        <Stack.Screen name='Exercise 4' component={Exercise_4} />
        <Stack.Screen name='Exercise 5' component={Exercise_5} />
        <Stack.Screen name='Exercise 6' component={Exercise_6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
