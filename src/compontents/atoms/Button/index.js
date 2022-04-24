import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const Button = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper(type)} onPress={onPress}>
      <Text style={styles.title} >{title}</Text>
     </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  wrapper: (type)  =>  ({
    backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
     height: 40,
     borderRadius: 40/2,
     justifyContent:'center',
     alignItems:'center'
  }), title:{
    fontFamily: fonts.primary[600],
    color: colors.white,
    fontSize: 16
  }
});
export default Button;