import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DeviceFunction } from "./DeviceFunction";

export class DeviceFunctionList extends React.Component {
  render() {
    return (
      <View>
        {this.props.functionList.map((item, index) => (
          <DeviceFunction key={index} funcName={item} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
