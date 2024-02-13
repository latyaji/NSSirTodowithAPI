import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { NavigationParams } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import publicinstance from '../../API_INTERCEPTOR/axios-interceptors';
import { checkFields, isValid } from '../../GlobalFunction/ValidationFunction';
import { InputField, PrimaryButton } from '../../component/Index';
import { setIsLoading } from '../../store/Slice/LoaderSlice';
import {
  setError,
  setIsLoggedIn,
  setLoginData,
} from '../../store/Slice/LoginSlice';
import { Colors } from '../../utils/Colors/Color';
import { Fonts } from '../../utils/FontFamily/FontFamily';
import { globalStyles } from '../../utils/GlobalStyle/GlobalStyles';
import { loginimg, shape } from '../../utils/Images/assest';
import { Static } from '../../utils/StaticFonts/StaticFonts';

const Login = ({navigation}: NavigationParams) => {
  const {email, password, data} = useSelector((state: any) => state.loginstore);
  const dispatch = useDispatch();

  const onChangeHandler = (name: string, value: string) => {
    dispatch(
      setLoginData({
        key: name,
        value: {value: value, error: isValid(name, value)},
      }),
    );
  };

  const submitHandler = async () => {
    try {
      let body = {
        email: email.value,
        password: password.value,
      };
      dispatch(setIsLoading(true));
      const {data} = await publicinstance.post(
        'auth/login',
        body,
      );
      dispatch(setIsLoading(false));

      if (data?.data?.accessToken) {
        AsyncStorage.setItem('TOKEN', data.data.accessToken);
        AsyncStorage.setItem(
          'SIGNUPUSERDATA',
          JSON.stringify(data.data.userData),
        );
        dispatch(
          setIsLoggedIn({
            userData: data.data.userData,
            accessToken: data.data.accessToken,
          }),
        );
      } else {
        dispatch(
          setError({
            isError: data.message,
          }),
        );
        Alert.alert('ERROR:', data.message);
        dispatch(setIsLoading(false));
      }
    } catch (e) {
      dispatch(setIsLoading(false));
      console.log('errror---->', e);
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={globalStyles.shapContainer}>
        <Image source={shape} style={globalStyles.shapeimg}></Image>
      </View>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.topConatiner}>
          <Text style={globalStyles.headingtxt}>{Static.loginpwelcometxt}</Text>
          <Text style={globalStyles.subtxt}>{Static.signupwelcomesubtxt}</Text>
          <Image
            source={loginimg}
            style={[globalStyles.shortImg, {marginTop: verticalScale(12)}]}
          />
        </View>
        <View style={styles.middleConatiner}>
          <InputField
            placeholder="Enter your email"
            onChangeText={text => onChangeHandler('email', text)}
            error={email.error}
            value={email.value}
          />
          <InputField
            placeholder="Confrom password"
            onChangeText={text => onChangeHandler('password', text)}
            error={password.error}
            value={password.value}
          />
        </View>
        <View style={styles.bottomConatiner}>
          <PrimaryButton
            isDisable={
              checkFields({
                email,
                password,
              }).isError
            }
            tittle="Login"
            onPress={() => submitHandler()}
          />
          <Text
            style={[globalStyles.subtxt, {paddingVertical: verticalScale(12)}]}>
            Don’t have an account ?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{color: Colors.mahroom, fontFamily: Fonts.PoppinsBold}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Login;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  topConatiner: {
    //flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: verticalScale(90),
  },
  middleConatiner: {
    marginTop: verticalScale(30),
    marginVertical: verticalScale(20),
    gap: verticalScale(20),
    width: '88%',
    alignItems: 'center',

    marginLeft: scale(20),
  },
  bottomConatiner: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
