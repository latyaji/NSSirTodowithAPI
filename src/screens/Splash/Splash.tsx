import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';
import { Button } from '../../component/Index';
import { shape, splashscreenboyimg } from '../../utils/Images/assest';
import { Static } from '../../utils/StaticFonts/StaticFonts';
import { styles } from './SpalshScreenStyle';
import { globalStyles } from '../../utils/GlobalStyle/GlobalStyles';
import { verticalScale } from 'react-native-size-matters';

const Splash = ({navigation}: NavigationParams) => {
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
        <Text style={[globalStyles.subtxt,{marginTop:20}]}>{Static.spalshscreenloremtxt1}</Text>
        <Text style={globalStyles.subtxt}>{Static.spalshscreenloremtxt2}</Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          tittle={'Get Started'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Splash;
