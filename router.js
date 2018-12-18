import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { AccountScreen } from "./screens/AccountScreen.js";
import { AuthLoadingScreen } from "./screens/AuthLoadingScreen";

const AppStack = createBottomTabNavigator({
  Home: HomeScreen,
  Account: AccountScreen
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
