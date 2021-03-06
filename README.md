# UdaciCards: Mobile Flashcards App

UdaciCards is a mobile flashcard app for IOS and Android, developed using React
Native and Redux. This application is the the third project for
[Udacity's](httpd://www.udacity.com)
[React Developer Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

## Table of Contents

* [Quick Start](#quick-start)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn run ios](#yarn-run-ios)
  * [yarn run android](#yarn-run-android)
  * [yarn run eject](#yarn-run-eject)
* [Supported Platforms](#supported-platforms)

## Quck Start

1. To get start simply run `yarn` to install project dependencies.
2. Once dependencies are installed run `yarn start`
3. Follow on screen instructions to run the application

## Screenshots
<img src="screenshots/udacicards-1.png" >
<img src="screenshots/udacicards-2.png" >


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will
reload if you save edits to your files, and you will see build errors and logs
in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To
do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if
you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android
device or emulator. Requires an installation of Android build tools (see
[React Native docs](https://facebook.github.io/react-native/docs/getting-started.html)
for detailed setup). We also recommend installing Genymotion as your Android
emulator. Once you've finished setting up the native build environment, there
are two options for making the right copy of `adb` available to Create React
Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android
   SDK tools” and update with your
   [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally
   `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for
   [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/),
   [Linux](http://www.computerhope.com/issues/ch001647.htm), and
   [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Supported Platforms

This project is designed for both IOS and Android and has been tested on:

* iOS 11 on iPhone 7plus
* iOS Simulator (iPhone 8 and iPhone X)running IOS 11
* Google Nexus 5X running Android 8.0
