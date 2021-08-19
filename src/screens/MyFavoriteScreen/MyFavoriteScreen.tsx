import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PrimaryBtn from '../../components/PrimaryBtn';
import SongItem from '../../components/SongItem';
import {mockListSongs} from '../../constants/mockdata';
import {RootState} from '../../redux/reducers';
import styles from './styles';

const MyFavoriteScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handlePress = (index: number) => {
    console.log(mockListSongs[index]);
  };

  return (
    <View style={styles.container}>
      {!user._id ? (
        <View style={styles.wraperCenter}>
          <Text style={styles.text}>Bạn cần đăng nhập để tạo album</Text>
          <PrimaryBtn
            title="Đăng nhập"
            callback={() => navigation.navigate('AuthStack')}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={mockListSongs}
            keyExtractor={item => item._id}
            renderItem={({item, index}) => (
              <SongItem song={item} index={index} handlePress={handlePress} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default MyFavoriteScreen;
