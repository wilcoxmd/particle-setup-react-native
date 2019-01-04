const particleApiEndpoint = "https://api.particle.io/v1";
import fetch from "react-native-fetch-polyfill";

const particleAPI = "https://api.particle.io/v1";

export default class ParticleWebService {
  static async listCustomerDevices(accessToken) {
    try {
      const deviceList = await fetch(
        `${particleAPI}/devices?access_token=${accessToken}`,
        {
          timeout: 5000,
          method: "GET",
          dataType: "JSON"
        }
      );
      const deviceListJson = await deviceList.json();
      return deviceListJson;
    } catch (err) {
      console.log(err);
    }
  }

  static async getDeviceInfo(deviceId, accessToken) {
    try {
      const device = await fetch(
        `${particleAPI}/devices/${deviceId}?access_token=${accessToken}`,
        {
          timeout: 5000,
          method: "GET",
          dataType: "JSON"
        }
      );
      const deviceJson = await device.json();
      return deviceJson;
    } catch (err) {
      console.log(err);
    }
  }
}
