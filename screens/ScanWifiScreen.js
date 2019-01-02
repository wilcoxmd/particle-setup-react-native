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
import { WifiInstructions } from "../components/WifiInstructions";

export class ScanWifiScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Scan Networks"
    };
  }

  async scanNetworks() {
    const { navigation } = this.props;
    const deviceClaimCode = navigation.getParam("deviceClaimCode", null);
    this.setState({ buttonText: "Scanning..." });
    try {
      console.log("starting scan...");
      const availableNetworks = await ParticleDeviceSetup.scanAP();
      console.log(`available networks: ${availableNetworks}`);
      this.setState({ buttonText: "Re-Scan Networks" });
      console.log("navigating");
      this.props.navigation.navigate("AvailableNetworks", {
        networks: availableNetworks,
        deviceClaimCode: deviceClaimCode
      });
    } catch (err) {
      console.log(err);
      this.setState({ buttonText: "Re-Scan Networks" });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 10 }}>This screen lets us scan wifi</Text>
        <WifiInstructions />
        <TouchableOpacity
          onPress={async () => {
            this.scanNetworks();
          }}
        >
          <Text style={style.button}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        {this.props.deviceClaimCode ? (
          <Text>{this.props.deviceClaimCode}</Text>
        ) : null}
      </View>
    );
  }
}

const style = {
  button: CustomStyles.buttonStyles
};
