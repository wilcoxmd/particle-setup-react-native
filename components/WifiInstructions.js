import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ChecklistItem } from "./ChecklistItem";

export class WifiInstructions extends React.Component {
  render() {
    return (
      <View style={styles.getReadyList}>
        <ChecklistItem itemNumber="1" itemText="Tap Home > Settings > Wi-Fi" />
        <ChecklistItem
          itemNumber="2"
          itemText="Make sure Wi-Fi is turned on, and choose the 'Photon-XXXX' network. 'XXXX' will be a unique code"
        />
        <ChecklistItem
          itemNumber="3"
          itemText="Once connected, return to this app and tap the 'Scan Networks' button"
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
