import axios from 'axios';
import * as END_POINTS from '@/constants/endPoints';

axios.defaults.responseType = 'json';

const successStatusCode = 200;

export default class Axiosconfig {

  static getInstance() {
    const headers = { 'X-Requested-With': 'XMLHttpRequest' };

        // @see https://github.com/axios/axios#request-config
    return axios.create({
      headers,
      baseURL: END_POINTS.IAFROHACK_BACKEND_BASE_URL,
            // `transformResponse` allows changes to the response data to be made before
            // it is passed to then/catch
      validateStatus(status) {
        return parseInt(status, 10) === successStatusCode;
      },
    });
  }

}
