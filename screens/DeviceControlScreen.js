import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomStyles from "../styleconfig";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: null
    };
  }

  async getDeviceInfo() {
    const deviceId = this.props.navigation.getParam(
      "deviceId",
      "Could not find Device ID"
    );
    this.setState({ deviceId });
    console.log(`control screen got id: ${deviceId}`);
    try {
      //   const deviceInfo = await ParticleWebService.getDeviceInfo(
      //     deviceId,
      //     AppConfig.testAccessToken
      //   );
      //   console.log(deviceInfo);
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    await this.getDeviceInfo();
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Device Control</Text>
          <Text style={styles.subHeader}>Shows device controls and info</Text>
        </View>
        <View>
          <Text>Device ID: {this.state.deviceId}</Text>
        </View>
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
  }
});
