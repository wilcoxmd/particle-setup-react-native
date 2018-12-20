import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomStyles from "../styleconfig";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is the home screen</Text>
        <TouchableOpacity onPress={this._signInAsync}>
          <Text style={styles.setupOption}>Configure New Device</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._signInAsync}>
          <Text style={styles.setupOption}>Configure Wi-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._signInAsync}>
          <Text style={styles.setupOption}>Get Device ID</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setupOption: CustomStyles.setupOption
});
