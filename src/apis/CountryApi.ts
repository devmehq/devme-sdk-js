/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *
 */

import * as runtime from '../runtime';
import { GetCountryDetailsOut, ListCountriesOut } from '../models';

export interface V1GetCountryDetailsRequest {
  code: string;
  expand?: Array<string>;
  exclude?: Array<string>;
  language?: V1GetCountryDetailsLanguageEnum;
}

export interface V1ListCountriesRequest {
  code?: Array<string>;
  expand?: Array<string>;
  exclude?: Array<string>;
  language?: V1ListCountriesLanguageEnum;
  sort?: Array<string>;
  page?: string;
  pageSize?: string;
}

/**
 *
 */
export class CountryApi extends runtime.BaseAPI {
  /**
   * Get country facts and information
   */
  async v1GetCountryDetailsRaw(
    requestParameters: V1GetCountryDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetCountryDetailsOut>> {
    if (requestParameters.code === null || requestParameters.code === undefined) {
      throw new runtime.RequiredError(
        'code',
        'Required parameter requestParameters.code was null or undefined when calling v1GetCountryDetails.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.code !== undefined) {
      queryParameters['code'] = requestParameters.code;
    }

    if (requestParameters.expand) {
      queryParameters['expand'] = requestParameters.expand;
    }

    if (requestParameters.exclude) {
      queryParameters['exclude'] = requestParameters.exclude;
    }

    if (requestParameters.language !== undefined) {
      queryParameters['language'] = requestParameters.language;
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
        path: `/v1-get-country-details`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get country facts and information
   */
  async v1GetCountryDetails(
    requestParameters: V1GetCountryDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<GetCountryDetailsOut> {
    const response = await this.v1GetCountryDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get list of all countries
   */
  async v1ListCountriesRaw(
    requestParameters: V1ListCountriesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ListCountriesOut>> {
    const queryParameters: any = {};

    if (requestParameters.code) {
      queryParameters['code'] = requestParameters.code;
    }

    if (requestParameters.expand) {
      queryParameters['expand'] = requestParameters.expand;
    }

    if (requestParameters.exclude) {
      queryParameters['exclude'] = requestParameters.exclude;
    }

    if (requestParameters.language !== undefined) {
      queryParameters['language'] = requestParameters.language;
    }

    if (requestParameters.sort) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.pageSize !== undefined) {
      queryParameters['pageSize'] = requestParameters.pageSize;
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
        path: `/v1-list-countries`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get list of all countries
   */
  async v1ListCountries(
    requestParameters: V1ListCountriesRequest = {},
    initOverrides?: RequestInit,
  ): Promise<ListCountriesOut> {
    const response = await this.v1ListCountriesRaw(requestParameters, initOverrides);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum V1GetCountryDetailsLanguageEnum {
  En = 'en',
  Ar = 'ar',
  De = 'de',
  Es = 'es',
  Fr = 'fr',
  Ja = 'ja',
  Ko = 'ko',
  Pt = 'pt',
  Ru = 'ru',
}

/**
 * @export
 * @enum {string}
 */
export enum V1ListCountriesLanguageEnum {
  En = 'en',
  Ar = 'ar',
  De = 'de',
  Es = 'es',
  Fr = 'fr',
  Ja = 'ja',
  Ko = 'ko',
  Pt = 'pt',
  Ru = 'ru',
}
