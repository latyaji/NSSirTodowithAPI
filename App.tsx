import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import AppNavigation from './src/screens/AppNavigation/AppNavigation';
import {store} from './src/store/Store';
import {globalStyles} from './src/utils/GlobalStyle/GlobalStyles';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider
        placement="top"
        offset={10}
        renderType={{
          custom_toast: toast => (
            <View style={globalStyles.toastContainer}>
              <Text style={globalStyles.toastContainertxt}>
                {toast.data.title}
              </Text>
              <Text style={globalStyles.toastContainermsgtxt}>
                {toast.message}
              </Text>
            </View>
          ),
        }}>
        <AppNavigation />
      </ToastProvider>
    </Provider>
  );
};

export default App;




// import React, { useState, useEffect } from 'react';
// import { Linking, ActivityIndicator } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { DashBoard, Home, Login, Signup, Splash } from './src/screens';

// const Stack = createStackNavigator();
// const NAVIGATION_IDS = ['Home', 'DashBoard', 'Login'];

// function buildDeepLinkFromNotificationData(data): string | null {
//   const navigationId = data?.navigationId;
//   if (!NAVIGATION_IDS.includes(navigationId)) {
//     console.warn('Unverified navigationId', navigationId)
//     return null;
//   }
//   if (navigationId === 'home') {
//     console.log("Home")
//    //return 'myapp://home';
//   }
//   if (navigationId === 'DashBoard') {
//     console.log("DashBoard")
//     // return 'myapp://settings';
//   }
//   const postId = data?.postId;
//   if (typeof postId === 'string') {
//     console.log("Login")
//     // return `myapp://post/${postId}`
//   }
//   console.warn('Missing postId')
//   return null
// }

// const linking = {
//   prefixes: ['myapp://'],
//   config: {
//     initialRouteName: 'Home',
//     screens: {
//       Home: 'Home',
//       Post: 'post/:id',
//       Settings: 'DashBoard'
//     }
//   },
//   async getInitialURL() {
//     const url = await Linking.getInitialURL();
//     if (typeof url === 'string') {
//       return url;
//     }
//     //getInitialNotification: When the application is opened from a quit state.
//     const message = await messaging().getInitialNotification();
//     const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
//     if (typeof deeplinkURL === 'string') {
//       return deeplinkURL;
//     }
//   },
//   subscribe(listener: (url: string) => void) {
//     const onReceiveURL = ({url}: {url: string}) => listener(url);

//     // Listen to incoming links from deep linking
//     const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

//     //onNotificationOpenedApp: When the application is running, but in the background.
//     const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
//       const url = buildDeepLinkFromNotificationData(remoteMessage.data)
//       if (typeof url === 'string') {
//         listener(url)
//       }
//     });

//     return () => {
//       linkingSubscription.remove();
//       unsubscribe();
//     };
//   },
// }

// function App() {
//   return (
//     <NavigationContainer linking={linking} fallback={<ActivityIndicator animating />}>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="DashBoard" component={DashBoard} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


