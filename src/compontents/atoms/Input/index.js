import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../index';
const Input = ({title, onChangeText, value, secureTextEntry}) => {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <Gap height={6} />
        <TextInput style={styles.input} onChangeText={onChangeText} value={value}  secureTextEntry={secureTextEntry}  />
     </View>
  );
}

const styles = StyleSheet.create({
    title : {
        fontFamily: fonts.primary[400],
        color: colors.black,
        fontSize: 14
    }, input : {
        borderWidth: 1,
        borderRadius:10,
        borderColor: colors.border,
        padding: 11
    }
});

export default Input;