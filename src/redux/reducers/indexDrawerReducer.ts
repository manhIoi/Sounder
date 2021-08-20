import {ActionType} from '../../types';
import {indexDrawerType} from '../types';

const indexDrawerReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case indexDrawerType.SET_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export default indexDrawerReducer;
