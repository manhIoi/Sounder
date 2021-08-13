import {ActionType} from '../../types';
import {currentSongType} from '../types';

const currentSongReducer = (
  state: any = {isPlaying: true},
  action: ActionType,
) => {
  switch (action.type) {
    case currentSongType.SET_CURRENT_SONG:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default currentSongReducer;
