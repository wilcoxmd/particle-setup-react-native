const particleApiEndpoint = "https://api.particle.io/v1";

export default class ParticleWebService {
  static async listCustomerDevices(accessToken) {
    try {
      const deviceList = await fetch(
        `https://api.particle.io/v1/devices?access_token=${accessToken}`,
        {
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
