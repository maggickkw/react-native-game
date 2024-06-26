import { StyleSheet, Text, View } from 'react-native'

const GuessLogItem = ({ roundNumber, guess }) => {

    console.log(roundNumber, guess)
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}> Opponent's Guess: {guess}</Text>

    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: "#36021c",
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ddb52f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})