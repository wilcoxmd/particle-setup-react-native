import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WifiNetworkList } from "../components/WifiNetworkList";

export class AvailableNetworksScreen extends React.Component {
  onPressHandler(selectedNetwork) {
    const { navigation } = this.props;
    const deviceClaimCode = navigation.getParam("deviceClaimCode", null);
    this.props.navigation.navigate("SetPassword", {
      network: selectedNetwork,
      deviceClaimCode: deviceClaimCode
    });
  }

  render() {
    const { navigation } = this.props;
    const networks = navigation.getParam("networks", "get networks error.");

    return (
      <View style={styles.screenContainer}>
        <View style={styles.bigHeaderContainer}>
          <Text style={styles.bigHeader}>Available Networks</Text>
          <Text style={styles.subHeader}>
            Select a network you'd like to connect your device to
          </Text>
        </View>
        <ScrollView>
          <WifiNetworkList networks={networks} />
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
  },
  subHeader: {
    marginTop: 5,
    fontSize: 14,
    color: "#303030"
  }
});
