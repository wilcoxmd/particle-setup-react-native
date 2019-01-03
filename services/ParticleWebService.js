const particleApiEndpoint = "https://api.particle.io/v1";
import fetch from "react-native-fetch-polyfill";

export default class ParticleWebService {
  static async listCustomerDevices(accessToken) {
    try {
      const deviceList = await fetch(
        `https://api.particle.io/v1/devices?access_token=${accessToken}`,
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
}
