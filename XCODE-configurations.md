Statusbar overlays splash screen. This turns off status bar at the beginning of startup.

<key>UIStatusBarHidden</key>  
<true/>  
<key>UIViewControllerBasedStatusBarAppearance</key>  
<false/>  

<key>ITSAppUsesNonExemptEncryption</key><false/>
  
When releasing application to App Store:  
Development info  
  Devices: iPhone  
  Main interface:  CDVLaunchScreen  

Remove info.plist
	<key>NSMainNibFile~ipad</key>
	<string></string>

Not anymore - Copy GoogleService-Info.plist to platforms/ios/Ski Cup 2017/

Makes no difference - Capabilities -> Push Notifications -> ON

---- working ----
sandbox true - must, at least for dev
remove platform/ios
add platform/ios
xcode in project general tick automatically manage signing 
In build settings for Debug pick iOS Developer/iOS Developer, for Release iOS Developer/iOS Developer

--- for production? ---
sandbox false
tick automatically manage signing 
build settings Debug pick iOS Distribution/iOSDeveloper, for Release iOS Distribution/iOSDeveloper
but
sandbox false
untick automatically manage signing
provision profile SOME
build settings - all iPhone Distribution
causes on TestFlight app being unavailable


 ---- not working -----
To handle so xCode will create a release version:  
In Build tab in xCode, in Signing section -> uncheck Automatcailly manag signing  
In section Signing (Debug and Release) pick Provisioning Profile  
In build settings 

Verify if this is still necessary  

App using encryption?  
<key>ITSAppUsesNonExemptEncryption</key><false/>

<plugin name="cordova-plugin-geolocation" source="npm">  
<param name="GEOLOCATION_USAGE_DESCRIPTION" value="Determine location in reference to location beacons"/>  
</plugin>  

<key>NSPhotoLibraryUsageDescription</key>  
<string>Photo Library Access Warning</string>  
  



iOS certs for push notifications:  
https://firebase.google.com/docs/cloud-messaging/ios/certs  



ecCqwoe9_60:APA91bG1SqxdA4Me3U3OMnjtM_5lAXiEGeY8y3T5uDzm1htKGCA-bQc7IDljzNOsZk2k4nP-MuLlYs_eGjYjCPSK33ritHUj5Uup0F3bR2422_pwEzil9bZkiJkNeorFDk-N4PcG0BmN
