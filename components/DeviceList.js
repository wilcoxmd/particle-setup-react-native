import React from "react";
import { Device } from "./Device";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl
} from "react-native";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      message: "Fetching your devices...",
      refreshing: false
    };
  }

  async pullDeviceData() {
    try {
      const devices = await ParticleWebService.listCustomerDevices(
        AppConfig.testAccessToken
      );
      if (devices === undefined) {
        this.setState({
          message:
            "Could not load devices. Make sure you're connected to the network, then pull to refresh."
        });
      } else {
        this.setState({ deviceList: devices });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async refreshDeviceList() {
    this.setState({ refreshing: true });
    try {
      await this.pullDeviceData();
      this.setState({ refreshing: false });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      await this.refreshDeviceList();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.deviceList.length >= 1) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshDeviceList.bind(this)}
              title="Refreshing..."
            />
          }
        >
          <View style={styles.deviceList}>
            {this.state.deviceList.map((device, index) => {
              return <Device device={device} key={index} />;
            })}
          </View>
        </ScrollView>
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
