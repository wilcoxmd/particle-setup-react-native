# Particle Setup - React Native

An example project for creating [Particle](https://www.particle.io) device setup and control applications with React Native.

## General Info

This app is built for people building products, rather than just claiming individual devices to their developer account.

This means you'll need to insert a few of your own API endpoints for things like allowing a user to log in to the app. For our company, we handle all user registration through invites sent via our web app. The mobile app is purely for people who already have an accout. We'll operate in the same manner here.

There is currently support for the Photon / P1 / P0 family of devices. There are additional steps that will be required for Electrons or Mesh products. If you'd like to contribute to this end, please submit a PR.

## Getting Started

Before you start, there are a few things you'll need from your own API:

1. **An endpoint to handle logging in**
   You'll need a way to confirm someone is a legitimate user when they log in to the mobile app. Part of the response should be their particle access token. If you don't have this, or want to get your access tokens a different way, feel free to refactor.

### Basic building

Download or clone this repo, enter the directory and run:

```
npm install
```

to get all the packages you need.

### Working with ExpoKit

This app was built using [Expo](<(https://docs.expo.io/versions/latest/)>) and detached with [ExpoKit](https://docs.expo.io/versions/v28.0.0/expokit/) to make use of some native libraries. To use ExpoKit during development, make sure you install `exp` using:

```
npm install -g exp
```

You'll also need to create an account with expo. Immediately after installing `exp`, you'll want to then use those new login credentials and call

```
exp login
```

To start and test your app, run:

```
exp start
```

Next, make sure you have your ios and android directories fully set up by following these instructions:

1. [iOS](https://docs.expo.io/versions/v28.0.0/expokit/expokit.html#3-ios-configure-build-and-run)
2. [Android](https://docs.expo.io/versions/v28.0.0/expokit/expokit.html#4-android-build-and-run)

Once you have all your dependencies installed, you should be able to build and run the app in your simulator of choice.

### Continuing with development

Every time you want to develop, ensure your project's JS is being served by `exp`, then run the native code from Xcode or Android Studio respectively.

Your ExpoKit project is configured to load your app's published url when you build it for release. So when you want to release it, don't forget to publish, like with any normal (non-ExpoKit) project.

## Configuration & Customization

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
