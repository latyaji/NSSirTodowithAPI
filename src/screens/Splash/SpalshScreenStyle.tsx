import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Colors/Color';
import { Fonts } from '../../utils/FontFamily/FontFamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgcontainer: {
    flex: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  
  },
  splashimg: {
    width: scale(200),
    height: verticalScale(180),
    resizeMode: 'contain',
  },
  txtContainer: {
    flex: 3,
    alignItems:"center"
  },
  btnContainer:{
    flex: 1.8,
    alignSelf:"center"
  },
  getTxt: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: scale(20),
    color: Colors.black,
    
  }
});
