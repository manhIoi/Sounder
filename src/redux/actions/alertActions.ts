import {AlertType} from '../../types';
import {alertType} from '../types';

const showAlertAction = (data: AlertType) => {
  return {
    type: alertType.SHOW_ALERT,
    payload: data,
  };
};

const hideAlertAction = () => {
  return {
    type: alertType.HIDE_ALERT,
  };
};

export {showAlertAction, hideAlertAction};
