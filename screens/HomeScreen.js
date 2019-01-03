import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions
} from "react-navigation";
import { MenuIcon } from "../components/MenuIcon";
import { DeviceList } from "../components/DeviceList";

export class HomeScreen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: "Home",
      headerVisible: true,
      headerLeft: (
        <MenuIcon handlePress={() => props.navigation.openDrawer.bind(this)} />
      )
    };
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeader}>
          <Text>This is the home screen, which lists your devices.</Text>
        </View>
        <DeviceList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#F0F0F0"
  },
  bigHeader: {
    height: 150,
    justifyContent: "center",
    padding: 10
  }
});
