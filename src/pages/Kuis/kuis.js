import React,{ useEffect, useState, useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Fire } from '../../config';
import { getDatabase, ref, onValue, query } from 'firebase/database';
import { Header } from '../../compontents';
import { colors, fonts } from '../../utils';
import CountDown from 'react-native-countdown-component';

const Kuis2 = ({route}) => {
 const id = route.params.id;
 const data = route.params;
 const [soal, setSoal] = useState('');
 const [no, setNo] = useState(2);

 useEffect(() => {
   const db = getDatabase(Fire);
   const queryData = query(ref(db, 'soal/' + id + '/' + no));
   onValue(queryData, reff => {
     if(reff.val){
       setSoal(reff.val())
     }
   })
 },[])

 


  return (
    <View style={styles.page}>
       <View style={styles.container}>
      <Header />
      <View style={styles.question}>    
      <View>
        <Text style={styles.title}>{soal.pertanyaan}</Text>
      </View>
      <View>
      <CountDown
      size={30}
      until={10}
      onFinish={() => alert('Finished')}
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
          <TouchableOpacity style={styles.box}>
            <Text style={styles.option} >A.{soal.a}</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.option}>C.{soal.c}</Text>
            </TouchableOpacity>
          </View>
        </View>      
        <View>
          <View>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.option}>B. {soal.b}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.option}>D. {soal.d}</Text>
            </TouchableOpacity>
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
  }, option : {
    fontFamily: fonts.primary[400],
    fontSize:14,
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
export default Kuis2;