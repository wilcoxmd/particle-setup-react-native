import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomStyles from "../styleconfig";
import ParticleDeviceSetup from "../services/ParticleDeviceSetup";
import { WifiInstructions } from "../components/WifiInstructions";

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
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Connect to Device</Text>
          <Text style={styles.subHeader}>
            Retrieve info from a your local device
          </Text>
        </View>
        <WifiInstructions buttonName="Get Info" />
        <TouchableOpacity
          style={styles.getIdButtonContainer}
          onPress={async () => this.handlePress()}
        >
          <Text style={styles.button}>Get Info</Text>
        </TouchableOpacity>
        <Text style={{ marginBottom: 10, marginTop: 25 }}>
          {deviceIdString}
        </Text>
        <Text>{reconnectionString}</Text>
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
  getIdButtonContainer: {
    alignItems: "center"
  }
});
