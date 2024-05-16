import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess===userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler])

  const newNumberHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("You fucking idiot", "don't lie to me!...", [
        { text: "My bad!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.text}>Lower or Higher?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
          <PrimaryButton onPress={newNumberHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
          </View>
          <View style={styles.button}>
          <PrimaryButton onPress={newNumberHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={24} color="white" />
          </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
  },
  text: {
    marginBottom: 12
  }
});
