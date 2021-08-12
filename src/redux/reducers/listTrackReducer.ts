import {ActionType} from '../../types';
import {listTrackType} from '../types';

const listTrackReducer = (
  state: any = {
    listSong: [],
    songSelected: 0,
  },
  action: ActionType,
) => {
  switch (action.type) {
    case listTrackType.SET_LIST_TRACK:
      return {
        ...state,
        ...action.payload,
      };

    // case listTrackType.SET_INDEX_TRACK:
    //   return {
    //     listSong:
    //   }

    default:
      return state;
  }
};

export default listTrackReducer;
