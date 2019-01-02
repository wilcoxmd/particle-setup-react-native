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

export class GetReadyChecklist extends React.Component {
  render() {
    return (
      <View>
        <ChecklistItem
          itemNumber="1"
          itemText="Plug in your Particle Device to turn it on"
        />
        <ChecklistItem
          itemNumber="2"
          itemText="The on-board LED should be blinking blue. If not, hold the SETUP button for 3 seconds"
        />
        <ChecklistItem
          itemNumber="3"
          itemText="Make sure your phone is connected to the Internet"
        />
      </View>
    );
  }
}
