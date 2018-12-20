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

export class SetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordText: "",
      buttonText: "Connect"
    };
  }

  async connectToNetwork() {
    console.log("configuring device to network...");
    const { navigation } = this.props;
    const network = navigation.getParam("network", "get networks error.");
    let result = await ParticleDeviceService.configureAP(
      network,
      this.state.passwordText
    );
    console.log("connecting...");
    let connected = await ParticleDeviceService.connectToNetwork();
  }

  render() {
    const { navigation } = this.props;
    const network = navigation.getParam("network", "get networks error.");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 10 }}>
          We'll be connecting to: {network.ssid}
        </Text>
        <Text style={{ marginBottom: 10 }}>Enter your network password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ passwordText: text })}
          value={this.state.passwordText}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={async () => this.connectToNetwork()}>
          <Text style={styles.button}>{this.state.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  input: CustomStyles.textInput,
  button: CustomStyles.buttonStyles
};