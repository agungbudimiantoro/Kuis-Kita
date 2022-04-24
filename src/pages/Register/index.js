import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fonts, colors } from '../../utils';
import { Button, Gap, Input, Select } from '../../compontents';
import { Fire } from '../../config';
import { getDatabase, set, ref} from 'firebase/database';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Register = ({navigation}) => {
  const [nama, setNama] = useState('');
  const [JL, setJL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(Fire);
  const db = getDatabase(Fire);
  
  const setData = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((success) => {
      console.log(success);
      let data = {
        nama: nama,
        JL:JL,
        email: email,
        uid: success.user.uid
      };
      set(ref(db,'users/'+ success.user.uid), data)
      // storeData('users', data);
      // setForm('reset');
      // dispatch({type:'SET_LOADING', value:false})
      // navigation.navigate("UploadPhoto", data);
    })
    .catch((error) => {
      const errorMessage = error.message;
      // menampilkan pesan popup
      // showError(errorMessage);
      // dispatch({type:'SET_LOADING', value:false})
    });
  }

  return (
    <ScrollView>
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Gap height={8} />
      </View>
      <View style={styles.content}>
      <Gap height={16} />
        <Input title="Nama Lengkap" onChangeText={(val) => setNama(val)} value={nama} />
      <Gap height={16} />
        <Select title="Jenis Kelamin"
        onValueChange={(res) => setJL(res)}
        items={[
          { label: "Laki-Laki", value: "Laki-Laki" },
          { label: "Perempuan", value: "Perempuan" },
      ]}
       />
        <Gap height={16} />
        <Input title="E-Mail" onChangeText={(val) => setEmail(val)} value={email} />
        <Gap height={16} />
        <Input title="Password" onChangeText={(val) => setPassword(val)} value={password}  secureTextEntry  />
        <Gap height={32} />
        <Button title="Buat Akun" onPress={() => setData()} />
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