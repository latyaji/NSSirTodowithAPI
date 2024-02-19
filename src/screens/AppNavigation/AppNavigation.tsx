import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setoken} from '../../store/Slice/LoginSlice';
import {Home, Login, Signup, Splash} from '../index';
import Loader from '../../component/Loader';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  const {token}: any = useSelector<any>(s => s.loginstore);
  const {isLoading}: any = useSelector<any>(s => s.loaderSlice);

  useEffect(() => {
    getfbtoken();
  }, []);

  const getfbtoken = async () => {
    try {
      const tokenget = await AsyncStorage.getItem('TOKEN');
      tokenget && dispatch(setoken(tokenget));
    } catch (err) {
      console.log('error=====>>', err);
    }
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      {isLoading && <Loader />}

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
