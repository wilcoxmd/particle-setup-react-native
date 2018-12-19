import React from "react";
import {
  View,
  Text,
  Button,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomStyles from "../styleconfig";

export class SignInScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Button title="Super Easy Sign In!" onPress={this._signInAsync} /> */}
        <TouchableOpacity onPress={this._signInAsync}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
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
