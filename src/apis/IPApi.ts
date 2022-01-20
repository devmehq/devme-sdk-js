/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *
 */

import * as runtime from '../runtime';
import { GetIpDetailsOut } from '../models';

export interface V1GetIpDetailsRequest {
  ip?: string;
}

/**
 *
 */
export class IPApi extends runtime.BaseAPI {
  /**
   * Get IP GEO Location and ISP details
   */
  private async v1GetIpDetailsRaw(
    requestParameters: V1GetIpDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetIpDetailsOut>> {
    const queryParameters: any = {};

    if (requestParameters.ip !== undefined) {
      queryParameters['ip'] = requestParameters.ip;
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
        path: `/v1-get-ip-details`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get IP GEO Location and ISP details
   */
  async v1GetIpDetails(
    requestParameters: V1GetIpDetailsRequest = {},
    initOverrides?: RequestInit,
  ): Promise<GetIpDetailsOut> {
    const response = await this.v1GetIpDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
