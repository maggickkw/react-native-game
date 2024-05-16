import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'

const GameOver = () => {
  return (
    <View style={styles.container}>
    <Title>GAME OVER!</Title>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius:150,
    borderWidth: 3,
    borderColor: '#430323',
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  }
})