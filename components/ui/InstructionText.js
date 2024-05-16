import { StyleSheet, Text } from 'react-native'


const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    text: {
      fontFamily: 'open-sans',
        color: '#ddb52f',
        fontSize: 24
      }
})