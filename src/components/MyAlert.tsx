import React from 'react';
import {View, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../constants/colors';
import {rootFonts} from '../constants/fonts';
import {hideAlertAction} from '../redux/actions/alertActions';
import {RootState} from '../redux/reducers';

const MyAlert = () => {
  const alertReducer = useSelector((state: RootState) => state.alertReducer);
  const dispatch = useDispatch();
  const hideAlert = () => {
    dispatch(hideAlertAction());
  };
  const handleConfirm = () => {
    if (alertReducer.callbackConfirm) {
      alertReducer.callbackConfirm();
      hideAlert();
    }
  };
  return (
    <AwesomeAlert
      show={alertReducer.isShow}
      showProgress={false}
      title={alertReducer.title}
      message={alertReducer.message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={alertReducer.isConfirm ? true : false}
      cancelText="Đóng"
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
