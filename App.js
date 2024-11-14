import React from "react";
import { View } from "react-native";
import { Task } from "./Task";
import styles from "./Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Task text="1) Established a radio net." />
      <Task text="2) Entered a radio net." />
      <Task text="3) Stations leave and closed the net." />
    </View>
  );
}
