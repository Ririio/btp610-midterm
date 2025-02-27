import { StyleSheet, View, Text } from "react-native"

const Exercise_1 = () => {
  return (
    <View style={[styles.container, {flexDirection: 'row', 
      gap: 10, justifyContent: 'flex-end', width: '100%', borderWidth: 1, padding: 10}]}>
      <View style={styles.box}>
        <Text>One</Text>
      </View>
      <View style={styles.box}>
        <Text>Two</Text>
      </View>
      <View style={styles.box}>
        <Text>Three</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {borderWidth: 1, width: 50, height: 50}
});

export default Exercise_1