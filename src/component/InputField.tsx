import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../utils/Colors/Color';
import {Fonts} from '../utils/FontFamily/FontFamily';

interface inputprops {
  placeholder: string;
  value?: string;
  error?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: any;
}

const InputField = ({
  placeholder,
  value,
  onChangeText,
  error,
  containerStyle,
}: inputprops) => {
  return (
    <>
      <View style={[styles.txtInputContainer, containerStyle]}>
        <TextInput
          placeholder={placeholder}
          defaultValue={value}
          onChangeText={onChangeText}
          style={styles.textInput}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  txtInputContainer: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(25),
    // borderWidth:1,
    width: '100%',
    // height: verticalScale(40),
  },
  textInput: {
    paddingLeft: scale(20),
    fontSize: scale(15),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    // borderRadius: moderateScale(25),
    height: verticalScale(40),
  },
  errorText: {
    color: Colors.red, // Customize the color for error messages
    paddingLeft: scale(20),
  },
});
