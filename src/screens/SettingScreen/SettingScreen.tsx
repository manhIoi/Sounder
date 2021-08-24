import React, {useRef} from 'react';
import {View, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Avatar from '../../components/Avatar';
import MyHeader from '../../components/MyHeader';
import {RootState} from '../../redux/reducers';
import styles from './styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import BottomSheet from '@gorhom/bottom-sheet';
import Feather from 'react-native-vector-icons/Feather';
import rootColor from '../../constants/colors';
import ActionItem from '../../components/ActionItem';
import {actionItemH} from '../../constants/dimensions';

const SettingScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };
  return (
    <View style={{flex: 1}}>
      <MyHeader title="Thông tin người dùng" canGoBack />
      <View style={styles.avatarContainer}>
        <Pressable onPress={handleBottomSheet}>
          <Avatar sizeImage={100} name={user.displayName} hideName />
        </Pressable>
        <TextInput defaultValue={user.displayName} style={styles.name} />
        <PrimaryBtn
          title="Xác nhận"
          callback={() => console.log('change name')}
        />
      </View>
      <BottomSheet
        enablePanDownToClose
        ref={bottomSheetRef}
        index={0}
        snapPoints={[1, actionItemH * 3]}
        enableOverDrag={false}
        handleIndicatorStyle={{backgroundColor: '#fff'}}
        backgroundStyle={{
          backgroundColor: rootColor.primaryColor,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#fff',
          }}>
          <ActionItem
            title="Lấy từ thiết bị"
            callback={() => console.log('choose')}
            icon={
              <Feather name="folder" color={rootColor.primaryColor} size={20} />
            }
          />
          <ActionItem
            title="Chụp ảnh mới"
            callback={() => console.log('take a photo')}
            icon={
              <Feather name="camera" color={rootColor.primaryColor} size={20} />
            }
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default SettingScreen;
