import { SafeAreaView, FlatList, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const vehicles = [
  {make:"Tesla", model:"Model X", licensePlate:"TESLA101"},
  {make:"Tesla", model:"Model S", licensePlate:"TESLA102"},
  {make:"Ford", model:"Focus", licensePlate:"FORD999"},
  {make:"Toyota", model:"RAV 4", licensePlate:"TOY000"},
  {make:"Toyota", model:"RAV 4", licensePlate:"TOY133"},
  ]

const FlatListCar = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent: 'center', margin: 20}}>
      <FlatList data={vehicles} keyExtractor={(item) => {return item.licensePlate}} 
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AntDesign name="car" size={24} color="black" />
              <View style={{flexDirection: 'row'}}>
                <Text>{item.make}</Text>
                <Text>{item.model}</Text>
              </View>
              <Text>{item.licensePlate}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default FlatListCar