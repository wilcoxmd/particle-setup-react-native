import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomStyles from "../styleconfig";

export class DeviceVariable extends React.Component {
  render() {
    return (
      <View style={styles.deviceVariable}>
        <View style={styles.variableHeader}>
          <Text>{this.props.varName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deviceVariable: CustomStyles.deviceOperation,
  variableHeader: CustomStyles.operationHeader
});
