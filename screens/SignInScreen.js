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

export class SignInScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      emailText: "",
      passwordText: "",
      buttonText: "Sign In",
      errorText: ""
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ width: 250, height: 100 }}>
          <Image
            source={require("../assets/logo-main.png")}
            style={{ width: 250 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ marginBottom: 25 }}>Sign in to your account:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ emailText: text })}
          value={this.state.emailText}
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ passwordText: text })}
          value={this.state.passwordText}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this._signInAsync}>
          <Text style={styles.button}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 25 }}>{this.state.errorText}</Text>
      </View>
    );
  }

  _signInAsync = async () => {
    this.setState({ buttonText: "Signing in..." });
    const loginParams = {
      email: this.state.emailText,
      password: this.state.passwordText
    };
    try {
      console.log(`connecting to ${AppConfig.loginUrl}...`);
      let response = await fetch(AppConfig.loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginParams)
      });

      if (response.status === 200) {
        let responseJson = await response.json();
        if (responseJson.token) {
          console.log("Sign in Success");
          await AsyncStorage.setItem("userToken", "abc");
          this.props.navigation.navigate("App");
        } else {
          throw new Error(`Got unexpected response: ${responseJson}`);
        }
      } else {
        //request failed
        this.setState({ buttonText: "Sign In" });
        let responseText = await response.text();
        this.setState({ errorText: responseText });
      }
    } catch (err) {
      this.setState({ buttonText: "Sign In" });
      console.log(err);
    }
  };
}

const styles = StyleSheet.create({
  button: CustomStyles.buttonStyles,
  input: CustomStyles.textInput
});
