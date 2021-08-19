import React from 'react';
import {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import rootColor from '../constants/colors';
import dimensions from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const PrimaryBtn = ({
  title,
  callback,
  outline,
  uppercase,
  disable,
}: //   isLoading,
{
  title: string;
  callback: () => void;
  outline?: boolean;
  uppercase?: boolean;
  disable?: boolean;
  //   isLoading?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const pressBtn = () => {
    setIsLoading(true);
    callback();
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };
  return (
    <TouchableScale
      disabled={disable ? disable : isLoading}
      onPress={pressBtn}
      style={{
        width: dimensions.w * 0.4,
        backgroundColor: !outline
          ? rootColor.primaryColor
          : rootColor.whiteColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: rootColor.primaryColor,
      }}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={!outline ? rootColor.whiteColor : rootColor.primaryColor}
        />
      ) : (
        <Text
          style={{
            textTransform: uppercase ? 'uppercase' : 'none',
            color: !outline ? rootColor.whiteColor : rootColor.primaryColor,

            fontFamily: rootFonts.semiBold,
          }}>
          {title}
        </Text>
      )}
    </TouchableScale>
  );
};

export default PrimaryBtn;
