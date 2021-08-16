import {combineReducers} from 'redux';
import currentSongReducer from './currentSongReducer';
import listTrackReducer from './listTrackReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  listTrack: listTrackReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
