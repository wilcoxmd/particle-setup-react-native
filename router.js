import React from "react";
import { View, Text, Button } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
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
import { LogOut } from "./screens/LogOut";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   SetupNeeds: SetupNeedsScreen,
//   GetId: GetIdScreen,
//   ScanWifi: ScanWifiScreen,
//   SetupDevice: SetupDeviceScreen,
//   AvailableNetworks: AvailableNetworksScreen,
//   SetPassword: SetPasswordScreen,
//   WiFiConnectSuccess: WifiConnectSuccessScreen
// });

// const AppStack = createBottomTabNavigator({
//   Home: HomeStack,
//   Account: AccountScreen
// });

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeScreen.navigationOptions = function(props) {
  return {
    title: "Home",
    headerVisible: true,
    headerLeft: (
      <Button onPress={() => props.navigation.openDrawer()} title="Menu" />
    )
  };
};

const SetupStack = createStackNavigator({
  SetupDevice: SetupDeviceScreen,
  ScanWifi: ScanWifiScreen
});

SetupStack.navigationOptions = {
  drawerLabel: "Setup New Device"
};

SetupDeviceScreen.navigationOptions = function(props) {
  return {
    title: "New Device Setup",
    headerVisible: true,
    headerLeft: (
      <Button onPress={() => props.navigation.openDrawer()} title="Menu" />
    )
  };
};

const GetIDStack = createStackNavigator({
  SetupNeeds: SetupNeedsScreen,
  GetID: GetIdScreen
});

GetIDStack.navigationOptions = {
  drawerLabel: "Get Device ID"
};

SetupNeedsScreen.navigationOptions = function(props) {
  return {
    title: "How to Connect",
    headerVisible: true,
    headerLeft: (
      <Button onPress={() => props.navigation.openDrawer()} title="Menu" />
    )
  };
};

const ConfigureWifiStack = createStackNavigator({
  SetupNeeds: SetupNeedsScreen,
  ScanWifi: ScanWifiScreen,
  AvailableNetworks: AvailableNetworksScreen,
  SetPassword: SetPasswordScreen,
  WiFiConnectSuccess: WifiConnectSuccessScreen
});

ConfigureWifiStack.navigationOptions = {
  drawerLabel: "Configure Wi-Fi"
};

LogOut.navigationOptions = {
  drawerLabel: "Log Out"
};

const DrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
  Setup: SetupStack,
  ConfigureWifi: ConfigureWifiStack,
  GetID: GetIDStack,
  LogOut: LogOut
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
