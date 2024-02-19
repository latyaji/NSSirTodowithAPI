import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {NavigationParams} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {checkFields, isValid} from '../../GlobalFunction/ValidationFunction';
import {InputField, PrimaryButton} from '../../component/Index';
import {setLoginData, setoken} from '../../store/Slice/LoginSlice';
import {Colors} from '../../utils/Colors/Color';
import {Fonts} from '../../utils/FontFamily/FontFamily';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {loginimg, shape} from '../../utils/Images/assest';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {styles} from './LoginStyles';

import auth from '@react-native-firebase/auth';
import {setProfileUserData} from '../../store/Slice/ProfileImageSlice';
import {setIsLoading} from '../../store/Slice/LoaderSlice';

const Login = ({navigation}: NavigationParams) => {
  const {email, password, token, userDataById} = useSelector(
    (state: any) => state.loginstore,
  );
  const dispatch = useDispatch();

  const onChangeHandler = (name: string, value: string) => {
    dispatch(
      setLoginData({
        key: name,
        value: {value: value, error: isValid(name, value)},
      }),
    );
  };

  const signupDatagetfromfirebase = async (userDataById: any) => {
    try {
      dispatch(setIsLoading(true));
      firestore()
        .collection('TodoTaskSignupData')
        .doc(userDataById)
        .get()
        .then(data => {
          console.log(data.data());
          dispatch(setIsLoading(false));
          dispatch(setProfileUserData(data.data()));
        });
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log('error', error);
    }
  };

  const loginWithFirebase = async () => {
    try {
      dispatch(setIsLoading(true));
      const userCredential = await auth().signInWithEmailAndPassword(
        email.value,
        password.value,
      );
      dispatch(setIsLoading(false));
      const token = userCredential.user.uid;
      signupDatagetfromfirebase(token);
      await AsyncStorage.setItem('TOKEN', token);
      dispatch(setoken(token));
      navigation.navigate('Home');
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error.code === 'auth/operation-not-allowed') {
        Alert.alert('Enable anonymous in your firebase console.');
      }
      Alert.alert('Error', 'invalid-credential');
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
            onPress={() => loginWithFirebase()}
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
