import {indexDrawerType} from '../types';

const setIndex = (newIndex: number) => {
  return {
    type: indexDrawerType.SET_INDEX,
    payload: newIndex,
  };
};

export {setIndex};
