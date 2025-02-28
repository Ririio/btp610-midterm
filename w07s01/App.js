import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackContainerComponent from './StackContainerComponent'
import HomePage from './screens/HomePage'

import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home Page' screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name == 'Home Page') 
            return <Entypo name="home" size={24} color="black" />
          else if (route.name == 'Stack Container')
            return <MaterialIcons name="maps-home-work" size={24} color="black" />
        } 
      })}>
        <Tab.Screen name='Home Page' component={HomePage} />
        <Tab.Screen name='Stack Container' component={StackContainerComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
