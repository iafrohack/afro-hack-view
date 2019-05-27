import {
  forEach as _forEach,
    isEmpty as _isEmpty,
    findIndex as _findIndex,
} from 'lodash';

/**
 * Service for API calls errors
 */
export default class ApiErrorsService {

  /**
    *
    * @param { string } defaultMessage
    * @param { string } messagesSeparator
  */
  constructor(defaultMessage, messagesSeparator = '<br />') {
    this.setDefaultMessage(defaultMessage);
    this.setMessagesSeparator(messagesSeparator);
  }

  /**
    *
    * @param { string } message
  */
  setDefaultMessage(message) {
    this.defaultMessage = message;
  }

  /**
    *
    * @param { string } messagesSeparator
  */
  setMessagesSeparator(messagesSeparator) {
    this.messagesSeparator = messagesSeparator;
  }

  /**
    * Extract error message from an API response
    *
    * @link https://github.com/axios/axios#handling-errors
    * @param error The Api Response
    * @returns {*}
  */
  retrieveErrorMessage(error) {
    const responseError = error && error.response && error.response.data;
    const errorIsObject = typeof responseError === 'object';

    if (!responseError || !errorIsObject) {
      // If the error is not an object intentionally set by the backend,
      // return the catch-all default message
      return this.defaultMessage;
    }

    // If backend sets a code key, do not parse its value as an error message
    const nonErrorResponseKeys = ['code', 'status'];
    const errorsArray = [];

    _forEach(Object.keys(responseError), (fieldKey) => {
      const isNonErrorKey = _findIndex(nonErrorResponseKeys, key => key === fieldKey) > -1;

      if (isNonErrorKey) {
        return;
      }

      let errorMessage = responseError[fieldKey];

      if (!_isEmpty(errorMessage) && typeof errorMessage === 'object') {
        errorMessage = errorMessage.message;
      }

      if (!_isEmpty(errorMessage) && typeof errorMessage === 'string') {
        errorsArray.push(errorMessage);
      }
    });

    if (_isEmpty(errorsArray)) {
      return this.defaultMessage;
    }
    return errorsArray.join(this.messagesSeparator);
  }


  /**
    * Get Api error status
    *
    * @param error The Api Response
    * @returns {int|NaN}
  */
  static getErrorStatusCode(error) {
    return error && error.response && parseInt(error.response.status, 10);
  }

}

