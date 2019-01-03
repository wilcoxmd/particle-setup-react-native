# Particle Setup - React Native

An exploratory project for creating basic [Particle](https://www.particle.io) setup applications with react native.

## General Info

This project is in its very early phases. I'm planning on using the [Particle Cloud API](https://docs.particle.io/reference/device-cloud/api/) to pull data for most of the particle functions, rather than trying to use the Particle JS SDK. Other community members have reported difficulties integrating the out of the box SDK with React Native, so I wanted to see if this would be a more valid approach. I figured that we'd be able to get all the info we need to make a working app with just the Cloud API.

This app is built for use with the Photon / P1 / P0 family of devices. There are additional steps that will be required for Electrons or Mesh products.

This app will also be built first with the assumption that people will use it for building products, rather than just claiming individual devices to their developer account.

This means you'll need to insert a few of your own API endpoints for things like allowing a user to log in to the app. For our company, we handle all user registration through invites sent via our web app. The mobile app is purely for people who already have an accout. We'll operate in the same manner here.

## Getting Started

This app is built using [Expo](https://expo.io/), which makes development a little easier because you don't have to worry about setting up Xcode or Android Studio. It's also the recommended first steps from the React Native team. There are some pros and cons to this, which you can learn more about [here](https://docs.expo.io/versions/v31.0.0/introduction/why-not-expo).

In order to make the most of Expo, make sure you download the Expo Client app from the App Store or Google Play.

Before you start, there are a few things you'll need from your own API:

1. **An endpoint to handle logging in** You'll need a way to confirm someone is a legitimate user when they log in to the mobile app. Part of the response should be their particle access token. If you don't have this, or want to get your access tokens a different way, feel free to refactor.

### Basic building

Download or clone this repo, enter the directory and run:

```
npm install
```

to get all the packages you need.

### Configuration & Customization

You'll need to provide your own configurations for things like API urls or Particle Product parameters in a separate config file.

After downloading or cloning this repo, create a new file called `config.js` in the root directory (where App.js lives) and then copy and paste the following:

```
const apiBaseUrl = YOUR_URL;

const AppConfig = {
  productId: YOUR_PRODUCT_ID_NUMBER,
  clientId: YOUR_OAUTH_CLIENTID,
  clientSecret: YOUR_OAUTH_CLIENTSECRET,
  productSlug: YOUR_PRODUCT_SLUG,
  testAccessToken: YOUR_TEST_TOKEN,
  loginUrl: `${apiBaseUrl}YOUR_LOGIN_URL`,
};

export default AppConfig;
```

You can also customize styles in the provided `styleconfig.js` file

### Running the app in Expo

Make sure you have the Expo Client app downloaded on your device if you plan on using it to test your app. You can start a server to connect to by running:

```
npm start
```

This will launch expo and give you a QR code to scan with your phone's camera.
