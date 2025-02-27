import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native'
import {useState} from 'react'

const Exercise_2 = () => {
  [readingRate, setReadingRate] = useState(0)
  
  const book = {
    title: 'Lord of the Rings',
    author: 'J.R.R Tolkien',
    pages: 1600
  }

  return (
    <SafeAreaView style={styles.container}>
      {readingRate ?
      <Text>
        <Text style={styles.textHighlight}>{book.title}</Text> by {''}
        <Text style={styles.textHighlight}>{book.author}</Text> has {''}
        <Text style={styles.textHighlight}>{book.pages}</Text> pages and will take an estimated {''}
        <Text style={styles.textHighlight}>{Math.round(book.pages * 100)/100}</Text> minutes to complete
      </Text>
      : ''}
      <Button title='Calculate Reading Rate' onPress={() => setReadingRate(book.pages/3)}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHighlight: {
    backgroundColor: 'yellow'
  }
});

export default Exercise_2