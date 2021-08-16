import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import dimensions from '../constants/dimensions';
import MyTextInput from './MyTextInput';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.wrapInput}>
          <MyTextInput placeholder="Email" value={email} setValue={setEmail} />
        </View>
        <View style={styles.wrapInput}>
          <MyTextInput placeholder="Email" value={email} setValue={setEmail} />
        </View>
        <View style={styles.wrapInput}>
          <MyTextInput placeholder="Email" value={email} setValue={setEmail} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.w,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapInput: {
    width: dimensions.w,
    alignItems: 'center',
  },
});

export default SignUpForm;
