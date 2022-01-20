/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 *
 */

import * as runtime from '../runtime';
import { ConvertCurrencyOut, GetCurrencyDetailsOut, GetCurrencyExchangeRateOut, ListCurrenciesOut } from '../models';

export interface V1ConvertCurrencyRequest {
  from: string;
  to: string;
  amount?: number;
}

export interface V1GetCurrencyDetailsRequest {
  code: string;
  expand?: Array<string>;
  exclude?: Array<string>;
  language?: V1GetCurrencyDetailsLanguageEnum;
  type?: V1GetCurrencyDetailsTypeEnum;
}

export interface V1GetCurrencyExchangeRateRequest {
  from: string;
  to: string;
}

export interface V1ListCurrenciesRequest {
  code?: Array<string>;
  expand?: Array<string>;
  exclude?: Array<string>;
  language?: V1ListCurrenciesLanguageEnum;
  type?: V1ListCurrenciesTypeEnum;
  sort?: Array<string>;
  page?: string;
  pageSize?: string;
}

/**
 *
 */
export class CurrencyApi extends runtime.BaseAPI {
  /**
   * Convert currency to another currency
   */
  async v1ConvertCurrencyRaw(
    requestParameters: V1ConvertCurrencyRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ConvertCurrencyOut>> {
    if (requestParameters.from === null || requestParameters.from === undefined) {
      throw new runtime.RequiredError(
        'from',
        'Required parameter requestParameters.from was null or undefined when calling v1ConvertCurrency.',
      );
    }

    if (requestParameters.to === null || requestParameters.to === undefined) {
      throw new runtime.RequiredError(
        'to',
        'Required parameter requestParameters.to was null or undefined when calling v1ConvertCurrency.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.amount !== undefined) {
      queryParameters['amount'] = requestParameters.amount;
    }

    if (requestParameters.from !== undefined) {
      queryParameters['from'] = requestParameters.from;
    }

    if (requestParameters.to !== undefined) {
      queryParameters['to'] = requestParameters.to;
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
        path: `/v1-convert-currency`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Convert currency to another currency
   */
  async v1ConvertCurrency(
    requestParameters: V1ConvertCurrencyRequest,
    initOverrides?: RequestInit,
  ): Promise<ConvertCurrencyOut> {
    const response = await this.v1ConvertCurrencyRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get currency facts and information
   */
  async v1GetCurrencyDetailsRaw(
    requestParameters: V1GetCurrencyDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetCurrencyDetailsOut>> {
    if (requestParameters.code === null || requestParameters.code === undefined) {
      throw new runtime.RequiredError(
        'code',
        'Required parameter requestParameters.code was null or undefined when calling v1GetCurrencyDetails.',
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

    if (requestParameters.type !== undefined) {
      queryParameters['type'] = requestParameters.type;
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
        path: `/v1-get-currency-details`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get currency facts and information
   */
  async v1GetCurrencyDetails(
    requestParameters: V1GetCurrencyDetailsRequest,
    initOverrides?: RequestInit,
  ): Promise<GetCurrencyDetailsOut> {
    const response = await this.v1GetCurrencyDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get exchange rate for a currency
   */
  async v1GetCurrencyExchangeRateRaw(
    requestParameters: V1GetCurrencyExchangeRateRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<GetCurrencyExchangeRateOut>> {
    if (requestParameters.from === null || requestParameters.from === undefined) {
      throw new runtime.RequiredError(
        'from',
        'Required parameter requestParameters.from was null or undefined when calling v1GetCurrencyExchangeRate.',
      );
    }

    if (requestParameters.to === null || requestParameters.to === undefined) {
      throw new runtime.RequiredError(
        'to',
        'Required parameter requestParameters.to was null or undefined when calling v1GetCurrencyExchangeRate.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.from !== undefined) {
      queryParameters['from'] = requestParameters.from;
    }

    if (requestParameters.to !== undefined) {
      queryParameters['to'] = requestParameters.to;
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
        path: `/v1-get-currency-exchange-rate`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get exchange rate for a currency
   */
  async v1GetCurrencyExchangeRate(
    requestParameters: V1GetCurrencyExchangeRateRequest,
    initOverrides?: RequestInit,
  ): Promise<GetCurrencyExchangeRateOut> {
    const response = await this.v1GetCurrencyExchangeRateRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get list of all currencies
   */
  async v1ListCurrenciesRaw(
    requestParameters: V1ListCurrenciesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ListCurrenciesOut>> {
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

    if (requestParameters.type !== undefined) {
      queryParameters['type'] = requestParameters.type;
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
        path: `/v1-list-currencies`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get list of all currencies
   */
  async v1ListCurrencies(
    requestParameters: V1ListCurrenciesRequest = {},
    initOverrides?: RequestInit,
  ): Promise<ListCurrenciesOut> {
    const response = await this.v1ListCurrenciesRaw(requestParameters, initOverrides);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum V1GetCurrencyDetailsLanguageEnum {
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
export enum V1GetCurrencyDetailsTypeEnum {
  Fiat = 'fiat',
  Crypto = 'crypto',
}

/**
 * @export
 * @enum {string}
 */
export enum V1ListCurrenciesLanguageEnum {
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
export enum V1ListCurrenciesTypeEnum {
  Fiat = 'fiat',
  Crypto = 'crypto',
}
