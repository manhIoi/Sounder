import {combineReducers} from 'redux';
import currentSongReducer from './currentSongReducer';
import indexDrawerReducer from './indexDrawerReducer';
import listTrackReducer from './listTrackReducer';
import myFavoriteReducer from './myFavoriteReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  listTrack: listTrackReducer,
  user: userReducer,
  myFavorite: myFavoriteReducer,
  indexDrawer: indexDrawerReducer,
  alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
