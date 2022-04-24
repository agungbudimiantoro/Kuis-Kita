import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ICHouse, ICUser, ICHouseActive, ICUserActvive} from '../../../assets';
import { colors, fonts } from '../../../utils';
const CustomButtom = ({label, onPress, onLongPress, active, key}) => {
    const Icon = () => {
        if(label === 'Home'){
            return active ? 
            <ICHouseActive style={styles.icon} width={25} height={25}  /> : 
            <ICHouse style={styles.icon} width={25} height={25}  />
        }
        if(label === 'About'){
            return active ? <ICUserActvive style={styles.icon} width={25} height={25}  /> :
            <ICUser style={styles.icon} width={25} height={25}  />
        }
        return <ICHouse style={styles.icon} width={25} height={25}  />
    }
  return (
    <View style={styles.container}>
        <Icon style={styles.icon} width={30} height={30} />
      <Text style={styles.title(active)}>{label}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop: 10,
    }, title : (active) => ({
        color: active ? colors.white : colors.black,
        fontFamily : fonts.primary[600],
        fontSize: 16
    })
});
export default CustomButtom;