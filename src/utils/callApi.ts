import axios from 'axios';

const callApi = (method: any, endpoint: any, data?: any) => {
  return axios({
    method: method,
    url: endpoint,
    data: data,
  }).catch(err => console.log(err.message));
};

export default callApi;
