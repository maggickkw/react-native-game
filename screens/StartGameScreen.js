import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = (props) => {
  const { pickedNumberHandler } = props;

  const [enteredNumber, setEnteredNumber] = useState("");

  const inputChangeHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInput = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid entry!", "Your entry must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    pickedNumberHandler(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
        <Title>GUESS MY NUMBER</Title>
      <Card>
      <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          inputMode="numeric"
          keyboardType="number-pad"
          onChangeText={inputChangeHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    // alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: 'center'
  },
  button: {
    flex: 1,
  },
});
