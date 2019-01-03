import React from "react";
import { Device } from "./Device";
import { View, StyleSheet, Text } from "react-native";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      message: "Fetching your devices..."
    };
  }

  async componentDidMount() {
    try {
      console.log("fetching devices...");
      const devices = await ParticleWebService.listCustomerDevices(
        AppConfig.testAccessToken
      );
      console.log(`got devices: ${devices}`);

      if (devices === undefined) {
        this.setState({ message: "Could not load devices" });
      } else {
        this.setState({ deviceList: devices });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(`current device list: ${this.state.deviceList}`);
    if (this.state.deviceList.length >= 1) {
      return (
        <View style={styles.deviceList}>
          {this.state.deviceList.map((device, index) => {
            return <Device device={device} key={index} />;
          })}
        </View>
      );
    } else {
      return (
        <View style={styles.deviceList}>
          <Text>{this.state.message}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  deviceList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10
  }
});
