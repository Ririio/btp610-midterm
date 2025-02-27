import {SafeAreaView, Text, Button} from 'react-native'
import {useEffect, useState} from 'react'

const Screen1 = ({route}) => {
  const[number, setNumber] = useState(0)

  useEffect(() => {
    console.log(`${route.name} is UPDATING`)
  })

  useEffect(() => {
    console.log(`${route.name} is MOUNTING`)
  }, [])

  useEffect(() => {
    return () => {
      console.log(`${route.name} is UNMOUNTING`)
    }
  })

  const btnPress = () => {
    setNumber(Math.floor(Math.random() * (10 - 1 + 1) + 1))
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.username}</Text>
      <Text>{route.params.password}</Text>
      <Text>
        {(number > 5)
        ? `Your Number: ${number} is a lucky number`
        : `Your Number: ${number} is bad, pray to jesus`
        }
      </Text>
      <Button title='Click Me' onPress={btnPress}/>
    </SafeAreaView>
  )
}

export default Screen1