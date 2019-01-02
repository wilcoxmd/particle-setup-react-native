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
import { ScanWifiScreen } from "./ScanWifiScreen";

export class SetupDeviceScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "SetupDevice"
  };

  constructor(props) {
    super(props);
    this.state = {
      deviceClaimCode: null
    };
  }

  async componentDidMount() {
    try {
      const deviceClaimCode = await ParticleDeviceSetup.getProductClaimCode(
        AppConfig.productId,
        AppConfig.testAccessToken
      );
      this.setState({ deviceClaimCode: deviceClaimCode });
    } catch (err) {
      console.log(err);
    }
  }

  handleReady() {
    this.props.navigation.navigate("ScanWifi", {
      deviceClaimCode: this.state.deviceClaimCode
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ width: 250 }}>
          This screen will explain device setup and create a secure claim token
        </Text>
        <TouchableOpacity onPress={() => this.handleReady()}>
          <Text style={styles.setupOption}>Ready</Text>
        </TouchableOpacity>
        {/* <Text style={{ marginTop: 25, width: 300 }}>
          Our claim code: {this.state.deviceClaimCode}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setupOption: CustomStyles.setupOption,
  icon: {
    width: 24,
    height: 24
  }
});
