import {listTrackType} from '../types';

const setListTrack = (data: any) => {
  return {
    type: listTrackType.SET_LIST_TRACK,
    payload: data,
  };
};

export {setListTrack};
