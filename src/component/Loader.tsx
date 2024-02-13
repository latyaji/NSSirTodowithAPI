import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import LoaderJSON from '../utils/JSON/Loader.json';

const Loader = () => {
  return (
    <View style={styles.conatiner}>
      <LottieView
        source={LoaderJSON}
        autoPlay
        loop
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 1000,
  },
});
