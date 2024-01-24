import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {Button, InputField} from '../../component/Index';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors/Color';
import {Fonts} from '../../utils/FontFamily/FontFamily';
import {NavigationParams} from 'react-navigation';
import {loginimg, shape} from '../../utils/Images/assest';
import { useSelector } from 'react-redux';

const Login = ({navigation}: NavigationParams) => {
  const [data, setData] = useState({
    email: {value: '', error: ''},
    password: {value: '', error: ''},
  });
  const signupData = useSelector(store => store)
  console.log("signupdata@@@",signupData)
  const onChangeHandler = (name: string, value: string) => {
    setData({...data, [name]: {value, error: isValid(name, value)}});
  };
  const submitHandler = () => {
    const checkFieldsError = checkFields(data);
    setData({...checkFieldsError.InputFields});
    if (!checkFieldsError.isError) {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Invalid credentials');
    }
  };
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={globalStyles.shapContainer}>
        <Image source={shape} style={globalStyles.shapeimg}></Image>
      </View>
      <ScrollView>
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
            error={data.email.error}
            value={data.email.value}
          />
          <InputField
            placeholder="Confrom password"
            onChangeText={text => onChangeHandler('password', text)}
            error={data.password.error}
            value={data.password.value}
          />
        </View>
        <View style={styles.bottomConatiner}>
          <Button tittle="Login" onPress={() => submitHandler()} />
          <Text
            style={[globalStyles.subtxt, {paddingVertical: verticalScale(12)}]}>
            Don’t have an account ?{' '}
            <Text
              style={{color: Colors.mahroom, fontFamily: Fonts.PoppinsBold}}
              onPress={() => submitHandler()}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const isValid = (name: string, value: string) => {
  if (!value) {
    return `${name} is required`;
  } else if (name == 'email') {
    const pattern = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
    return !pattern.test(value) ? `${name} must be valid` : null;
  } else if (name == 'password') {
    return value.length <= 4 ? `${name} length must be greater than 4` : null;
  } else {
    return null;
  }
};
// validation function for multiple fields
export const checkFields = InputFields => {
  let isError = false;
  for (const field in InputFields) {
    InputFields = {
      ...InputFields,
      [field]: {
        value: InputFields[field].value,
        err: isValid(field, InputFields[field].value),
      },
    };

    if (InputFields[field].err) {
      isError = true;
    }
  }
  return {isError, InputFields};
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
