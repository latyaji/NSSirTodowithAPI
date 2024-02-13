import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import publicinstance from '../../API_INTERCEPTOR/axios-interceptors';
import { checkFields, isValid } from '../../GlobalFunction/ValidationFunction';
import { InputField, PrimaryButton } from '../../component/Index';
import { setIsLoading } from '../../store/Slice/LoaderSlice';
import { setError, setIsLoggedIn } from '../../store/Slice/LoginSlice';
import { clearSignupData, setSignupData } from '../../store/Slice/SignupSlice';
import { Colors } from '../../utils/Colors/Color';
import { Fonts } from '../../utils/FontFamily/FontFamily';
import { globalStyles } from '../../utils/GlobalStyle/GlobalStyles';
import { shape } from '../../utils/Images/assest';
import { Static } from '../../utils/StaticFonts/StaticFonts';
import { styles } from './SignupStyles';

const Signup = ({navigation}: any) => {
  const {name, email, password, data} = useSelector(
    (state: any) => state.counter,
  );

  const dispatch = useDispatch(); 

  const submitHandler = async () => {
    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    try {
      let body = formData;
      dispatch(setIsLoading(true));
      const {data} = await publicinstance.post('auth/signup', body);

      if (data.success) {
        AsyncStorage.setItem('TOKEN', data.data.accessToken);
        AsyncStorage.setItem(
          'SIGNUPUSERDATA',
          JSON.stringify(data.data.userData),
        );

        dispatch(setIsLoggedIn(data.data));

        dispatch(setIsLoading(false));
        navigation.navigate('Login');
        dispatch(clearSignupData());
      } else {
        dispatch(
          setError({
            isError: data.message,
          }),
        );
        Alert.alert('ERROR:', data.message);
      }
    } catch (e) {
      dispatch(setIsLoading(false));
      console.log(e);
    }
  };

  const onChangeHandler = (name: string, value: any) => {
    dispatch(
      setSignupData({
        key: name,
        value: {value: value, error: isValid(name, value)},
      }),
    );
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={globalStyles.shapContainer}>
        <Image source={shape} style={globalStyles.shapeimg}></Image>
      </View>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={styles.topConatiner}>
              <Text style={globalStyles.headingtxt}>
                {Static.signupwelcometxt}
              </Text>
              <Text style={globalStyles.subtxt}>
                {Static.signupwelcomesubtxt}
              </Text>
            </View>
            <View style={styles.middleConatiner}>
              <InputField
                placeholder="Enter your full name"
                value={name.value}
                onChangeText={text => onChangeHandler('name', text)}
                error={name.error}
              />

              <InputField
                placeholder="Enter your email"
                value={email.value}
                onChangeText={text => onChangeHandler('email', text)}
                error={email.error}
              />
              <InputField
                placeholder="Enter password"
                value={password.value}
                onChangeText={text => onChangeHandler('password', text)}
                error={password.error}
              />
            </View>
            <View>
              <PrimaryButton
                isDisable={
                  checkFields({
                    name,
                    email,
                    password,
                  }).isError
                }
                tittle="Register"
                onPress={() => submitHandler()}
              />
              <Text
                style={[
                  globalStyles.subtxt,
                  {paddingVertical: verticalScale(12)},
                ]}>
                {Static.alreadyHaveaccount} ?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      color: Colors.mahroom,
                      fontFamily: Fonts.PoppinsBold,
                    }}>
                    {Static.signIn}
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
