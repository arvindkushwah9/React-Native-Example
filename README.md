# Welcome to ReactNative 

## Requirements
1.	Nodejs version 12.13.1
2.	react-native-cli: 2.0.1
3.	react-native: 0.61.5
4.	[Android Studio](https://developer.android.com/studio/index.html?hl=es-419)
5.	An android emulator with Android 9.0 x86


## Set up the project

1. `git clone https://github.com/arvindkushwah9/React-Native-Example.git`
2. `cd React-Native-Example`
3. `npx install`


## How to run it on (Android)

1.	Open a Windows CMD or Linux terminal on the project root directory
2.	  Run `react-native link` command​​​​​​
3.	Open your android studio emulator
4.	Run `npx react-native run-android` command


## Deployment
### Android Bundle debug build:
``react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
``

### Generate your release APK:
``cd android && ./gradlew assembleRelease
``
### App Store

- Upgrade Build number:

```bash
cd ios/ && open React-Native-Example.xcworkspace
```

!['build number']('./build-number.png)

- Deploy:

```bash
yarn deploy:ios
```
