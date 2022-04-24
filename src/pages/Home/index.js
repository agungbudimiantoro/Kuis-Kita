import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {colors, fonts} from '../../utils';
import { Header, ListKuis, Gap } from '../../compontents';
import { Fire } from '../../config';
import { getDatabase, ref, onValue, query} from 'firebase/database';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getDatabase(Fire);
    const filteringDoctor = query(ref(db, 'kuis'));
    onValue(filteringDoctor, (ress) => {
        if(ress.val()){
          setData(ress.val())
        }
    })
   
}, [])

  return (
    <ScrollView>
    <View style={styles.page}>
      <Header />
      <Gap height={16} />
      {data.map((res) => {
        return  <ListKuis key={res.id} title={res.title} desc={res.desc} image={{uri :res.image}} onPress={() => navigation.navigate('Kuis', res)} />
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