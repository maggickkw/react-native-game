import { ImageBackground, StyleSheet,SafeAreaView } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from './screens/GameOver';
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {


  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

})

if (!fontsLoaded) {
  return <AppLoading />
}

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />;
  }

  if (gameOver && userNumber) {
    screen = <GameOver />
  }



  return (
    <>
    <StatusBar style='light' />
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>
         {screen}
         </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
