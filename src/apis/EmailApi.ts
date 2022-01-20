/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *
 */

import * as runtime from '../runtime';
import { GetEmailDetailsOut } from '../models';

export interface V1GetEmailDetailsRequest {
  email: string;
  verifyMx?: boolean;
  verifySmtp?: boolean;
}

/**
 *
 */
export class EmailApi extends runtime.BaseAPI {
  /**
   * Get email validation details
   */
  private async v1GetEmailDetailsRaw(
    requestParameters: V1GetEmailDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetEmailDetailsOut>> {
    if (requestParameters.email === null || requestParameters.email === undefined) {
      throw new runtime.RequiredError(
        'email',
        'Required parameter requestParameters.email was null or undefined when calling v1GetEmailDetails.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.email !== undefined) {
      queryParameters['email'] = requestParameters.email;
    }

    if (requestParameters.verifyMx !== undefined) {
      queryParameters['verifyMx'] = requestParameters.verifyMx;
    }

    if (requestParameters.verifySmtp !== undefined) {
      queryParameters['verifySmtp'] = requestParameters.verifySmtp;
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
        path: `/v1-get-email-details`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get email validation details
   */
  async v1GetEmailDetails(
    requestParameters: V1GetEmailDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<GetEmailDetailsOut> {
    const response = await this.v1GetEmailDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
