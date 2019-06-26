import axios from 'axios';

axios.defaults.responseType = 'json';

const successStatusCode = 200;

export default class Axiosconfig {

  static getInstance() {
    // TODO:: will change & use SSL once backend SSL is good to go...
    const baseUrl = 'http://backend.iafrohack.com/';

    const headers = { 'X-Requested-With': 'XMLHttpRequest' };

        // @see https://github.com/axios/axios#request-config
    return axios.create({
      headers,
      baseURL: baseUrl,
            // `transformResponse` allows changes to the response data to be made before
            // it is passed to then/catch
      validateStatus(status) {
        return parseInt(status, 10) === successStatusCode;
      },
    });
  }

}
