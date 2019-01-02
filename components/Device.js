import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

export class Device extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "white",
            marginBottom: 10,
            width: 250,
            padding: 5,
            shadowColor: "#D3D3D3",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2
          }}
        >
          <Text style={{ marginBottom: 5 }}>{this.props.deviceName}</Text>
          <Text>{this.props.connected ? "Online" : "Offline"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
