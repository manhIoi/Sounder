import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../../components/MyHeader';
import MyTextInput from '../../components/MyTextInput';
import PrimaryBtn from '../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import rootColor from '../../constants/colors';

const ChangePasswordScreen = () => {
  const [currentPass, setCurrentPass] = useState('');
  const [isNextStep, setIsNextStep] = useState(false);
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

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
              <AntDesign name="lock" color={rootColor.primaryColor} size={20} />
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
                <AntDesign
                  name="lock"
                  color={rootColor.primaryColor}
                  size={20}
                />
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
                  color={rootColor.primaryColor}
                  size={20}
                />
              }
            />
          </>
        )}
        <PrimaryBtn title="Xác nhận" callback={() => setIsNextStep(true)} />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
