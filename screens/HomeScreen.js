import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Your Devices</Text>
        </View>
        <ScrollView>
          <DeviceList />
        </ScrollView>
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
  bigHeaderContainer: {
    height: 150,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1
  },
  bigHeader: {
    fontSize: 24,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#303030"
  }
});
