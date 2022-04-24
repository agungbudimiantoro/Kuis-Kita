import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {colors, fonts} from '../../utils';
import { Header, ListKuis, Gap } from '../../compontents';
import { Fire } from '../../config';
import { getDatabase, ref, onValue, query} from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';


const Home = ({navigation}) => {
  const stateGlobal = useSelector(state => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch({type:'RESET'});
    const db = getDatabase(Fire);
    const filteringDoctor = query(ref(db, 'kuis'));
    onValue(filteringDoctor, (ress) => {
        if(ress.val()){
          setData(ress.val())
        }
    })
   
}, [])

const getKuis = (res) => {
  dispatch({type:'SET_IDKUIS', value:res.id});
  navigation.replace('Kuis', res)
}


  return (
    <ScrollView>
    <View style={styles.page}>
      <Header />
      <Gap height={16} />
      {data.map((res) => {
        return  <ListKuis key={res.id} title={res.title} desc={res.desc} image={{uri :res.image}} onPress={() => getKuis(res)} />
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