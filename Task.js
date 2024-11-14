import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles";

export function Task({ text }) {
  const handlePress = (buttonName) => {
    console.log(buttonName);
  };

  return (
    <>
      <Text style={styles.taskText}>{text}</Text>
      <TouchableOpacity
        style={styles.goButton}
        onPress={() => handlePress("GO")}
      >
        <Text style={styles.buttonText}>GO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.noGoButton}
        onPress={() => handlePress("NO-GO")}
      >
        <Text style={styles.buttonText}>NO-GO</Text>
      </TouchableOpacity>
    </>
  );
}
