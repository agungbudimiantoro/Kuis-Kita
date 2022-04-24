import React,{ useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Fire } from '../../config';
import { getDatabase, ref, onValue, query } from 'firebase/database';
import { Header } from '../../compontents';
import { colors, fonts } from '../../utils';
const Kuis = ({route}) => {
 const id = route.params.id;
 const data = route.params;
 const [soal, setSoal] = useState('');

 useEffect(() => {
   const db = getDatabase(Fire);
   const queryData = query(ref(db, 'soal/' + id + '/' + id));
   onValue(queryData, reff => {
     if(reff.val){
       setSoal(reff.val())
       console.log(reff.val())
     }
   })
 },[])


  return (
    <View style={styles.page}>
       <View style={styles.container}>
      <Header />
        <Image source={{uri:data.image}} style={styles.image} /> 
        <Text style={styles.title}>{soal.pertanyaan}</Text>
      <View style={styles.content}>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.option}>A.{soal.a}</Text>
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
    borderRadius:25
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
    fontSize:16,
    marginHorizontal:16,
    marginVertical:16,
    maxWidth:500
  }

});
export default Kuis;