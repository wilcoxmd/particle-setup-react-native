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
import { GetIdScreen } from "./screens/GetIdScreen";
import { SetupNeedsScreen } from "./screens/SetupNeedsScreen";
import { ScanWifiScreen } from "./screens/ScanWifiScreen";
import { SetupDeviceScreen } from "./screens/SetupDeviceScreen";
import { AvailableNetworksScreen } from "./screens/AvailableNetworksScreen";
import { SetPasswordScreen } from "./screens/SetPasswordScreen";
import { WifiConnectSuccessScreen } from "./screens/WiFiConnectSuccessScreen";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SetupNeeds: SetupNeedsScreen,
  GetId: GetIdScreen,
  ScanWifi: ScanWifiScreen,
  SetupDevice: SetupDeviceScreen,
  AvailableNetworks: AvailableNetworksScreen,
  SetPassword: SetPasswordScreen,
  WiFiConnectSuccess: WifiConnectSuccessScreen
});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Account: AccountScreen
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
