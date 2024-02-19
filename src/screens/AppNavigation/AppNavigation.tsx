import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setoken, setIsLoggedIn} from '../../store/Slice/LoginSlice';
import {Home, Login, Signup, Splash} from '../index';
import Loader from '../../component/Loader';
import {showScreenFirstInstallation} from '../../store/Slice/LoaderSlice';

const Stack = createNativeStackNavigator();

const  AppNavigation = () => {
  const dispatch = useDispatch();
  const {token}: any = useSelector<any>(s => s.loginstore);

  useEffect(() => {
    getfbtoken();
  }, []);

  const getfbtoken = async () => {
    try {
      const tokenget = await AsyncStorage.getItem('TOKEN');
      // console.log('tokenget App Navigator  m =====>>', tokenget);
      tokenget && dispatch(setoken(tokenget));
    } catch (err) {
      console.log('error=====>>', err);
    }
  };
  // const {isLoading, firstInstallAppScreen}: any = useSelector<any>(
  //   s => s.loaderSlice,
  // );

  // console.log('checkkkkk#####', firstInstallAppScreen);

  // const datastore = async () => {
  //   const Token = await AsyncStorage.getItem('TOKEN');
  //   const SignUpData: any = await AsyncStorage.getItem('SIGNUPUSERDATA');
  //   Token &&
  //     dispatch(
  //       setIsLoggedIn({
  //         userData: JSON.parse(SignUpData),
  //         accessToken: Token,
  //       }),
  //     );
  //   // console.log('userData@@@@------', typeof JSON.parse(SignUpData));
  // };

  // useLayoutEffect(() => {
  //   // UI render Hone se pehle data chaiye hoto isko use krte hai
  //   datastore();
  //   AsyncStorage.getItem('first').then(value => {
  //     value && dispatch(showScreenFirstInstallation(true));
  //   });
  // }, []);

  return (
    // <NavigationContainer>
    //   <StatusBar
    //     barStyle="light-content"
    //     hidden={false}
    //     backgroundColor="transparent"
    //     translucent={true}
    //   />
    //   {isLoading && <Loader />}
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     {!isLoggedin && (
    //       <>
    //         {!firstInstallAppScreen && (
    //           <Stack.Screen name="Splash" component={Splash} />
    //         )}
    //         <Stack.Screen name="Login" component={Login} />
    //         <Stack.Screen name="Signup" component={Signup} />
    //       </>
    //     )}

    //     {isLoggedin && (
    //       <>
    //         <Stack.Screen name="Home" component={Home} />
    //         <Stack.Screen name="Sorting" component={Sorting} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      {!token && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
      {token && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
