import { useEffect, useState, useCallback } from "react";
import { SafeAreaView, Text, StyleSheet, View, Pressable, FlatList } from "react-native"

import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import tasks from '../modules/common'
import { useFocusEffect } from "@react-navigation/native";


const HomeScreen = ({navigation}) => {
  const [listData, setListData] = useState([])

  const addPressed = () => {
    navigation.navigate('Add a Task')
  }

  useEffect(() => {
    console.log(tasks)
  })

  useFocusEffect(
    useCallback(() => {
    console.log("+ SCREEN 1: user returned to this screen")
    setListData([...tasks])
    }, [])
  )

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.row}>
          <Pressable onPress={addPressed}>
            <Entypo name="add-to-list" size={24} color="black" />
          </Pressable>
        </View>
      )
    })
  }, [navigation])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', }}>
      <Text style={styles.text}>Here is our Home Screen</Text>
      <FlatList 
        data={tasks}
        keyExtractor={(item) => {item.id} }
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.divider}/>
          )
        }}
        renderItem={
          ({item}) => {    marginHorizontal: 10

            return (
              <View style={styles.rowContainer}>
                <View styles={{flexDirection: 'row'}}>
                  <Text>{item.name}</Text>
                  <Text>{item.isHighPriority ? 'High Priority!' : 'Low Priority!'}</Text>
                </View>
                {item.isHighPriority && 
                  <FontAwesome name="exclamation-circle" size={24} color="black" />
                }
              </View>
            )
          }
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    padding:"20",
  },
  text:{
    fontSize:20,
  },
  rowContainer : {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginHorizontal: 10
  },
  divider:{
    borderWidth:1,
    borderColor:"#dfdfdf",
    marginVertical:10,
  }
});

export default HomeScreen