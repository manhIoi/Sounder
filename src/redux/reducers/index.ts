import {combineReducers} from 'redux';
import currentSongReducer from './currentSongReducer';
import listTrackReducer from './listTrackReducer';

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  listTrack: listTrackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
