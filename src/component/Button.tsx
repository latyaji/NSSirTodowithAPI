import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../utils/Colors/Color';
import {Fonts} from '../utils/FontFamily/FontFamily';

export interface buttonprops {
  onPress: () => void;
  tittle: string;
}

const Button = ({onPress, tittle}: buttonprops) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonMainContainer}>
      <Text style={styles.btnTxt}>{tittle}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  buttonMainContainer: {
    backgroundColor: Colors.orange,
    paddingHorizontal: scale(100),
    paddingVertical: verticalScale(10),
    //borderRadius: moderateScale(17),
    alignItems: 'center'
  },
  btnTxt: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
    fontSize: scale(19),
  },
});
