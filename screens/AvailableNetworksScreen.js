import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomStyles from "../styleconfig";
import AppConfig from "../config";
import ParticleDeviceSetup from "../services/ParticleDeviceSetup";

export class AvailableNetworksScreen extends React.Component {
  onPressHandler(selectedNetwork) {
    console.log("navigating");
    console.log(`sending network: ${selectedNetwork.ssid}`);

    const { navigation } = this.props;
    const deviceClaimCode = navigation.getParam("deviceClaimCode", null);
    this.props.navigation.navigate("SetPassword", {
      network: selectedNetwork,
      deviceClaimCode: deviceClaimCode
    });
  }

  render() {
    const { navigation } = this.props;
    const networks = navigation.getParam("networks", "get networks error.");
    let networkList = [];
    networks.forEach(network => {
      networkList.push(
        <TouchableOpacity onPress={() => this.onPressHandler(network)}>
          <View style={style.networkOption}>
            <Text style={style.networkOptionText}>{network.ssid}</Text>
            <Text style={style.networkOptionText}>
              Signal Strength: {network.rssi} dBm
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    console.log(`available passed networks ${networks[0].ssid}`);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0F0F0"
        }}
      >
        <Text>We found some networks!</Text>
        <Text>Select which one you'd like to connect your device to.</Text>
        <Text style={{ marginTop: 25, marginBottom: 25 }}>
          Don't see your network? Hit back and then re-scan.
        </Text>
        <View
          style={{
            height: 400,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: "#d6d7da",
            backgroundColor: "white"
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 0,
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "white"
            }}
          >
            {networkList}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const style = {
  networkOption: CustomStyles.networkOption,
  networkOptionText: CustomStyles.networkOptionText
};
