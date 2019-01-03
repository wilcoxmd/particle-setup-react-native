import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuIcon } from "../components/MenuIcon";
import { DeviceList } from "../components/DeviceList";
import CustomStyles from "../styleconfig";

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
        <DeviceList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader
});
