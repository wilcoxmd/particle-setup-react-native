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
import { Spinner } from "./Spinner";

export class DeviceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      message: "Fetching your devices...",
      refreshing: false,
      loading: true
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
            "Could not load devices. \nMake sure you're connected to the network, then pull to refresh."
        });
      } else {
        this.setState({ deviceList: devices });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      await this.pullDeviceData();
      this.setState({ loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  async refreshDeviceList() {
    this.setState({ refreshing: true, message: "" });
    try {
      await this.pullDeviceData();
      this.setState({ refreshing: false });
    } catch (err) {
      console.log(err);
    }
  }

  showContent() {
    if (this.state.deviceList.length >= 1) {
      return (
        <View style={styles.deviceList}>
          {this.state.deviceList.map((device, index) => {
            return (
              <Device
                device={device}
                key={index}
                handlePress={this.props.handleSelection}
              />
            );
          })}
        </View>
      );
    } else {
      return (
        <View style={styles.listMsg}>
          <Text>{this.state.message}</Text>
        </View>
      );
    }
  }

  render() {
    const spinnerContainer = (
      <View style={styles.spinnerContainer}>
        <Spinner />
        <Text style={{ marginTop: 15 }}>Fetching your devices...</Text>
      </View>
    );

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
        {this.state.loading ? spinnerContainer : this.showContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deviceList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10
  },
  listMsg: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  spinnerContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 100
  }
});
