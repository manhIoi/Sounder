import React, {useRef} from 'react';
import {View, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from '../../components/Avatar';
import MyHeader from '../../components/MyHeader';
import {RootState} from '../../redux/reducers';
import styles from './styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import Feather from 'react-native-vector-icons/Feather';
import rootColor from '../../constants/colors';
import ActionItem from '../../components/ActionItem';
import {actionItemH} from '../../constants/dimensions';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {updateUser} from '../../redux/actions/userActions';
import {useState} from 'react';
import {showAlertAction} from '../../redux/actions/alertActions';

const SettingScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const [textName, setTextName] = useState(user.displayName);
  const dispatch = useDispatch();
  const bottomSheetRef = useRef<RBSheet>(null);
  const handleBottomSheet = () => {
    bottomSheetRef.current?.open();
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 600,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      // const formData = new FormData();
      handleUpload(image);
    });
  };
  const openLibrary = () => {
    bottomSheetRef.current?.close();
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
      multiple: false,
      includeBase64: true,
    })
      .then(image => {
        handleUpload(image);
      })
      .catch(err => console.log(err));
  };

  const handleUpload = (image: any) => {
    bottomSheetRef.current?.close();
    let base64Img = `data:image/jpg;base64,${image.data}`;
    let data = {
      file: base64Img,
      upload_preset: 'rmse6ewx',
    };

    fetch('https://api.cloudinary.com/v1_1/dwi4pbjo6/image/upload', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(async data => {
        const body = await dispatch(
          updateUser(user._id, {image: data.url}, user.authToken),
        );

        if (body.type) {
          showMessage(true);
        } else {
          showMessage(false);
        }
      })
      .catch(err => console.log(err));
  };

  const handleChangeName = async () => {
    if (textName != user.displayName) {
      const body = await dispatch(
        updateUser(user._id, {displayName: textName}, user.authToken),
      );
      if (body.type) {
        showMessage(true);
      } else {
        showMessage(false);
      }
    }
  };

  const showMessage = (status: boolean) => {
    dispatch(
      showAlertAction({
        title: 'Thông báo',
        message: status
          ? 'Thay đổi thành công'
          : 'Đã có lỗi xảy ra, vui lòng thử lại sau !',
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <MyHeader title="Thông tin người dùng" canGoBack />
      <View style={styles.avatarContainer}>
        <Pressable onPress={handleBottomSheet}>
          <Avatar
            sizeImage={100}
            name={user.displayName}
            hideName
            image={user.image}
          />
        </Pressable>
        <TextInput
          value={textName}
          onChangeText={text => setTextName(text)}
          defaultValue={user.displayName}
          style={styles.name}
        />
        <PrimaryBtn title="Xác nhận" callback={handleChangeName} />
      </View>
      <RBSheet
        ref={bottomSheetRef}
        animationType="fade"
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={actionItemH * 2.5}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#fff',
          }}>
          <ActionItem
            title="Lấy từ thiết bị"
            callback={openLibrary}
            icon={
              <Feather name="folder" color={rootColor.primaryColor} size={20} />
            }
          />
          <ActionItem
            title="Chụp ảnh mới"
            callback={openCamera}
            icon={
              <Feather name="camera" color={rootColor.primaryColor} size={20} />
            }
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default SettingScreen;
