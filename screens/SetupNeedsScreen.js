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

export class SetupNeedsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen(screen) {
    console.log("navigating...");
    this.props.navigation.navigate(screen);
  }

  render() {
    const { navigation } = this.props;
    const nextScreen = navigation.getParam("nextScreen", "screen not passed");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This screen shows what we need to connect to a device</Text>
        <Text>The next screen will be: {nextScreen}</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen(nextScreen)}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles
};
