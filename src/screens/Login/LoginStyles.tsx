import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
    },
    topConatiner: {
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
      alignItems: 'center',
      justifyContent: 'center',
    },
  });