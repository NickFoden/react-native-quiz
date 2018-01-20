import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

class AddDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from add Deck Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
