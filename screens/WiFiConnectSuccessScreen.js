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
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions,
  StackActions
} from "react-navigation";
import CustomStyles from "../styleconfig";

export class WifiConnectSuccessScreen extends React.Component {
  goBackHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "SetupNeeds" })]
    });

    this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Connection Success!</Text>
          <Text style={styles.subHeader}>Nice work.</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.successMessage}>
            Your device will now connect to your Wi-Fi network. Return to the
            home screen by tapping the Done button below.
          </Text>
          <TouchableOpacity onPress={() => this.goBackHome()}>
            <Text style={styles.button}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  screenContainer: CustomStyles.screenContainer,
  bigHeader: CustomStyles.bigHeader,
  subHeader: CustomStyles.subHeader,
  mainContainer: {
    padding: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  successMessage: {
    marginTop: 25,
    marginBottom: 50
  }
};
