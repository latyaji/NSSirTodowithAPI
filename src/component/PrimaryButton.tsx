import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../utils/Colors/Color';
import {Fonts} from '../utils/FontFamily/FontFamily';

export interface buttonprops {
  onPress?: () => void;
  tittle: string;
  isDisable?: boolean;
}

const PrimaryButton = ({onPress, tittle, isDisable}: buttonprops) => {
  return (
    <TouchableOpacity
      disabled={isDisable}
      onPress={onPress}
      style={[
        styles.buttonMainContainer,
        isDisable && {backgroundColor: Colors.darkgrey},
      ]}>
      <Text style={styles.btnTxt}>{tittle}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonMainContainer: {
    width: '100%',
    backgroundColor: Colors.orange,
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    borderRadius: 8,
  },
  btnTxt: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
    fontSize: scale(19),
  },
});
