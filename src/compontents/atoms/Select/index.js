import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors, fonts } from '../../../utils';
import { Gap } from '../index';

const Select = ({title, onValueChange, items}) => {
  return (
    <View>
          <Text style={styles.title}>{title}</Text>
            <Gap height={6} />
            <View style={styles.input}>
                <RNPickerSelect
                onValueChange={onValueChange}
                items={items}/>
            </View>
     </View>
  );
}

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        borderRadius:10,
        borderColor: colors.border
    },
    title : {
        fontFamily: fonts.primary[400],
        color: colors.black,
        fontSize: 14
    }
});

export default Select;