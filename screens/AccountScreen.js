import React from "react";
import {
  View,
  Text,
  Button,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomStyles from "../styleconfig";

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this._signOutAsync}>
          <Text style={styles.button}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("SignIn");
  };
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: CustomStyles.buttonBackgroundColor,
    padding: CustomStyles.buttonPadding,
    borderRadius: CustomStyles.buttonBorderRadius,
    fontWeight: CustomStyles.buttonFontWeight,
    textAlign: CustomStyles.buttonTextAlign,
    color: CustomStyles.buttonTextColor,
    width: CustomStyles.buttonWidth
  }
});
