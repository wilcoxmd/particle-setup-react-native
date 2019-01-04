import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomStyles from "../styleconfig";
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
      const availableNetworks = await ParticleDeviceSetup.scanAP();

      this.setState({ buttonText: "Re-Scan Networks" });

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
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Scan Networks</Text>
          <Text style={styles.subHeader}>
            Follow the instructions below to connect your device
          </Text>
        </View>
        <WifiInstructions />
        <TouchableOpacity
          style={styles.readyButtonContainer}
          onPress={async () => {
            this.scanNetworks();
          }}
        >
          <Text style={styles.button}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        {this.props.deviceClaimCode ? (
          <Text>{this.props.deviceClaimCode}</Text>
        ) : null}
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
  }
});
