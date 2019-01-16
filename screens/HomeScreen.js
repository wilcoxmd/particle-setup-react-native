import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuIcon } from "../components/MenuIcon";
import { DeviceList } from "../components/DeviceList";
import CustomStyles from "../styleconfig";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.goToDevice = this.goToDevice.bind(this);
  }
  static navigationOptions = function(props) {
    return {
      title: "Home",
      headerVisible: true,
      headerLeft: (
        <MenuIcon handlePress={() => props.navigation.openDrawer.bind(this)} />
      )
    };
  };

  goToDevice(deviceId, deviceName) {
    if (deviceName === null) deviceName = "Unnamed Device";
    this.props.navigation.navigate("DeviceControl", {
      deviceId: deviceId,
      deviceName: deviceName
    });
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Your Devices</Text>
        </View>
        <DeviceList handleSelection={this.goToDevice} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader
});
