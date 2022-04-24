import React,{ useEffect, useState, useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Fire } from '../../config';
import { getDatabase, ref, onValue, query, set } from 'firebase/database';
import { Header } from '../../compontents';
import { colors, fonts } from '../../utils';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';

const Kuis = ({route, navigation}) => {
  const stateGlobal = useSelector(state => state);
  const dispatch = useDispatch();
 const data = route.params;
 const [jawab, setJawab] = useState('');
 const [soal, setSoal] = useState('');
 const db = getDatabase(Fire);

 useEffect(() => {
   const queryData = query(ref(db, 'soal/' + stateGlobal.idKuis + '/' + stateGlobal.no));
   onValue(queryData, reff => {
     if(reff.val){
       setSoal(reff.val())
     }else{
      navigation.replace('Kuis2', data);
     }
   })
 },[])


 const pilih = (val) => {
  setJawab(val);
  const no = stateGlobal.no + 1;
  const totalBenar = stateGlobal.benar + 1;
  dispatch({type:"SET_NO", value: no})
  if(val === soal.jawaban){
    dispatch({type:"SET_BENAR", value: totalBenar})
  }
  if(no >= data.soal){
    navigation.replace('Kuis2', data)
  }else{
    navigation.replace('Kuis', data)
  }
 }


  return (
    <View style={styles.page}>
       <View style={styles.container}>
      <Header />
      <View style={styles.question}>    
      <View>
        <Text style={styles.title}>{stateGlobal.no}. {soal.pertanyaan}</Text>
      </View>
      <View>
      <CountDown
      size={30}
      until={5}
      onFinish={() => pilih('z')}
      digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: colors.primary}}
      digitTxtStyle={{color: colors.primary}}
      timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
      separatorStyle={{color: colors.primary}}
      timeToShow={['S']}
      timeLabels={{m: null, s: null}}
      showSeparator
    />
      </View>
      </View>
      <View style={styles.content}>
        <View>
          {/* a */}
          {jawab == 'a' && (  <TouchableOpacity style={styles.boxActv} onPress={() => pilih('a')}>
            <Text style={styles.optionActv} >A.{soal.a}</Text>
          </TouchableOpacity>)}
          {jawab != 'a' && (  <TouchableOpacity style={styles.box} onPress={() => pilih('a')}>
            <Text style={styles.option} >A.{soal.a}</Text>
          </TouchableOpacity>)}
        {/* c */}
        
          <View>
          {jawab == 'c' && (  <TouchableOpacity style={styles.boxActv} onPress={() => pilih('c')}>
            <Text style={styles.optionActv} >C. {soal.c}</Text>
          </TouchableOpacity>)}
          {jawab != 'c' && (  <TouchableOpacity style={styles.box} onPress={() => pilih('c')}>
            <Text style={styles.option} >C. {soal.c}</Text>
          </TouchableOpacity>)}
          </View>
        </View>      
        <View>
          <View>
          {jawab == 'b' && (  <TouchableOpacity style={styles.boxActv} onPress={() => pilih('b')}>
            <Text style={styles.optionActv} >B.{soal.b}</Text>
          </TouchableOpacity>)}
          {jawab != 'b' && (  <TouchableOpacity style={styles.box} onPress={() => pilih('b')}>
            <Text style={styles.option} >B.{soal.b}</Text>
          </TouchableOpacity>)}
          </View>
          <View>
          {jawab == 'd' && (  <TouchableOpacity style={styles.boxActv} onPress={() => pilih('d')}>
            <Text style={styles.optionActv} >D.{soal.d}</Text>
          </TouchableOpacity>)}
          {jawab != 'd' && (  <TouchableOpacity style={styles.box} onPress={() => pilih('d')}>
            <Text style={styles.option} >D.{soal.d}</Text>
          </TouchableOpacity>)}
          </View>
        </View>  
      </View>
     </View>
     </View>
  );
}

const styles = StyleSheet.create({
  page : {
    backgroundColor:colors.primary,
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  container : {
    backgroundColor:colors.white,
    width:'90%',
    height:'90%',
    borderRadius:25,
    justifyContent:'space-between'
  },
  image:{
    width: '30%',
    height : '30%',
    alignSelf:'center',
  }, content : {
    flexDirection:'row',
    justifyContent:'space-around'
  },box : {
    backgroundColor: colors.white,
    elevation:20,
    width:150,
    height:80,
    marginBottom:20,
    justifyContent:'center',
    borderRadius:15,
    padding: 8,
  },boxActv : {
    backgroundColor: colors.primary,
    elevation:20,
    width:150,
    height:80,
    marginBottom:20,
    justifyContent:'center',
    borderRadius:15,
    padding: 8,
  }, option : {
    fontFamily: fonts.primary[400],
    fontSize:14,
  },  optionActv : {
    fontFamily: fonts.primary[400],
    fontSize:14,
    color:colors.white
  }, title : {
    fontFamily: fonts.primary[600],
    fontSize:18,
    marginHorizontal:16,
    marginVertical:16,
    maxWidth:500
  }, question:{
    elevation:10,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderColor : colors.primary,
  }, timer: {
    marginVertical: 10,
  }

});
export default Kuis;