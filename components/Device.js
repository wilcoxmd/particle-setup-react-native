import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export class Device extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.deviceContainer}>
        <Text style={styles.primaryText}>
          {this.props.device.name ? this.props.device.name : "Unnamed Device"}
        </Text>
        <Text>{this.props.device.connected ? "Online" : "Offline"}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deviceContainer: {
    height: 72,
    backgroundColor: "white",
    marginBottom: 10,
    // width: 250,
    padding: 5,
    shadowColor: "#D3D3D3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  primaryText: {
    marginBottom: 5
  },
  secondaryText: {}
});
