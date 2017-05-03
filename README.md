ABOUT START: https://facebook.github.io/react-native/

BUILD IN EMULATE (first start virtual device):
(RUN virtual device)
react-native run-android

START IN EMULATE (last start virtual device):
(RUN virtual device)
react-native start

BUILD PROD:
cd android
gradlew assembleReleas
cd ../

(get app in: D:\Android\AwesomeProject\android\app\build\outputs\apk)
