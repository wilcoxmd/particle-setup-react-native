import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { ChecklistBubble } from "./ChecklistBubble";

export class ChecklistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ width: 250 }}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "flex-start",
            marginBottom: 25
          }}
        >
          <ChecklistBubble itemNumber={this.props.itemNumber} />
          <Text style={{ lineHeight: 25, marginLeft: 15 }}>
            {this.props.itemText}
          </Text>
        </View>
      </View>
    );
  }
}
