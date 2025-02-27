import { View, StyleSheet, Text} from 'react-native'

const Exercise_2 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.item_container, {justifyContent: 'flex-end'}]}>
        <View style={[styles.box, {backgroundColor: 'red'}]}>
          <Text>One</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'green'}]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'yellow'}]}>
          <Text>Three</Text>
        </View>
      </View>
      <View style={[styles.item_container, {justifyContent: 'flex-start'}]}>
        <View style={[styles.box, {backgroundColor: 'red'}]}>
            <Text>One</Text>
          </View>
          <View style={[styles.box, {backgroundColor: 'green'}]}>
            <Text>Two</Text>
          </View>
          <View style={[styles.box, {backgroundColor: 'yellow'}]}>
            <Text>Three</Text>
          </View>
      </View>
      <View style={[styles.item_container, {justifyContent: 'center'}]}>
        <View style={[styles.box, {backgroundColor: 'red'}]}>
          <Text>One</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'green'}]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'yellow'}]}>
          <Text>Three</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 10,
    width: '100%'
  },
  item_container: {
    flexDirection: 'row', 
    gap: 10, 
    paddingHorizontal: 10,
    width: '100%',
  },
  box: {
    borderWidth: 1, 
    width: 50, 
    height: 50}
});


export default Exercise_2