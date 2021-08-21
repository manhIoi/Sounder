import React from 'react';
import {View, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import rootColor from '../constants/colors';
import {rootFonts} from '../constants/fonts';

const MyAlert = ({
  title,
  message,
  isConfirm,
  callbackConfirm,
  state,
  setState,
}: {
  state: boolean;
  setState: (value: boolean) => void;
  title: string;
  message?: string;
  isConfirm?: boolean;
  callbackConfirm?: () => void;
}) => {
  const hideAlert = () => {
    setState(false);
  };
  const handleConfirm = () => {
    if (callbackConfirm) {
      callbackConfirm();
      hideAlert();
    }
  };
  return (
    <AwesomeAlert
      show={state}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={isConfirm ? true : false}
      cancelText="Hủy bỏ"
      confirmText="Xác nhận"
      confirmButtonColor={rootColor.primaryColor}
      onCancelPressed={hideAlert}
      onConfirmPressed={handleConfirm}
      titleStyle={{color: rootColor.primaryColor, fontFamily: rootFonts.bold}}
      messageStyle={{fontFamily: rootFonts.medium}}
      cancelButtonTextStyle={{fontFamily: rootFonts.medium}}
      confirmButtonTextStyle={{fontFamily: rootFonts.medium}}
    />
  );
};

export default MyAlert;
