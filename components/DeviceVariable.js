import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomStyles from "../styleconfig";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceVariable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variableValue: null
    };
  }

  async fetchVariable() {
    try {
      const response = await ParticleWebService.fetchDeviceVariable(
        this.props.varName,
        this.props.device.id,
        AppConfig.testAccessToken
      );
      console.log(response);
      this.setState({ variableValue: response.result.toString() });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const variableValue = this.state.variableValue;

    return (
      <View style={styles.deviceVariable}>
        <View style={styles.variableHeader}>
          <Text>{this.props.varName}</Text>
        </View>
        <View style={styles.variableBody}>
          <TouchableOpacity onPress={() => this.fetchVariable()}>
            <Text style={styles.variableButton}>Get Value</Text>
          </TouchableOpacity>
          <Text style={styles.repsonseText}>
            Value: {variableValue ? variableValue : ""}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deviceVariable: CustomStyles.deviceOperation,
  variableHeader: CustomStyles.operationHeader,
  variableBody: CustomStyles.operationBody,
  variableButton: CustomStyles.operationButton,
  repsonseText: CustomStyles.operationResponse
});
