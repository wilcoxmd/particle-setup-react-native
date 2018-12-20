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
import ParticleDeviceService from "../services/ParticleDeviceService";

export class GetIdScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress() {
    const deviceid = ParticleDeviceService.fetchDeviceId();
    console.log(`device id: ${deviceid}`);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This screen lets us get a device ID.</Text>
        <TouchableOpacity onPress={() => this.handlePress}>
          <Text style={style.button}>Get ID!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = {
  button: CustomStyles.buttonStyles
};
