import {StyleSheet} from 'react-native';
import {Fonts} from '../FontFamily/FontFamily';
import {scale, verticalScale} from 'react-native-size-matters';
import { Colors } from '../Colors/Color';

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
  shapeimg:{width:"60%",height:"80%"},
  shapContainer:{position:"absolute",height:340,width:"100%"},
  shortImg:{ width: scale(200),
    height: verticalScale(180),
    resizeMode: 'contain'},
    iconImg:{
      width:'12%',
      height:30,
      resizeMode:"contain"
    },
    container:{
      flex:1,
    },
    toastContainer:{
      maxWidth: '95%',
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#fff',
      marginVertical: 4,
      borderRadius: 8,
      borderLeftColor: '#00C851',
      borderLeftWidth: 6,
      justifyContent: 'center',
      paddingLeft: 16,
    },
    toastContainertxt: {
      fontSize: 14,
      color: '#333',
      fontWeight: 'bold',
    },
    toastContainermsgtxt:{color: '#a3a3a3', marginTop: 2}
});
