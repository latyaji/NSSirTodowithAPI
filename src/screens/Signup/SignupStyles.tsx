import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
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

})