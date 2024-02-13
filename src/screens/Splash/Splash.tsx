import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';
import { PrimaryButton } from '../../component/Index';
import { globalStyles } from '../../utils/GlobalStyle/GlobalStyles';
import { shape, splashscreenboyimg } from '../../utils/Images/assest';
import { Static } from '../../utils/StaticFonts/StaticFonts';
import { styles } from './SpalshScreenStyle';


const Splash = ({navigation}: NavigationParams) => {
  const handleOneTime = () => {
    AsyncStorage.setItem('first', 'true');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={globalStyles.shapContainer}>
        <Image source={shape} style={globalStyles.shapeimg}></Image>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={splashscreenboyimg} style={globalStyles.shortImg} />
      </View>
      <View style={styles.txtContainer}>
        <Text style={globalStyles.headingtxt}>{Static.splashscreenget}</Text>
        <Text style={[globalStyles.subtxt, {marginTop: 20}]}>
          {Static.spalshscreenloremtxt1}
        </Text>
        <Text style={globalStyles.subtxt}>{Static.spalshscreenloremtxt2}</Text>
      </View>

      <View style={styles.btnContainer}>
        <PrimaryButton tittle={'Get Started'} onPress={() => handleOneTime()} />
      </View>
    </View>
  );
};

export default Splash;
