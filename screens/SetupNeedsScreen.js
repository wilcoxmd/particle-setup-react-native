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
import { MenuIcon } from "../components/MenuIcon";

export class SetupNeedsScreen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: "Connect to Device",
      headerVisible: true,
      headerLeft: (
        <MenuIcon handlePress={() => props.navigation.openDrawer.bind(this)} />
      )
    };
  };

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
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Get Ready</Text>
        </View>
        <GetReadyChecklist />
        <TouchableOpacity
          style={styles.readyButtonContainer}
          onPress={() => this.navigateToNextScreen()}
        >
          <Text style={styles.button}>Ready</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles,
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader,
  readyButtonContainer: {
    alignItems: "center"
  }
};
