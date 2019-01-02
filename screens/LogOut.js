import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  AsyncStorage
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions
} from "react-navigation";

export class LogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("SignIn");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Logging Out...</Text>
      </View>
    );
  }
}
