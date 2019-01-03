import React from "react";
import { View, StyleSheet } from "react-native";
import { ChecklistItem } from "./ChecklistItem";

export class GetReadyChecklist extends React.Component {
  render() {
    return (
      <View style={styles.getReadyList}>
        <ChecklistItem
          itemNumber="1"
          itemText="Plug in your Particle Device to turn it on"
        />
        <ChecklistItem
          itemNumber="2"
          itemText="Hold the SETUP button for 3 seconds, until the status LED is blinking blue"
        />
        <ChecklistItem
          itemNumber="3"
          itemText="Make sure your phone is connected to the Internet"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  getReadyList: {
    flexDirection: "column",
    padding: 20
  }
});
