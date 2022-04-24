import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../../../utils';
const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Kuis Kita</Text>
     </View>
  );
}
const styles = StyleSheet.create({
    container : {
        
    }, title :{
      fontFamily: fonts.primary[700],
      fontSize:32,
      color:colors.primary,
      textAlign:'center',
    }
});

export default Header;