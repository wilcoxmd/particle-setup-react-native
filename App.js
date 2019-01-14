import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppConfig from "./config";
import AppNavigator from "./router";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
