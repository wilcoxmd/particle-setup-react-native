import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeviceVariable } from "./DeviceVariable";

export class DeviceVariableList extends React.Component {
  render() {
    const varList = Object.keys(this.props.device.variables);
    return (
      <View>
        {varList.map((element, index) => (
          <DeviceVariable
            key={index}
            varName={element}
            device={this.props.device}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
