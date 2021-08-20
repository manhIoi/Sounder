import {ActionType} from '../../types';
import {myFavoriteType} from '../types';

const myFavoriteReducer = (state = {}, action: ActionType) => {
  switch (action.type) {
    case myFavoriteType.GET_SONG:
      return action.payload;
    case myFavoriteType.ADD_SONG:
      return action.payload;
    case myFavoriteType.REMOVE_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default myFavoriteReducer;
