import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {checkFields, isValid} from '../../GlobalFunction/ValidationFunction';
import {InputField, PrimaryButton} from '../../component/Index';
import {setuserDataById} from '../../store/Slice/LoginSlice';
import {setSignupData} from '../../store/Slice/SignupSlice';
import {Colors} from '../../utils/Colors/Color';
import {Fonts} from '../../utils/FontFamily/FontFamily';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {shape} from '../../utils/Images/assest';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {styles} from './SignupStyles';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {setIsLoading} from '../../store/Slice/LoaderSlice';

const Signup = ({navigation}: any) => {
  const {name, email, password} = useSelector((state: any) => state.counter);

  const dispatch = useDispatch();

  const onChangeHandler = (name: string, value: any) => {
    dispatch(
      setSignupData({
        key: name,
        value: {value: value, error: isValid(name, value)},
      }),
    );
  };

  const adddta = async (currentUserId: string) => {
    try {
      dispatch(setIsLoading(true));
      const adddnewata = await firestore();
      firestore()
        .collection('TodoTaskSignupData')
        .doc(currentUserId)
        .set({
          name: name.value,
          email: email.value,
          password: password.value,
          uid: currentUserId,
        })
        .then(data => {
          dispatch(setIsLoading(false));
          dispatch(setuserDataById(currentUserId));
          Alert.alert('SignUp Successfully');
          navigation.navigate('Login');
        });
    } catch (err) {
      dispatch(setIsLoading(false));
      console.log(err);
    }
  };

  const SignupwithEmailPasswordAuth = () => {
    dispatch(setIsLoading(true));
    auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(data => {
        dispatch(setIsLoading(false));
        adddta(data.user.uid);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(setIsLoading(false));
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          dispatch(setIsLoading(false));

          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
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
                onPress={() => SignupwithEmailPasswordAuth()}
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
