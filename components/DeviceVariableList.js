import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeviceVariable } from "./DeviceVariable";

export class DeviceVariableList extends React.Component {
  render() {
    return (
      <View>
        {this.props.varList.map((element, index) => (
          <DeviceVariable key={index} varName={element} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
