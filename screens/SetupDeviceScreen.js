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
import { GetReadyChecklist } from "../components/GetReadyChecklist";
import { MenuIcon } from "../components/MenuIcon";

export class SetupDeviceScreen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: "New Device Setup",
      headerVisible: true,
      headerLeft: (
        <MenuIcon handlePress={() => props.navigation.openDrawer.bind(this)} />
      )
    };
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
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Get Ready</Text>
        </View>
        <GetReadyChecklist />
        <TouchableOpacity
          style={styles.readyButtonContainer}
          onPress={() => this.handleReady()}
        >
          <Text style={styles.button}>Ready</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles,
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader,
  readyButtonContainer: {
    alignItems: "center"
  }
};
