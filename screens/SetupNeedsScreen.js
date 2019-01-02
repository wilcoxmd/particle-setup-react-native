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
import { GetIdScreen } from "./GetIdScreen";
import { ScanWifiScreen } from "./ScanWifiScreen";
import { GetReadyChecklist } from "../components/GetReadyChecklist";

export class SetupNeedsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToNextScreen() {
    const routeName = this.props.navigation.dangerouslyGetParent().state.key;

    let nextScreen;
    switch (routeName) {
      case "GetID":
        nextScreen = "GetID";
        break;
      case "ConfigureWifi":
        nextScreen = "ScanWifi";
        break;
      default:
        break;
    }
    console.log(`navigating to ${nextScreen}`);
    this.props.navigation.navigate(nextScreen);
  }

  render() {
    const { navigation } = this.props;
    const nextScreen = navigation.getParam("nextScreen", "screen not passed");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GetReadyChecklist />
        <TouchableOpacity onPress={() => this.navigateToNextScreen()}>
          <Text style={styles.button}>Ready</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles
};
