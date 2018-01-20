import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// https://youtu.be/_b6F0KiFpG8?t=22m44s
