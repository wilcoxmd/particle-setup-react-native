import React from "react";
import { View, Image, Animated, StyleSheet, Easing } from "react-native";

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View>
        <Animated.Image
          style={{
            width: 60,
            height: 60,
            transform: [{ rotate: spin }]
          }}
          source={require("../assets/spinner.png")}
        />
      </View>
    );
  }
}
