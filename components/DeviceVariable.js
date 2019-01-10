import React from "react";
import { View, Text, StyleSheet } from "react-native";

export class DeviceVariable extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.varName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
