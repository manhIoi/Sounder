import rootApi from '../../api';
import {SongType} from '../../types';
import {myFavoriteType} from '../types';

const getSongFromMyFavorite = (idUser: string) => async dispatch => {
  try {
    const body = await rootApi.getSongFromMyFavorite(idUser);
    return dispatch({
      type: myFavoriteType.GET_SONG,
      payload: body,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addSongToMyFavorite =
  (idUser: string, newSong: SongType) => async dispatch => {
    try {
      const body = await rootApi.addToMyFavorite(idUser, newSong);
      if (!body._idUser) {
        return body;
      }
      return dispatch({
        type: myFavoriteType.ADD_SONG,
        payload: body,
      });
    } catch (error) {
      console.log(error);
    }
  };

const removeSongFromMyFavorite =
  (idUser: string, idSong: string) => async dispatch => {
    try {
      const body = await rootApi.removeFromMyFavorite(idUser, idSong);
      if (!body._idUser) {
        return body;
      }
      return dispatch({
        type: myFavoriteType.REMOVE_SONG,
        payload: body,
      });
    } catch (error) {
      console.log(error);
    }
  };

export {getSongFromMyFavorite, addSongToMyFavorite, removeSongFromMyFavorite};
