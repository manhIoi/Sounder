import {ActionType, AlertType} from '../../types';
import {alertType} from '../types';

const initState: AlertType = {
  isShow: false,
};

const alertReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case alertType.SHOW_ALERT:
      return {
        ...action.payload,
        isShow: true,
      };

    case alertType.HIDE_ALERT:
      return {
        isShow: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
