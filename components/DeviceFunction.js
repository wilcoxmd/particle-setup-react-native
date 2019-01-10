import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export class DeviceFunction extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.funcName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
