import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View>
        <Button title="Super Easy Sign In!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}
