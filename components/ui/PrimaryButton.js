import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";

import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {


  return (
    <View style={styles.outerContainer}>
       <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",

  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
