import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WifiNetworkList } from "../components/WifiNetworkList";
import CustomStyles from "../styleconfig";

export class AvailableNetworksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.chooseNetwork = this.chooseNetwork.bind(this);
  }

  chooseNetwork(selectedNetwork) {
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
            Select the network you want to connect your device to
          </Text>
        </View>
        <ScrollView>
          <WifiNetworkList
            pressHandler={this.chooseNetwork}
            networks={networks}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: CustomStyles.screenContainer,
  bigHeaderContainer: CustomStyles.bigHeaderContainer,
  bigHeader: CustomStyles.bigHeader,
  subHeader: CustomStyles.subHeader
});
