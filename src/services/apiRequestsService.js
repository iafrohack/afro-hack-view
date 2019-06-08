
import { isEmpty as _isEmpty } from 'lodash';
import AxiosConfig from '@/services/axiosConfig';
import ApiErrorsService from '@/services/apiErrorsService';

const unknownErrorMessage = 'Something went wrong executing your request. Please try again.';

/**
 * Service class for API requests
 */
export default class ApiRequestsService {

  /**
   * Fetch stakeHolders Records
   *
   * @param component
   * @param apiEndPoint
   * @param params
   * @param wrapParams - whether or not we should wrap params in an object.
   *                   - some requests such as sorting already have params wrapped in
   *                      an object to help for things like serializing the params for example
   * @returns {Promise<*>}
   */
  static async fetchRecords(
    component,
    apiEndPoint,
    params = {},
    wrapParams = true,
  ) {
    component.loading = true;
    component.errorMessage = '';
    try {
      let apiResponse;

      const apiCallsService = AxiosConfig.getInstance();

      if (!_isEmpty(params)) {
        let payloadParams = params;

        if (wrapParams) {
          payloadParams = { params };
        }

        apiResponse = await apiCallsService.get(
          apiEndPoint,
          payloadParams,
        );
      } else {
        apiResponse = await apiCallsService.get(apiEndPoint);
      }

      component.loading = false;

      return apiResponse.data || {};
    } catch (error) {
      const apiErrorsService = new ApiErrorsService(unknownErrorMessage);
      component.errorMessage = apiErrorsService.retrieveErrorMessage(error);
      component.loading = false;
      return {};
    }
  }

}
