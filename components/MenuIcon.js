import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button } from "react-native";

export class MenuIcon extends React.Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Ionicons name="md-menu" onPress={this.props.handlePress()} size={25} />
      </View>
    );
  }
}
