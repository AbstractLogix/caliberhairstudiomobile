# caliberhairstudiomobile

Caliber Hair Studio Mobile App

CLIENT NEEDS
1)	Schedulicity integration – there’s no API so it will just be a “Schedule an appointment” button
2)	Product display and sales – on hand in store square integration
3)	Profiles for stylists and their work ( portfolios )
4)	Photos of the shop
5)	Square integration – has a robust API
6)	Amazon style suggested items , ratings etc. everything that can improve the customer buying experience ( web 3.0 )


Tech 
•	React Native 
o	Expo
o	Tailwind CSS
o	React native elements, vector icons, and safe area context

Architecture
Square integration is the crux of this application and I’ve decided to use Square’s payment SDK to handle payments.


Screens
1.	HomeScreen
2.	Shop screen
a.	Product screen
3.	Checkout ? – square SDK
4.	Profiles
a.	Portfolios


---notes---

Expo-cli required
react required
yarn start


  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/omiranda/dev_folder/caliberhairstudiomobile/test_frontend/frontend" && npx react-native run-android

  Run instructions for iOS:
    • cd "/Users/omiranda/dev_folder/caliberhairstudiomobile/test_frontend/frontend" && npx react-native run-ios
    - or -
    • Open frontend/ios/frontend.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
