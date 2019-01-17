import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  NavigationActions,
  StackActions,
  withNavigation
} from "react-navigation";

class GoHomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.goBackHome = this.goBackHome.bind(this);
  }

  goBackHome() {
    console.log("going home");
    const parent = this.props.navigation.dangerouslyGetParent();
    console.log(`parent: ${parent}`);
    const intialRoute = parent.state.routes[0].routeName;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: intialRoute })]
    });
    this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate("Home");
  }

  render() {
    console.log(`props: ${JSON.stringify(this.props)}`);
    return (
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => this.goBackHome()}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(GoHomeButton);
