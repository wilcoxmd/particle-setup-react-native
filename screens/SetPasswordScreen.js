import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import CustomStyles from "../styleconfig";
import AppConfig from "../config";
import ParticleDeviceSetup from "../services/ParticleDeviceSetup";

export class SetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordText: "",
      buttonText: "Connect"
    };
  }

  async connectToNetwork() {
    try {
      this.setState({ buttonText: "Connecting..." });
      console.log("configuring device to network...");
      const { navigation } = this.props;
      const network = navigation.getParam("network", "get networks error.");
      const deviceClaimCode = navigation.getParam("deviceClaimCode", null);

      let successScreen = "";
      if (deviceClaimCode) {
        console.log(`setting claim code: ${deviceClaimCode}`);
        const claimSetResponse = await ParticleDeviceSetup.setClaimCode(
          deviceClaimCode
        );
        //TODO: route to a screen to monitor device claim process, and verify success.
        successScreen = "WiFiConnectSuccess";
      } else {
        successScreen = "WiFiConnectSuccess";
      }

      let configured = await ParticleDeviceSetup.configureAP(
        network,
        this.state.passwordText
      );

      console.log("connecting...");
      let connected = await ParticleDeviceSetup.connectToNetwork();

      if (configured && connected) {
        this.setState({ buttonText: "Connect" });
        this.props.navigation.navigate(successScreen);
      } else {
        //TODO: show error screen.
        //this.props.navigation.navifate(errorScreen);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { navigation } = this.props;
    const network = navigation.getParam("network", "get networks error.");
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Connect to Network</Text>
          <Text style={styles.subHeader}>{network.ssid}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={{ marginBottom: 20 }}>
            Enter the password for "{network.ssid}":
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ passwordText: text })}
            value={this.state.passwordText}
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={async () => this.connectToNetwork()}
          >
            <Text style={styles.button}>{this.state.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  input: CustomStyles.textInput,
  button: CustomStyles.buttonStyles,
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader,
  subHeader: CustomStyles.subHeader,
  mainContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  }
};
