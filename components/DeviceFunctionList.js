import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DeviceFunction } from "./DeviceFunction";
import CustomStyles from "../styleconfig";

export class DeviceFunctionList extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.listHeader}>Functions: </Text>
        {this.props.device.functions.map((item, index) => (
          <DeviceFunction
            key={index}
            funcName={item}
            device={this.props.device}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: CustomStyles.listHeader
});
