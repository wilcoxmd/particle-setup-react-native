import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeviceVariable } from "./DeviceVariable";
import CustomStyles from "../styleconfig";

export class DeviceVariableList extends React.Component {
  render() {
    const varList = Object.keys(this.props.device.variables);
    return (
      <View>
        <Text style={styles.listHeader}>Variables:</Text>
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

const styles = StyleSheet.create({
  listHeader: CustomStyles.listHeader
});
