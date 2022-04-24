import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {ILQuiz} from '../../assets';
import {colors, fonts} from '../../utils';
const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000)
  }, [])
  return (
    <View style={styles.page}>
      <ILQuiz width={320} height={320} style={styles.BackgroundImage} />
      <Text style={styles.title}>Kuis Pintar</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.primary
  },
  BackgroundImage:{
    backgroundColor: colors.white,
    borderRadius:35
  },
  title:{
    color:colors.white,
    fontFamily: fonts.primary[400],
    fontSize: 32
  }
});

export default Splash;