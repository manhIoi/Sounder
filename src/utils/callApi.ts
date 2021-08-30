import axios from 'axios';

const callApi = (method: any, endpoint: any, data?: any, configs?: any) => {
  return axios({
    method: method,
    url: endpoint,
    data: data,
    ...configs,
  }).catch(err => console.log(err.message));
};

export default callApi;
