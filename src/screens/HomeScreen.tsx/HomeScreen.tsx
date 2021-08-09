import React, {useEffect, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MasonryList from '../../components/MasonryList';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.heading}>Trang Chủ</Text>
      <Animatable.View animation="fadeInUp" duration={800} delay={200}>
        <MasonryList />
      </Animatable.View>
    </ScrollView>
  );
};

export default HomeScreen;
