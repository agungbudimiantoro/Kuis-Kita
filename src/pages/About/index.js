import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';

const About = () => {
  return (
    <CountDown
      size={30}
      until={1}
      onFinish={() => alert('Finished')}
      digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
      digitTxtStyle={{color: '#1CC625'}}
      timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
      separatorStyle={{color: '#1CC625'}}
      timeToShow={['H', 'M', 'S']}
      timeLabels={{m: null, s: null}}
      showSeparator
    />
  )
}

export default About;

