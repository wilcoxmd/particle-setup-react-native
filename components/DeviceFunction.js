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

export class DeviceFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionArgText: "",
      functionResponse: null
    };
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
          <TouchableOpacity>
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
  functionBody: {
    flexDirection: "row"
  },
  functionButton: {
    backgroundColor: "#D3D3D3",
    width: 80,
    height: 35,
    textAlign: "center",
    paddingTop: 8,
    marginLeft: 10
  },
  argInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    width: 100,
    padding: 10,
    backgroundColor: "white"
  },
  repsonseText: {
    marginLeft: 10,
    paddingTop: 8
  }
});
