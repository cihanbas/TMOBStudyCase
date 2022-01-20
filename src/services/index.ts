import axios from 'axios';
import _ from 'lodash';

// Instance
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

//  Interceptor Request
axiosInstance.interceptors.request.use(config => config);

//  Interceptor response
axiosInstance.interceptors.response.use(
  response => response?.data,
  error => {
    let msg = '';

    const {data = {}, status = 0} = error?.response || {};

    if (data.error) {
      const {message = ''} = _.isEmpty(data?.error) ? data : data?.error;
      if (_.isString(message)) {
        msg = message;
      }
    }
    if (!msg) {
      msg = 'Something went wrong';
    }
    alert(msg);
    return Promise.reject({msg, status});
  },
);
export default axiosInstance;
