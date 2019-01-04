import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { AuthLoadingScreen } from "./screens/AuthLoadingScreen";
import { GetIdScreen } from "./screens/GetIdScreen";
import { SetupNeedsScreen } from "./screens/SetupNeedsScreen";
import { ScanWifiScreen } from "./screens/ScanWifiScreen";
import { SetupDeviceScreen } from "./screens/SetupDeviceScreen";
import { AvailableNetworksScreen } from "./screens/AvailableNetworksScreen";
import { SetPasswordScreen } from "./screens/SetPasswordScreen";
import { WifiConnectSuccessScreen } from "./screens/WiFiConnectSuccessScreen";
import { DeviceControlScreen } from "./screens/DeviceControlScreen";
import { LogOut } from "./screens/LogOut";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  DeviceControl: DeviceControlScreen
});

const SetupStack = createStackNavigator({
  SetupDevice: SetupDeviceScreen,
  ScanWifi: ScanWifiScreen
});

SetupStack.navigationOptions = {
  drawerLabel: "Setup New Device"
};

const GetIDStack = createStackNavigator({
  SetupNeeds: SetupNeedsScreen,
  GetID: GetIdScreen,
  DeviceControl: DeviceControlScreen
});

GetIDStack.navigationOptions = {
  drawerLabel: "Get Device ID"
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
