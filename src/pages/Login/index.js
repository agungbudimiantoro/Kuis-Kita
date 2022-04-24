import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fonts, colors } from '../../utils';
import { Button, Gap, Input } from '../../compontents';

const Login = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Kuis Pintar</Text>
        <Gap height={8} />
        <Text style={styles.desc}>yuk belajar dengan metode kuis yang menyenangkan</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.titleLogin}>Login</Text>
        <Gap height={16} />
        <Input title="E-Mail" />
        <Gap height={16} />
        <Input title="Password" />
        <Gap height={32} />
        <Button title="Login" />
        <Gap height={16} />
        <Button title="Buat Akun" type="secondary"
         onPress={() => navigation.navigate('Register')} />
      </View>
     </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor: colors.primary
  },container :{
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }, content: {
    backgroundColor: colors.white,
    flex:1,
    borderTopRightRadius: 35,
    borderTopLeftRadius:35,
    padding: 16,
    paddingTop: 25
  }, title: {
    fontFamily: fonts.primary[600],
    fontSize:28,
    color: colors.white
  },  desc: {
    fontFamily: fonts.primary[400],
    fontSize:14,
    color: colors.white
  }, titleLogin : {
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    fontSize: 25,
  }
});

export default Login;