import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class AccountScreen extends React.Component {
  static navigationOptions = {
    title: "Account Screen"
  };
  constructor(props) {
    super(props);
    //this._signOutAsync = this._signOutAsync.bind(this);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Button title="Super Easy Sign Out!" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("SignIn");
  };
}
