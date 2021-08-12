import React, {useEffect, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MasonryList from '../../components/MasonryList';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import {spacing} from '../../constants/dimensions';
import TouchableScale from 'react-native-touchable-scale';
import BtnDrawer from '../../components/BtnDrawer';

const HomeScreen = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', padding: spacing.normal}}>
      <View style={styles.header}>
        <BtnDrawer />
        <Text style={styles.heading}>Trang Chủ</Text>
      </View>
      <Animatable.View animation="fadeInUp" duration={800} delay={200}>
        <MasonryList />
      </Animatable.View>
    </ScrollView>
  );
};

export default HomeScreen;
