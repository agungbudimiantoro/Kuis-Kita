import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Header, Button } from '../../compontents';

const Kuis2 = ({navigation}) => {
  const stateGlobal = useSelector(state => state);
  return (
    <View>
      <Header title="Hasil Kuis" />
      <Text>jawaban benar  = {stateGlobal.benar}</Text>
      <Button title="Home" onPress={() => navigation.replace("MyApp")}/>
     </View>
  );
}

export default Kuis2;