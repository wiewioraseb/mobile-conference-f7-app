https://phonegappro.com/tutorials/publish-a-phonegap-app-to-play-store-cordova-ionic/  


https://developer.android.com/studio/publish/app-signing.html     

$ cordova build --release android
This will generate release apk in platforms/android/build/outputs/apk/android-relase-unsigned.apk
Rename your apk with yourappname.apk & move the file into root folder

$ keytool -genkey -v -keystore skicup2017.keystore -alias skicup2017 -keyalg RSA -keysize 2048 -validity 10000  
  
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore skicup2017.keystore skicup2017.apk skicup2017  
  
$ /Users/sw/Library/Android/sdk/build-tools/25.0.1/zipalign -v 4 skicup2017.apk skicup2017-final.apk  

And ready for deploy
