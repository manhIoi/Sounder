import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../../components/MyHeader';
import MyTextInput from '../../components/MyTextInput';
import PrimaryBtn from '../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import rootColor from '../../constants/colors';
import rootApi from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {showAlertAction} from '../../redux/actions/alertActions';
import {logout} from '../../redux/actions/userActions';
import {AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const [currentPass, setCurrentPass] = useState('');
  const [isNextStep, setIsNextStep] = useState(false);
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const user = useSelector((state: RootState) => state.user);
  const dispacth = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispacth(logout());
  };

  const handleChangePassword = async (action: string) => {
    if (action === 'current') {
      const body = await rootApi.checkPassword(
        user._id,
        currentPass,
        user.authToken,
      );
      if (typeof body === 'string') {
        dispacth(showAlertAction({title: 'Thông báo', message: body}));
      } else {
        console.log(body);
        setIsNextStep(true);
      }
    } else {
      if (confirmNewPass === newPass) {
        const body = await rootApi.changePassword(user.authToken, newPass);
        if (body.authToken) {
          navigation.goBack();
          await AsyncStorage.setItem('authToken', body.authToken);
          dispacth(
            showAlertAction({
              title: 'Thông báo',
              message: 'Bạn có muốn đăng xuất khỏi thiết bị ? ',
              isConfirm: true,
              callbackConfirm: handleLogout,
            }),
          );
        }
      } else {
        dispacth(
          showAlertAction({
            title: 'Thông báo',
            message: 'Xác nhận mật khẩu không chính xác',
          }),
        );
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <MyHeader title="Đổi mật khẩu" canGoBack />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {!isNextStep ? (
          <MyTextInput
            placeholder="Mật khẩu hiện tại"
            value={currentPass}
            setValue={setCurrentPass}
            secureText
            leftIcon={
              <AntDesign name="lock" color={rootColor.whiteColor} size={20} />
            }
            style={styles.textField}
          />
        ) : (
          <>
            <MyTextInput
              placeholder="Mật khẩu mới"
              value={newPass}
              setValue={setNewPass}
              secureText
              style={styles.textField}
              leftIcon={
                <AntDesign name="lock" color={rootColor.whiteColor} size={20} />
              }
            />
            <MyTextInput
              placeholder="Nhập lại mật khẩu mới"
              value={confirmNewPass}
              setValue={setConfirmNewPass}
              secureText
              style={styles.textField}
              leftIcon={
                <AntDesign
                  name="check"
                  color={rootColor.whiteColor}
                  size={20}
                />
              }
            />
          </>
        )}
        <PrimaryBtn
          title="Xác nhận"
          callback={() => handleChangePassword(isNextStep ? 'new' : 'current')}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
