import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

export class ChecklistBubble extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          width: 25,
          height: 25,
          borderRadius: 13,
          backgroundColor: "#304156"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>
            {this.props.itemNumber}
          </Text>
        </View>
      </View>
    );
  }
}
