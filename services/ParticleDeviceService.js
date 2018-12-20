var RSAKey = require("react-native-rsa");

const deviceUrl = "http://192.168.0.1";

class ParticleDeviceService {
  static async fetchDeviceId() {
    console.log("getting device id:");
    try {
      const response = await fetch(deviceUrl + "/device-id", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      //response format: {"id":"280020008761353136383631","c":"1"}
      await this.disconnectFromDevice();
      return data.id;
    } catch (err) {
      return "Hmm...Couldn't find your device. Did you connect to it's Wi-Fi network?";
      console.log(err);
    }
  }

  static async connectToNetwork() {
    try {
      const response = await fetch(deviceUrl + "/connect-ap", {
        method: "POST",
        body: JSON.stringify({ idx: 0 }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async scanAP() {
    try {
      const response = await fetch(deviceUrl + "/scan-ap", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      //response format:
      // {
      //   "scans":[{
      //       "ssid":"ssidName","rssi":-73,"sec":4194308,"ch":11,"mdr":144400},
      //       {"ssid":"ssidName","rssi":-67,"sec":4194310,"ch":11,"mdr":216700}
      //    }]
      // }
      return data.scans;
    } catch (err) {
      console.log(err);
    }
  }

  static async getPublicKey() {
    try {
      //console.log("getting public key...");
      const response = await fetch(deviceUrl + "/public-key", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      const publicKey = data.b;
      return publicKey;
    } catch (err) {
      console.log(err);
    }
  }

  static encryptPassword(key, password) {
    //console.log("encrypting passkey...");
    const keyBuf = new Buffer(key, "hex");
    //console.log(keyBuf);
    const rsa = new RSAKey();
    rsa.setPublicString(keyBuf.slice(22));

    // const rsa = new NodeRSA(keyBuf.slice(22), 'pkcs1-public-der', {
    //   encryptionScheme: 'pkcs1'
    // });

    const encryptedPass = rsa.encrypt(password);
    return encryptedPass;
    //console.log("encrypted password: " + encryptedPass);
  }

  static async configureAP(network, password) {
    try {
      const key = await this.getPublicKey();
      const encryptedPass = this.encryptPassword(key, password);

      const setupInfo = JSON.stringify({
        idx: 0,
        ssid: network.ssid,
        sec: network.sec,
        ch: network.ch,
        pwd: encryptedPass
      });

      const response = await fetch(deviceUrl + "/configure-ap", {
        method: "POST",
        body: setupInfo,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      const data = await response.json();
      return data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default ParticleDeviceService;
