import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import { DummySejarah } from '../../../assets';
const ListKuis = ({image, title, desc, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View>
            <Image source={image} style={styles.image} />
        </View>
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        height:180,
        backgroundColor:colors.white,
        borderRadius:20,
        width: '100%',
        elevation: 20,
        shadowColor: colors.primary,
        padding:8,
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginTop:16
    }, title : {
        fontFamily:fonts.primary[600],
        color: colors.black,
        fontSize:23,
        maxWidth: 200
    }, desc : {
        fontFamily:fonts.primary[400],
        color: colors.black,
        fontSize:14,
        maxWidth: 200
    }, image: {
        width:120,
        height:150,
        borderRadius: 20,
    }, box:{
        paddingLeft: 16,
        paddingTop: 16
    }
});

export default ListKuis;