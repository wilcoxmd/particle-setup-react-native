import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { OnlineIndicator } from "./OnlineIndicator";

export class Device extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.deviceContainer}
        onPress={() =>
          this.props.handlePress(this.props.device.id, this.props.device.name)
        }
      >
        <View style={styles.indicationContainer}>
          <OnlineIndicator connected={this.props.device.connected} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.primaryText}>
            {this.props.device.name ? this.props.device.name : "Unnamed Device"}
          </Text>
          <Text style={styles.secondaryText}>
            {this.props.device.connected ? "Online" : "Offline"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deviceContainer: {
    height: 64,
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#D3D3D3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  textContainer: {
    flexDirection: "column"
  },
  primaryText: {
    marginTop: 14,
    fontSize: 14
  },
  secondaryText: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "100",
    marginTop: 3,
    color: "#303030"
  },
  indicationContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  }
});
