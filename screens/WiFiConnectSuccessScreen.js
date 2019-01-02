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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ width: 250, marginBottom: 25 }}>
          Your device will now connect. Return to the home screen by tapping the
          Done button below
        </Text>
        <TouchableOpacity onPress={() => this.goBackHome()}>
          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: CustomStyles.buttonStyles
};
