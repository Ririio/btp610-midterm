import { SafeAreaView, FlatList, Text, View, Button } from "react-native";

const studentList = [
  {name:"Peter", gpa:3.0, tuitionPaid:true, userid:"psmith"},
  {name:"Emily Patel", gpa:4.0, tuitionPaid:true, userid:"epatel"},
  {name:"Suzy Lee", gpa:2.5, tuitionPaid:false, userid:"slee"},
  {name:"Peter", gpa:2.5, tuitionPaid:false, userid:"pdiaz"},
]

const FlatListStudent = () => {
  const btnPress = (item) => {
    alert(`Congratulation ${item.name}, you passed with a GPA: ${item.gpa}`)
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>Flat List Demo!</Text>
      <Text>Here's a demo of how to use Flat List</Text>
      <FlatList data={studentList} keyExtractor={(item) => {return item.userid}} 
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{borderWidth: 1}}>
                <Text>Name: {item.name}</Text>
                <Text>GPA: {item.gpa}</Text>
              </View>
              <Button title='Click for more details' onPress={() => {btnPress(item)}}/>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default FlatListStudent