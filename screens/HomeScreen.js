import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions
} from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
import CustomStyles from "../styleconfig";
import AppConfig from "../config";
import ParticleWebService from "../services/ParticleWebService";
import { Device } from "../components/Device";
import { Ionicons } from "@expo/vector-icons";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deviceList: [] };
  }

  static navigationOptions = function(props) {
    return {
      title: "Home",
      headerVisible: true,
      headerLeft: (
        <View style={{ marginLeft: 20 }}>
          <Ionicons
            name="md-menu"
            onPress={() => props.navigation.openDrawer()}
            size={24}
          />
        </View>
      )
    };
  };

  async componentDidMount() {
    try {
      const devices = await ParticleWebService.listCustomerDevices(
        AppConfig.testAccessToken
      );
      this.setState({ deviceList: devices });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F0F0F0"
        }}
      >
        <Text style={{ width: 250, marginBottom: 25 }}>
          This is the home screen, which lists your devices.
        </Text>
        {this.state.deviceList.map(device => {
          if (device.name === null) {
            return (
              <Device
                deviceName="Device Name: No Name"
                connected={device.connected}
              />
            );
          } else {
            return (
              <Device
                deviceName={`Device Name: ${device.name}`}
                connected={device.connected}
              />
            );
          }
        })}
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
