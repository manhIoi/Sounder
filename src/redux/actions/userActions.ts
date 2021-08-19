import rootApi from '../../api';
import {userType} from '../types';

const login = (email: string, password: string) => async dispatch => {
  try {
    const body = await rootApi.login(email, password);
    if (body?.authToken) {
      const payload = {
        ...body.emailAlready,
        authToken: body.authToken,
      };
      //   await AsyncStorage.setItem(
      //     'user',
      //     JSON.stringify({...payload, password: password}),
      //   );
      return dispatch({
        type: userType.LOGIN,
        payload: payload,
      });
    } else {
      return {error: body};
      // console.log(body);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export {login};
