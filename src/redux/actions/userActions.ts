import {AsyncStorage} from 'react-native';
import rootApi from '../../api';
import {userType} from '../types';

const login =
  (email?: string | null, password?: string | null, authToken?: string) =>
  async dispatch => {
    try {
      let body;
      if (!authToken) {
        body = await rootApi.login(email, password);
      } else {
        body = await rootApi.login(null, null, authToken);
      }
      if (body?.authToken) {
        const payload = {
          ...body.emailAlready,
          authToken: body.authToken,
        };
        await AsyncStorage.setItem('authToken', JSON.stringify(body.authToken));
        return dispatch({
          type: userType.LOGIN,
          payload: payload,
        });
      } else {
        return {error: body};
      }
    } catch (error) {
      console.log(error.message);
    }
  };

const logout = () => async dispacth => {
  await AsyncStorage.removeItem('authToken');
  return dispacth({
    type: userType.LOGOUT,
  });
};

const updateUser =
  (idUser: string, data: any, authToken: string) => async dispatch => {
    try {
      console.log(idUser, data, authToken);

      const body = await rootApi.updateInfoUser(idUser, data, authToken);
      console.log(body);
      if (body._id) {
        return dispatch({
          type: userType.UPDATE_USER,
          payload: body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export {login, logout, updateUser};
