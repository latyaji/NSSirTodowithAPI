import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
    },
    cameraImg: {
      width: 40,
      height: 40,
      resizeMode: 'cover',
    },
    welcomeTxt: {
      fontSize: 20,
      color: Colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: verticalScale(25),
    },
    roundViewCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 600,
    },
    roundImg: {
      marginVertical: 20,
      borderRadius: 600,
      marginTop: verticalScale(90),
    },
    logoutBtnView: {
      paddingTop: 40,
      zIndex: 1,
      marginRight: scale(20),
    },
    taskTxt: {
      fontSize: scale(17),
      margin: verticalScale(10),
      fontWeight: 'bold',
    },
    dailyTxt: {
      fontSize: scale(14),
      margin: verticalScale(10),
      fontWeight: 'bold',
    },
    card: {
      width: '90%',
      backgroundColor: Colors.white,
      alignSelf: 'center',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 9,
      shadowOpacity: 0.26,
      elevation: 8,
      borderRadius: scale(20),
      marginTop: verticalScale(20),
      paddingBottom: verticalScale(20),

    },
    plusView: {
      borderWidth: 2,
      width: '12%',
      // height: 40,
      borderRadius: 60,
      alignSelf: 'flex-end',
      // margin: verticalScale(15),
      borderColor: Colors.darkorage,
    },
    plusIcon: {
      fontSize: scale(25),
      alignSelf: 'center',
      color: Colors.darkorage,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      marginTop: scale(50),
      backgroundColor: Colors.grey,
    },
    text: {
      color: '#3f2949',
      marginTop: 10,
    },
    test: {
      fontSize: 16,
      marginTop: 10,
    },
    deleteIcon:{
      width:scale(20),
      height:verticalScale(20),
      resizeMode:"contain"
    },
    dailyTaskView:{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:verticalScale(20)
    }
  });