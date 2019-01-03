import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WifiNetwork } from "./WifiNetwork";

export class WifiNetworkList extends React.Component {
  render() {
    return (
      <View style={styles.wifiList}>
        {this.props.networks.map((network, index) => {
          return (
            <WifiNetwork
              selectionHandler={this.props.pressHandler}
              network={network}
              key={index}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wifiList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10
  }
});
