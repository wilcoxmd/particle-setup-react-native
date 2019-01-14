import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CustomStyles from "../styleconfig";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";
import { DeviceFunctionList } from "../components/DeviceFunctionList";
import { DeviceVariableList } from "../components/DeviceVariableList";

export class DeviceControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: null,
      deviceName: null,
      deviceInfo: null
    };
  }

  async getDeviceInfo() {
    const deviceId = this.props.navigation.getParam(
      "deviceId",
      "Could not find Device ID"
    );

    const deviceName = this.props.navigation.getParam(
      "deviceName",
      "Could not find Device Name"
    );

    this.setState({ deviceId: deviceId, deviceName: deviceName });

    console.log(`control screen got id: ${deviceId}`);
    console.log(`control screen got name: ${deviceName}`);
    try {
      const deviceInfo = await ParticleWebService.getDeviceInfo(
        deviceId,
        AppConfig.testAccessToken
      );
      console.log(deviceInfo);
      this.setState({
        deviceId: deviceId,
        deviceInfo: deviceInfo
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      console.log("getting device info...");
      await this.getDeviceInfo();
    } catch (err) {}
  }

  render() {
    const device = this.state.deviceInfo;

    let deviceName;
    if (device != null && device.name === null) {
      deviceName = "Unnamed Device";
    } else if (device != null && device.name) {
      deviceName = device.name;
    }

    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>{this.state.deviceName}</Text>
          <Text style={styles.subHeader}>ID: {this.state.deviceId}</Text>
        </View>
        <ScrollView>
          <View>
            {device && device.functions != null ? (
              <DeviceFunctionList device={device} />
            ) : (
              <Text>Could not find functions</Text>
            )}

            {device && device.variables != null ? (
              <DeviceVariableList device={device} />
            ) : (
              <Text>Could not find variables</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: CustomStyles.buttonStyles,
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader,
  subHeader: CustomStyles.subHeader,
  readyButtonContainer: {
    alignItems: "center"
  },
  mainContainer: {
    padding: 10
  }
});
