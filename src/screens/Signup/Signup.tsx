import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
  Alert,
} from 'react-native';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {Button, InputField} from '../../component/Index';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors/Color';
import {Fonts} from '../../utils/FontFamily/FontFamily';
// import {NavigationParams} from 'react-navigation';
import {shape} from '../../utils/Images/assest';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {setSignupData} from '../../store/Slice/SignupSlice';

const Signup = ({navigation}: any) => {
  const {name, email, password} = useSelector((state:any) => state.counter)
  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log("Name --> ", name);
    console.log("email --> ",email)
    console.log("Password --> ",password)
    // const checkFieldsError = checkFields(data);
    // setData({...checkFieldsError.InputFields});
    // if (!checkFieldsError.isError) {
    //   dispatch(setSignupData(data));
    //   Alert.alert('Login successful');
    //   navigation.navigate('Login');
    // } else {
    //   Alert.alert('Invalid credentials');
    // }
  };

  const onChangeHandler = (name: string, value: string) => {
    dispatch(setSignupData({key: name, value: value}));
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
                value={name}
                onChangeText={text => onChangeHandler('name', text)}
                // error={data.firstname.err}
              />

              <InputField
                placeholder="Enter your email"
                value={email}
                onChangeText={text => onChangeHandler('email', text)}
                // error={data.email.err}
              />
              <InputField
                placeholder="Enter password"
                value={password}
                onChangeText={text => onChangeHandler('password', text)}
                // error={data.password.err}
              />
            </View>
            <View>
              <Button tittle="Register" onPress={() => submitHandler()} />
              <Text
                style={[
                  globalStyles.subtxt,
                  {paddingVertical: verticalScale(12)},
                ]}>
                {Static.alreadyHaveaccount} ?{' '}
                <Text
                  style={{color: Colors.mahroom, fontFamily: Fonts.PoppinsBold}}
                  onPress={() => submitHandler()}>
                  {Static.signIn}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Your validation functions remain the same
// validation function for single field
export const isValid = (name: string, value: string) => {
  if (!value) {
    return `${name} is required!`;
  } else if (name === 'email') {
    const pattern = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
    return !pattern.test(value) ? `${name} must be valid` : null;
  } else if (name === 'password') {
    return value.length <= 4 ? `${name} length must be greater than 4` : null;
  } else {
    return null;
  }
};

// validation function for multiple fields
// export const checkFields = InputFields => {
//   let isError = false;
//   for (const field in InputFields) {
//     InputFields = {
//       ...InputFields,
//       [field]: {
//         value: InputFields[field].value,
//         err: isValid(field, InputFields[field].value),
//       },
//     };

//     if (InputFields[field].err) {
//       isError = true;
//     }
//   }
//   return {isError, InputFields};
// };

export default Signup;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  topConatiner: {
    alignItems: 'center',
    marginTop: verticalScale(50),
    width: '100%',
  },
  middleConatiner: {
    marginTop: verticalScale(30),
    marginVertical: verticalScale(20),
    gap: verticalScale(10),
  },
});
