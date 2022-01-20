/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *
 */

import * as runtime from '../runtime';
import { GetPhoneDetailsOut } from '../models';

export interface V1GetPhoneDetailsRequest {
  phone: string;
}

/**
 *
 */
export class PhoneApi extends runtime.BaseAPI {
  /**
   * Get phone validation details
   */
  private async v1GetPhoneDetailsRaw(
    requestParameters: V1GetPhoneDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetPhoneDetailsOut>> {
    if (requestParameters.phone === null || requestParameters.phone === undefined) {
      throw new runtime.RequiredError(
        'phone',
        'Required parameter requestParameters.phone was null or undefined when calling v1GetPhoneDetails.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.phone !== undefined) {
      queryParameters['phone'] = requestParameters.phone;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // APIKeyHeader authentication
    }

    if (this.configuration && this.configuration.apiKey) {
      queryParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // APIKeyQueryParam authentication
    }

    const response = await this.request(
      {
        path: `/v1-get-phone-details`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get phone validation details
   */
  async v1GetPhoneDetails(
    requestParameters: V1GetPhoneDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<GetPhoneDetailsOut> {
    const response = await this.v1GetPhoneDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
