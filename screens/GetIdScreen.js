import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomStyles from "../styleconfig";
import AppConfig from "../config";
import ParticleDeviceSetup from "../services/ParticleDeviceSetup";

export class GetIdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceIdNumber: "",
      deviceConnected: false
    };
  }

  async handlePress() {
    console.log("handle press fired.");
    const deviceid = await ParticleDeviceSetup.fetchDeviceId();
    console.log(`device id: ${deviceid}`);
    this.setState({
      deviceIdNumber: deviceid,
      deviceConnected: true
    });
  }

  render() {
    let deviceIdString;
    let reconnectionString;
    if (this.state.deviceConnected) {
      deviceIdString = `Your device id is: ${this.state.deviceIdNumber}`;
      reconnectionString = "Your device will now reconnect to the network";
    } else {
      deviceIdString = "";
      reconnectionString = "";
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 25 }}>
          This screen lets us get a device ID.
        </Text>
        <TouchableOpacity onPress={async () => this.handlePress()}>
          <Text style={style.button}>Get ID!</Text>
        </TouchableOpacity>
        <Text style={{ marginBottom: 10, marginTop: 25 }}>
          {deviceIdString}
        </Text>
        <Text>{reconnectionString}</Text>
      </View>
    );
  }
}

const style = {
  button: CustomStyles.buttonStyles
};
