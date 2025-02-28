import { createStackNavigator } from "@react-navigation/stack"

import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2"
import { useEffect } from "react"

const Stack = createStackNavigator()

const StackContainerComponent = ({navigation}) => {
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarBadge: 10,
    })
  })

  return (
    <Stack.Navigator initialRoute='Screen 1'>
      <Stack.Screen name='Screen 1' component={Screen1} />
      <Stack.Screen name='Screen 2' component={Screen2} />
    </Stack.Navigator>
  )
}

export default StackContainerComponent