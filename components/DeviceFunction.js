import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import CustomStyles from "../styleconfig";
import ParticleWebService from "../services/ParticleWebService";
import AppConfig from "../config";

export class DeviceFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionArgText: "",
      functionResponse: null
    };
  }

  async callFunction() {
    this.setState({ functionResponse: "Connecting..." });
    try {
      const response = await ParticleWebService.callDeviceFunction(
        this.props.funcName,
        this.props.device.id,
        AppConfig.testAccessToken,
        this.state.functionArgText
      );
      this.setState({ functionResponse: `Response: ${response.return_value}` });
    } catch (err) {
      console.log(err);
      this.setState({ functionResponse: "Error! Check connection." });
    }
  }

  render() {
    return (
      <View style={styles.deviceFunction}>
        <View style={styles.functionHeader}>
          <Text>{this.props.funcName}</Text>
        </View>
        <View style={styles.functionBody}>
          <TextInput
            style={styles.argInput}
            placeholder="Args"
            onChangeText={text => this.setState({ functionArgText: text })}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => this.callFunction()}>
            <Text style={styles.functionButton}>Call</Text>
          </TouchableOpacity>
          <Text style={styles.repsonseText}>
            {this.state.functionResponse ? this.state.functionResponse : ""}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deviceFunction: CustomStyles.deviceOperation,
  functionHeader: CustomStyles.operationHeader,
  functionBody: CustomStyles.operationBody,
  functionButton: CustomStyles.operationButton,
  argInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    width: 125,
    padding: 10,
    backgroundColor: "white"
  },
  repsonseText: CustomStyles.operationResponse
});
