import React from "react";
import { Animated, StyleSheet, Easing } from "react-native";

export class OnlineIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.fade();
  }

  fade() {
    this.state.fadeAnim.setValue(0);
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 4500,
      easing: Easing.inOut(Easing.quad)
    }).start(() => this.fade());
  }

  render() {
    let { fadeAnim } = this.state;

    const opacity = fadeAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    return (
      <Animated.View
        style={
          this.props.connected
            ? { opacity, ...styles.onlineIndicator }
            : styles.offlineIndicator
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  onlineIndicator: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "#4BADE9"
  },
  offlineIndicator: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "#BEBEBE"
  }
});
