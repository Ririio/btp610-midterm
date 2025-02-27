import { StyleSheet, Text, View } from 'react-native';
export default function App() {
return (
  <View style={styles.container}>
    <View style={{backgroundColor:"orange", width:"100%", flex:25}}>
      <Text>Box 1</Text>
    </View>
    <View style={{backgroundColor:"cyan", width:"100%", flex:5}}>
      <Text>Box 2</Text>
    </View>
    <View style={{backgroundColor:"#7158e2", width:"100%", flex:45}}>
      <Text>Box 2</Text>
    </View>
    <View style={{backgroundColor:"#32ff7e", width:"100%", flex:7}}>
      <Text>Box 2</Text>
    </View>
  </View>
);
}
const styles = StyleSheet.create({
container: {
  flexDirection:"column",
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth:10,
  borderColor:"magenta",
  height:500,
  height:"100%",
  flex:1
},
});