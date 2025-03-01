import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./screens/HomeScreen"
import AddScreen from './screens/AddScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen name='Home Screen' component={HomeScreen}/>
        <Stack.Screen name='Add a Task' component={AddScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

