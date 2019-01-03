import React from "react";
import { View, Text, StyleSheet } from "react-native";

export class ChecklistBubble extends React.Component {
  render() {
    return (
      <View style={styles.bubbleContainer}>
        <Text style={styles.bubbleText}>{this.props.itemNumber}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubbleContainer: {
    height: 25,
    width: 25,
    borderRadius: 12,
    backgroundColor: "#808080",
    alignItems: "center"
  },
  bubbleText: {
    color: "white",
    fontWeight: "500",
    lineHeight: 25,
    fontSize: 14
  }
});
