import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ChecklistBubble } from "./ChecklistBubble";

export class ChecklistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.checklistItem}>
        <ChecklistBubble itemNumber={this.props.itemNumber} />
        <Text style={styles.itemText}>{this.props.itemText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 88,
    backgroundColor: "#F0F0F0"
  },
  itemText: {
    marginLeft: 10
  }
});
