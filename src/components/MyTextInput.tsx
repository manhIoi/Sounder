import React from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {createRef} from 'react';
import {Ref} from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import rootColor from '../constants/colors';
import dimensions, {spacing} from '../constants/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {rootFonts} from '../constants/fonts';

const MyTextInput = ({
  placeholder,
  value,
  secureText,
  isAutoFocus,
  leftIcon,
  rightIcon,
  setValue,
  style,
}: {
  placeholder: string;
  value: string;
  secureText?: boolean;
  isAutoFocus?: boolean;
  refTextInput?: any;
  style?: object;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  setValue: (text: string) => void;
}) => {
  const ref = createRef<TextInput>();

  useEffect(() => {
    console.log(isAutoFocus);
    if (isAutoFocus) {
      ref.current?.blur();
    }
  }, [isAutoFocus]);

  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        style={[styles.textInput, style]}
        secureTextEntry={secureText}
        blurOnSubmit={false}
        enablesReturnKeyAutomatically={true}
      />
      {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.w * 0.6,
    height: 50,
    borderWidth: 1,
    borderColor: rootColor.primaryColor,
    marginBottom: spacing.normal,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: rootColor.grayTextColor,
    fontFamily: rootFonts.regular,
    fontSize: 18,
  },
  icon: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
});

export default MyTextInput;
