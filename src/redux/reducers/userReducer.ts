import {ActionType} from '../../types';
import {userType} from '../types';

const userReducer = (state = {}, action: ActionType) => {
  switch (action.type) {
    case userType.LOGIN:
      return action.payload;
    case userType.LOGOUT:
      return {};
    case userType.UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
