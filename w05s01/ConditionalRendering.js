import { SafeAreaView, FlatList, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const studentList = [
  {name:"Peter", gpa:3.0, tuitionPaid:true, userid:"psmith"},
  {name:"Emily Patel", gpa:4.0, tuitionPaid:true, userid:"epatel"},
  {name:"Suzy Lee", gpa:2.5, tuitionPaid:false, userid:"slee"},
  {name:"Peter", gpa:2.5, tuitionPaid:false, userid:"pdiaz"},
]

const ConditionalRendering = () => {
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <FlatList data={studentList} keyExtractor={(item) => {return item.userid}}
        ItemSeparatorComponent={() => {
          return(
            <View style={{borderBottomWidth: 1, marginVertical: 5}}/>
          )
        }}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item.name} {item.gpa}</Text>
              {(item.gpa > 2.5) 
              ? 
                <View style={{flexDirection: 'row', gap: 20}}>
                  <Text>PASS!</Text>
                  <AntDesign name="checkcircle" size={24} color="black" />
                </View>
              : 
                <AntDesign name="exclamationcircleo" size={24} color="black" />}
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ConditionalRendering