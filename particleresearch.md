# Particle Research

This file contains helpful info that we'll need pulled from [Particle](https://docs.particle.io/reference/device-cloud/api/) and [React Native](https://facebook.github.io/react-native/) documentation.

## Managing Users

We'll use the process descibed [here](https://github.com/rickkas7/particle_notes/tree/master/manual-photon-claiming#setting-up-a-product-device-two-legged) to setup a product device.

We'll need a key store to use for our OAuth credentials. Perhaps [react-native-secure-key-store](https://www.npmjs.com/package/react-native-secure-key-store), [react-native-sensitive-info](https://github.com/mcodex/react-native-sensitive-info), or [Expo Secure Store](https://docs.expo.io/versions/latest/sdk/securestore.html).

## Device Networking

Particle devices can be accessed over SoftAP. You can pull useful information like device ID numbers, or set Wi-Fi credentials by using http (not https) requests. Particle's @rickkas7 has put together some very helpful documentation on manual device setup [here](https://github.com/rickkas7/particle_notes/tree/master/manual-photon-claiming).

### Device http requests

After connecting to a Particle Device's Wi-Fi, you can:

1. Get device ID: `curl http://192.168.0.1/device-id`
2. Set a claim code: `curl -X POST -d '{"k":"cc","v":"4i8pwFwPkImsnLmIj54BYJA4Z94j0OLyl7vwKecELzYGKjS9mBbM5Vra6H9T0DI"}' http://192.168.0.1/set`
3. Get the device public key: `curl http://192.168.0.1/public-key`
4. Scan available Wi-Fi networks: `curl http://192.168.0.1/scan-ap`
5. Configure a new network on the device: `curl -X POST http://192.168.0.1/configure-ap -d '{"idx":0,"ssid":"TestRouter","sec":4194308,"ch":6,"pwd":"ad8965e3ddd9dc9544176adda3e35d70e8fb215e7de92da753fdde5829bba0f96d2f02162f1facd2ec08f93286010cd6c41569a9cf2190b5d6c869083bd11933201492ba9ea0a1a1265298691e23e68ce09f54f7bd50fe2d6f7308d4a412e0f95a5f14efff311314af71f4516e04af120b8619196a6c9a4876b69964ad06e608"}'`

Note that when you pass the `pwd` paramenter during network configuration, it needs to be the encrypted password for the network. This password can be generated using a user input password, the public key, and node-rsa. See rickas7's [wifipass example](https://github.com/rickkas7/particle_notes/tree/master/manual-photon-claiming/wifipass).

### NOTE

As per [React Native documentation on plain http requests](https://facebook.github.io/react-native/docs/network):

> By default, iOS will block any request that's not encrypted using SSL. If you need to fetch from a cleartext URL (one that begins with http) you will first need to add an [App Transport Security exception](https://facebook.github.io/react-native/docs/integration-with-existing-apps#test-your-integration). If you know ahead of time what domains you will need access to, it is more secure to add exceptions just for those domains; if the domains are not known until runtime you can disable [ATS completely](https://facebook.github.io/react-native/docs/integration-with-existing-apps#app-transport-security). Note however that from January 2017, Apple's App Store review will require reasonable justification for disabling ATS. See [Apple's documentation](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) for more information.

## Device Claiming

Before a device ever gets to the field, you need to get the ID numbers from them and add them to your product with:

```
$ curl -X POST https://api.particle.io/v1/products/PRODUCT_ID/devices -d access_token=ACCESS_TOKEN -d id=DEVICE_ID
```

Once the device is added to your product, you can start allowing customers to claim it.

1. Make sure the customer has an access token
2. Connect to the device's network
3. Grab its ID nubmer and private key once connected
4. Configure Wi-Fi credentials
5. Wait for device connection, then claim device to customer account using:

```
curl -X POST \
  https://api.particle.io/v1/devices \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d id=DEVICE_ID \
  -d request_transfer=true

```

Alternatively, you can send a claim code to the device instead of doing step 5. The claim code allows you to make the API call before knowing the device ID and before connecting to the Photon/P1 Wi-Fi. The claim code is passed to the device, which then connects to Wi-Fi and passes the information to the cloud, which associates the device and the account that created the claim code.

```
$ curl -X POST https://api.particle.io/v1/products/PRODUCT_ID/device_claims?access_token=ACCESS_TOKEN
```

which will return something like:

```
{"claim_code":"3GjxEdDu3eIWEs5C9WMun5etWsIC7KreXXHQ2JXAfBorHv+t26F04cFObo/FsL5","device_ids":[]}
```

After creating this claim code, you can send it to the device using:

```
curl -X POST -d '{"k":"cc","v":"3GjxEdDu3eIWEs5C9WMun5etWsIC7KreXXHQ2JXAfBorHv+t26F04cFObo/FsL5"}' http://192.168.0.1/set
```

If you did it correctly, the result should be: `{"r": 0}`.
