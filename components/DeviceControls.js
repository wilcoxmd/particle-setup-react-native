import React from "react";
import { View, ScrollView } from "react-native";

import { DeviceFunctionList } from "../components/DeviceFunctionList";
import { DeviceVariableList } from "../components/DeviceVariableList";

export class DeviceControls extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <DeviceFunctionList device={this.props.deviceInfo} />
          <DeviceVariableList device={this.props.deviceInfo} />
        </View>
      </ScrollView>
    );
  }
}
