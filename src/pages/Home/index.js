import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {colors, fonts} from '../../utils';
import { Header, ListKuis, Gap } from '../../compontents';
import { DummyIslam, DummySejarah } from '../../assets';
const Home = ({navigation}) => {
  const data = [{
    id:1,
    title : 'Sejarah Indonesia',
    desc : 'sejarah indonesia melawan bangsa penajajah hingga mendapatkan kemerdekaan',
    image: DummySejarah
},{
  id:2,
    title : 'Sejarah Indonesia',
    desc : 'sejarah indonesia melawan bangsa penajajah hingga mendapatkan kemerdekaan',
    image: DummyIslam
},{
  id:3,
    title : 'Sejarah Indonesia',
    desc : 'sejarah indonesia melawan bangsa penajajah hingga mendapatkan kemerdekaan',
    image: DummyIslam
}]
  return (
    <ScrollView>
    <View style={styles.page}>
      <Header />
      <Gap height={16} />
      {data.map((res) => {
        return  <ListKuis key={res.id} title={res.title} desc={res.desc} image={res.image} onPress={() => navigation.navigate('Kuis', res)} />
      })}
     </View>
     </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor:colors.white,
    flex:1,
    padding:16
  }
});

export default Home;