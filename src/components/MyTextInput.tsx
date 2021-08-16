import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import rootColor from '../constants/colors';
import dimensions, {spacing} from '../constants/dimensions';

const MyTextInput = ({
  placeholder,
  value,
  secureText,
  setValue,
}: {
  placeholder: string;
  value: string;
  secureText?: boolean;
  setValue: (text: string) => void;
}) => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        style={style.textInput}
        secureTextEntry={secureText}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: dimensions.w * 0.6,
    height: 50,
    borderWidth: 1,
    borderColor: rootColor.primaryColor,
    marginBottom: spacing.normal,
  },
  textInput: {
    flex: 1,
  },
});

export default MyTextInput;
