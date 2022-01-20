/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *


 *
 */

import * as runtime from '../runtime';
import { GetDomainWhoisOut } from '../models';

export interface V1GetDomainWhoisRequest {
  domain?: string;
}

/**
 *
 */
export class DomainApi extends runtime.BaseAPI {
  /**
   * Get domain WHOIS details and registration information
   */
  private async v1GetDomainWhoisRaw(
    requestParameters: V1GetDomainWhoisRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetDomainWhoisOut>> {
    const queryParameters: any = {};

    if (requestParameters.domain !== undefined) {
      queryParameters['domain'] = requestParameters.domain;
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
        path: `/v1-get-domain-whois`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get domain WHOIS details and registration information
   */
  async v1GetDomainWhois(
    requestParameters: V1GetDomainWhoisRequest = {},
    initOverrides?: RequestInit,
  ): Promise<GetDomainWhoisOut> {
    const response = await this.v1GetDomainWhoisRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
