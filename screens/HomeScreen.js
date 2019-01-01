import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions
} from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
import CustomStyles from "../styleconfig";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  // uncomment to have button for menu
  // static navigationOptions = function(props) {
  // return {
  //   title: "Home",
  //   headerVisible: true,
  //   headerLeft: (
  //     <Button onPress={() => props.navigation.openDrawer()} title="Menu" />
  //   )
  // };
  // };

  navigateToScreen(screen) {
    console.log("navigating...");
    this.props.navigation.navigate("SetupNeeds", {
      nextScreen: screen
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is the home screen</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen("SetupDevice")}>
          <Text style={styles.setupOption}>Configure New Device</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen("ScanWifi")}>
          <Text style={styles.setupOption}>Configure Wi-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen("GetId")}>
          <Text style={styles.setupOption}>Get Device ID</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setupOption: CustomStyles.setupOption,
  icon: {
    width: 24,
    height: 24
  }
});
