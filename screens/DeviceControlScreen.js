import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl
} from "react-native";
import CustomStyles from "../styleconfig";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";
import { DeviceControls } from "../components/DeviceControls";
import { Spinner } from "../components/Spinner";
import GoHomeButton from "../components/GoHomeButton";

export class DeviceControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: null,
      deviceName: null,
      deviceInfo: null,
      loading: true,
      refreshing: false
    };
  }

  static navigationOptions = function(props) {
    return {
      title: "Device Control",
      headerVisible: true,
      headerLeft: <GoHomeButton />
    };
  };

  async getDeviceInfo() {
    const deviceId = this.props.navigation.getParam(
      "deviceId",
      "Could not get Device ID"
    );

    const deviceName = this.props.navigation.getParam(
      "deviceName",
      "Could not get Device Name"
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
        deviceInfo: deviceInfo,
        deviceName: deviceInfo.name
      });

      return deviceInfo;
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      console.log("getting device info...");
      await this.getDeviceInfo();
      this.setState({ loading: false });
    } catch (err) {}
  }

  async refreshDeviceControls() {
    this.setState({ refreshing: true, message: "" });
    try {
      await this.getDeviceInfo();
      this.setState({ refreshing: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const device = this.state.deviceInfo;

    if (device != null && device.name === null) {
      deviceName = "Unnamed Device";
    } else if (device != null && device.name) {
      deviceName = device.name;
    }

    const spinner = (
      <View style={styles.spinnerContainer}>
        <Spinner />
      </View>
    );

    let deviceControls;
    if (device != null && device.connected) {
      deviceControls = <DeviceControls deviceInfo={this.state.deviceInfo} />;
    } else {
      deviceControls = (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            padding: 20
          }}
        >
          <Text
            style={{
              marginBottom: 15,
              fontSize: 16,
              fontWeight: "400"
            }}
          >
            This device is offline
          </Text>
          <Text>
            Bring the device back online, then pull to refresh and view controls
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>{this.state.deviceName}</Text>
          <Text style={styles.subHeader}>ID: {this.state.deviceId}</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshDeviceControls.bind(this)}
              title="Refreshing..."
            />
          }
        >
          {this.state.loading ? spinner : deviceControls}
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
  spinnerContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 100
  }
});
