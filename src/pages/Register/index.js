import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fonts, colors } from '../../utils';
import { Button, Gap, Input, Select } from '../../compontents';


const Register = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Gap height={8} />
      </View>
      <View style={styles.content}>
      <Gap height={16} />
        <Input title="Nama Lengkap" />
      <Gap height={16} />
        <Select title="Jenis Kelamin"
        onValueChange={(res) => console.log(res)}
        items={[
          { label: "Laki-Laki", value: "Laki-Laki" },
          { label: "Perempuan", value: "Perempuan" },
      ]}
       />
        <Gap height={16} />
        <Input title="E-Mail" />
        <Gap height={16} />
        <Input title="Password" />
        <Gap height={32} />
        <Button title="Buat Akun" onPress={() => navigation.replace("MyApp")} />
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
    height: 100,
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
  },
});


export default Register;