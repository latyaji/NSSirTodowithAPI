import {StyleSheet} from 'react-native';
import {Fonts} from '../FontFamily/FontFamily';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const globalStyles = StyleSheet.create({
  headingtxt: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: scale(22),
    color: Colors.black,
  },
  subtxt: {
    fontSize: scale(13),
    lineHeight: verticalScale(20),
    fontFamily: Fonts.PoppinsMedium,
    alignSelf: 'center'
  },
  shapeimg:{width:"68%",height:"100%"},
  shapContainer:{position:"absolute",height:300,width:"100%"},
  shortImg:{ width: scale(200),
    height: verticalScale(180),
    resizeMode: 'contain',}
});
