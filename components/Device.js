import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export class Device extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.deviceContainer}
        onPress={() => this.props.handlePress(this.props.device.id)}
      >
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
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#D3D3D3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  textContainer: {
    marginLeft: 16
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
  }
});
