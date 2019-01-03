import React from "react";
import { Device } from "./Device";
import { View, StyleSheet } from "react-native";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deviceList: [] };
  }

  async componentDidMount() {
    try {
      const devices = await ParticleWebService.listCustomerDevices(
        AppConfig.testAccessToken
      );
      this.setState({ deviceList: devices });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.deviceList}>
        {this.state.deviceList.map((device, index) => {
          return <Device device={device} key={index} />;
        })}
      </View>
    );
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
