import {currentSongType} from '../types';

const setCurrentSong = (song: any) => {
  return {
    type: currentSongType.SET_CURRENT_SONG,
    payload: song,
  };
};

export {setCurrentSong};
