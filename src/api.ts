/**
 * DEV.ME API Documentation
 * DEV.ME API Documentation [Currency Conversion and Exchange Rates API](https://dev.me/products/currency) - [IP2Location, IP Country, IP Information API](https://dev.me/products/ip) -  [Email Validation, Mailbox Verification](https://dev.me/products/email) - [Phone Number Validation](https://dev.me/products/phone). You can learn more at [dev.me](https://dev.me). For this example you can use api key `demo-key` to test the APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me
 */

import { Configuration } from './configuration';
import globalAxios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
import {
  assertParamExists,
  createRequestFunction,
  DUMMY_BASE_URL,
  serializeDataIfNeeded,
  setApiKeyToObject,
  setSearchParams,
  toPathString,
} from './common';
import { BASE_PATH, BaseAPI, RequestArgs, RequiredError } from './base';

/**
 *
 * @export
 * @interface CaptureUrlScreenshotIn
 */
export interface CaptureUrlScreenshotIn {
  /**
   * URL to capture
   * @type {string}
   * @memberof CaptureUrlScreenshotIn
   */
  url?: string;
  /**
   * Include HTML in the response
   * @type {boolean}
   * @memberof CaptureUrlScreenshotIn
   */
  includeHtml?: boolean;
}

/**
 *
 * @export
 * @interface CaptureUrlScreenshotOut
 */
export interface CaptureUrlScreenshotOut {
  /**
   * URL to capture
   * @type {string}
   * @memberof CaptureUrlScreenshotOut
   */
  url?: string;
  /**
   * Base64 encoded screenshot
   * @type {string}
   * @memberof CaptureUrlScreenshotOut
   */
  screenshot?: string;
  /**
   * HTML of the page
   * @type {string}
   * @memberof CaptureUrlScreenshotOut
   */
  html?: string;
}

/**
 *
 * @export
 * @interface ConvertCurrencyOut
 */
export interface ConvertCurrencyOut {
  /**
   * currency to convert from
   * @type {string}
   * @memberof ConvertCurrencyOut
   */
  from?: string;
  /**
   * currency to convert to
   * @type {string}
   * @memberof ConvertCurrencyOut
   */
  to?: string;
  /**
   * exchange rate
   * @type {number}
   * @memberof ConvertCurrencyOut
   */
  exchangeRate?: number;
  /**
   * time of the exchange rate
   * @type {string}
   * @memberof ConvertCurrencyOut
   */
  rateTime?: string;
  /**
   * original amount input
   * @type {number}
   * @memberof ConvertCurrencyOut
   */
  originalAmount?: number;
  /**
   * converted amount
   * @type {number}
   * @memberof ConvertCurrencyOut
   */
  convertedAmount?: number;
  /**
   * converted amount in text
   * @type {string}
   * @memberof ConvertCurrencyOut
   */
  convertedText?: string;
}

/**
 *
 * @export
 * @interface CreateShortUrlIn
 */
export interface CreateShortUrlIn {
  /**
   * long url
   * @type {string}
   * @memberof CreateShortUrlIn
   */
  url?: string;
}

/**
 *
 * @export
 * @interface CreateShortUrlOut
 */
export interface CreateShortUrlOut {
  /**
   * original url
   * @type {string}
   * @memberof CreateShortUrlOut
   */
  url?: string;
  /**
   * short url
   * @type {string}
   * @memberof CreateShortUrlOut
   */
  shortUrl?: string;
  /**
   * short url id
   * @type {string}
   * @memberof CreateShortUrlOut
   */
  sid?: string;
  /**
   * created at timestamp
   * @type {string}
   * @memberof CreateShortUrlOut
   */
  createdAt?: string;
}

/**
 *
 * @export
 * @interface DeleteShortUrlIn
 */
export interface DeleteShortUrlIn {
  /**
   * short url sid
   * @type {string}
   * @memberof DeleteShortUrlIn
   */
  sid?: string;
}

/**
 *
 * @export
 * @interface DeleteShortUrlOut
 */
export interface DeleteShortUrlOut {
  /**
   * delete success
   * @type {boolean}
   * @memberof DeleteShortUrlOut
   */
  success?: boolean;
}

/**
 *
 * @export
 * @interface GetCountryDetailsOut
 */
export interface GetCountryDetailsOut {
  /**
   * country code ISO 4217
   * @type {string}
   * @memberof GetCountryDetailsOut
   */
  code?: string;
  /**
   * country name
   * @type {string}
   * @memberof GetCountryDetailsOut
   */
  name?: string;
}

/**
 *
 * @export
 * @interface GetCurrencyDetailsOut
 */
export interface GetCurrencyDetailsOut {
  /**
   * currency code ISO 4217
   * @type {string}
   * @memberof GetCurrencyDetailsOut
   */
  code?: string;
  /**
   * currency name object
   * @type {object}
   * @memberof GetCurrencyDetailsOut
   */
  name?: object;
}

/**
 *
 * @export
 * @interface GetCurrencyExchangeRateOut
 */
export interface GetCurrencyExchangeRateOut {
  /**
   * currency to get exchange rate from
   * @type {string}
   * @memberof GetCurrencyExchangeRateOut
   */
  from?: string;
  /**
   * currency to get exchange rate to
   * @type {string}
   * @memberof GetCurrencyExchangeRateOut
   */
  to?: string;
  /**
   * exchange rate
   * @type {number}
   * @memberof GetCurrencyExchangeRateOut
   */
  exchangeRate?: number;
  /**
   * time of the exchange rate
   * @type {string}
   * @memberof GetCurrencyExchangeRateOut
   */
  rateTime?: string;
}

/**
 *
 * @export
 * @interface GetDomainWhoisOut
 */
export interface GetDomainWhoisOut {
  /**
   * Domain name
   * @type {string}
   * @memberof GetDomainWhoisOut
   */
  domain?: string;
  /**
   * WHOIS text
   * @type {string}
   * @memberof GetDomainWhoisOut
   */
  whoisText?: string;
  /**
   * WHOIS JSON
   * @type {object}
   * @memberof GetDomainWhoisOut
   */
  whoisJson?: object;
}

/**
 *
 * @export
 * @interface GetEmailDetailsOut
 */
export interface GetEmailDetailsOut {
  /**
   * email address
   * @type {string}
   * @memberof GetEmailDetailsOut
   */
  email?: string;
  /**
   * is the domain is valid with dns MX record
   * @type {boolean}
   * @memberof GetEmailDetailsOut
   */
  validMx?: boolean;
  /**
   * is email address valid with SMTP Connect and Reply
   * @type {boolean}
   * @memberof GetEmailDetailsOut
   */
  validSmtp?: boolean;
  /**
   * is email valid format
   * @type {boolean}
   * @memberof GetEmailDetailsOut
   */
  validFormat?: boolean;
  /**
   * is disposable email
   * @type {boolean}
   * @memberof GetEmailDetailsOut
   */
  isDisposable?: boolean;
  /**
   * is free email
   * @type {boolean}
   * @memberof GetEmailDetailsOut
   */
  isFree?: boolean;
  /**
   * domain age
   * @type {number}
   * @memberof GetEmailDetailsOut
   */
  domainAge?: number;
  /**
   * quality score
   * @type {number}
   * @memberof GetEmailDetailsOut
   */
  score?: number;
}

/**
 *
 * @export
 * @interface GetIpDetailsCityOut
 */
export interface GetIpDetailsCityOut {
  /**
   * Accuracy Radius
   * @type {number}
   * @memberof GetIpDetailsCityOut
   */
  accuracyRadius?: number;
  /**
   * Latitude
   * @type {number}
   * @memberof GetIpDetailsCityOut
   */
  latitude?: number;
  /**
   * Longitude
   * @type {string}
   * @memberof GetIpDetailsCityOut
   */
  longitude?: string;
  /**
   * Time Zone
   * @type {string}
   * @memberof GetIpDetailsCityOut
   */
  timeZone?: string;
  /**
   * City Name
   * @type {string}
   * @memberof GetIpDetailsCityOut
   */
  name?: string;
}

/**
 *
 * @export
 * @interface GetIpDetailsOut
 */
export interface GetIpDetailsOut {
  /**
   * IP Address
   * @type {string}
   * @memberof GetIpDetailsOut
   */
  ip?: string;
  /**
   * Country Code ISO 3166-1 Alpha-2
   * @type {string}
   * @memberof GetIpDetailsOut
   */
  countryCode?: string;
  /**
   * Registered Country Code ISO 3166-1 Alpha-2
   * @type {string}
   * @memberof GetIpDetailsOut
   */
  registeredCountryCode?: string;
  /**
   * autonomous system number
   * @type {string}
   * @memberof GetIpDetailsOut
   */
  asn?: string;
  /**
   * autonomous system organization
   * @type {string}
   * @memberof GetIpDetailsOut
   */
  aso?: string;
  /**
   *
   * @type {GetIpDetailsCityOut}
   * @memberof GetIpDetailsOut
   */
  city?: GetIpDetailsCityOut;
}

/**
 *
 * @export
 * @interface GetPhoneDetailsOut
 */
export interface GetPhoneDetailsOut {
  /**
   * phone number
   * @type {string}
   * @memberof GetPhoneDetailsOut
   */
  number?: string;
  /**
   * is phone number valid
   * @type {boolean}
   * @memberof GetPhoneDetailsOut
   */
  valid?: boolean;
  /**
   * country code associated with phone number ISO 3166-1 alpha-2
   * @type {string}
   * @memberof GetPhoneDetailsOut
   */
  country?: string;
  /**
   * country calling code associated with phone number
   * @type {string}
   * @memberof GetPhoneDetailsOut
   */
  callingCode?: string;
  /**
   * national number associated with phone number
   * @type {string}
   * @memberof GetPhoneDetailsOut
   */
  nationalNumber?: string;
  /**
   * phone number type
   * @type {string}
   * @memberof GetPhoneDetailsOut
   */
  type?: string;
}

/**
 *
 * @export
 * @interface GetShortUrlDetailsOut
 */
export interface GetShortUrlDetailsOut {
  /**
   * original url
   * @type {string}
   * @memberof GetShortUrlDetailsOut
   */
  url?: string;
  /**
   * short url
   * @type {string}
   * @memberof GetShortUrlDetailsOut
   */
  shortUrl?: string;
  /**
   * short url sid
   * @type {string}
   * @memberof GetShortUrlDetailsOut
   */
  sid?: string;
  /**
   * created at timestamp
   * @type {string}
   * @memberof GetShortUrlDetailsOut
   */
  createdAt?: string;
  /**
   * updated at timestamp
   * @type {string}
   * @memberof GetShortUrlDetailsOut
   */
  updatedAt?: string;
}

/**
 *
 * @export
 * @interface GetTextFromImageIn
 */
export interface GetTextFromImageIn {
  /**
   * image
   * @type {object}
   * @memberof GetTextFromImageIn
   */
  image?: object;
  /**
   * url
   * @type {string}
   * @memberof GetTextFromImageIn
   */
  url?: string;
  /**
   * language
   * @type {string}
   * @memberof GetTextFromImageIn
   */
  lang?: string;
  /**
   * page
   * @type {string}
   * @memberof GetTextFromImageIn
   */
  psm?: string;
  /**
   * outputFormat
   * @type {string}
   * @memberof GetTextFromImageIn
   */
  outputFormat?: string;
}

/**
 *
 * @export
 * @interface GetTextFromImageOut
 */
export interface GetTextFromImageOut {
  /**
   * parsed text from image
   * @type {string}
   * @memberof GetTextFromImageOut
   */
  text?: string;
}

/**
 *
 * @export
 * @interface HttpErrorOut
 */
export interface HttpErrorOut {
  /**
   * http status code
   * @type {number}
   * @memberof HttpErrorOut
   */
  status?: number;
  /**
   * error name
   * @type {string}
   * @memberof HttpErrorOut
   */
  name?: string;
  /**
   * error message
   * @type {string}
   * @memberof HttpErrorOut
   */
  message?: string;
  /**
   * array of errors
   * @type {Array<Error>}
   * @memberof HttpErrorOut
   */
  errors?: Array<Error>;
}

/**
 *
 * @export
 * @interface ListCountriesItem
 */
export interface ListCountriesItem {
  /**
   * country code ISO 4217
   * @type {string}
   * @memberof ListCountriesItem
   */
  code?: string;
  /**
   * name
   * @type {object}
   * @memberof ListCountriesItem
   */
  name?: object;
}

/**
 *
 * @export
 * @interface ListCountriesOut
 */
export interface ListCountriesOut {
  /**
   * page number
   * @type {number}
   * @memberof ListCountriesOut
   */
  page?: number;
  /**
   * total number of countries
   * @type {number}
   * @memberof ListCountriesOut
   */
  total?: number;
  /**
   * list of countries
   * @type {Array<ListCountriesItem>}
   * @memberof ListCountriesOut
   */
  list?: Array<ListCountriesItem>;
}

/**
 *
 * @export
 * @interface ListCurrenciesItem
 */
export interface ListCurrenciesItem {
  /**
   * currency code ISO 4217
   * @type {string}
   * @memberof ListCurrenciesItem
   */
  code?: string;
  /**
   * banknotes
   * @type {object}
   * @memberof ListCurrenciesItem
   */
  banknotes?: object;
  /**
   * coins
   * @type {object}
   * @memberof ListCurrenciesItem
   */
  coins?: object;
  /**
   * iso
   * @type {object}
   * @memberof ListCurrenciesItem
   */
  iso?: object;
  /**
   * name
   * @type {object}
   * @memberof ListCurrenciesItem
   */
  name?: object;
  /**
   * type of currency
   * @type {string}
   * @memberof ListCurrenciesItem
   */
  type?: ListCurrenciesItemTypeEnum;
  /**
   * units
   * @type {object}
   * @memberof ListCurrenciesItem
   */
  units?: object;
}

export const ListCurrenciesItemTypeEnum = {
  Fiat: 'fiat',
  Crypto: 'crypto',
} as const;

export type ListCurrenciesItemTypeEnum = typeof ListCurrenciesItemTypeEnum[keyof typeof ListCurrenciesItemTypeEnum];

/**
 *
 * @export
 * @interface ListCurrenciesOut
 */
export interface ListCurrenciesOut {
  /**
   * page number
   * @type {number}
   * @memberof ListCurrenciesOut
   */
  page?: number;
  /**
   * total number of currencies
   * @type {number}
   * @memberof ListCurrenciesOut
   */
  total?: number;
  /**
   * list of currencies
   * @type {Array<ListCurrenciesItem>}
   * @memberof ListCurrenciesOut
   */
  list?: Array<ListCurrenciesItem>;
}

/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
  /**
   * error value
   * @type {string | number}
   * @memberof ModelError
   */
  value?: string | number;
  /**
   * error message
   * @type {string}
   * @memberof ModelError
   */
  msg?: string;
  /**
   * error parameters
   * @type {string}
   * @memberof ModelError
   */
  param?: string;
  /**
   * location of the error
   * @type {string}
   * @memberof ModelError
   */
  location?: string;
}

/**
 *
 * @export
 * @interface ScrapeUrlDataIn
 */
export interface ScrapeUrlDataIn {
  /**
   * URL to scrape
   * @type {string}
   * @memberof ScrapeUrlDataIn
   */
  url?: string;
}

/**
 *
 * @export
 * @interface ScrapeUrlDataOut
 */
export interface ScrapeUrlDataOut {
  /**
   * URL to scrape
   * @type {string}
   * @memberof ScrapeUrlDataOut
   */
  url?: string;
  /**
   * Scraped data
   * @type {object}
   * @memberof ScrapeUrlDataOut
   */
  metadata?: object;
  /**
   * OpenGraph data
   * @type {object}
   * @memberof ScrapeUrlDataOut
   */
  openGraph?: object;
}

/**
 *
 * @export
 * @interface UpdateShortUrlIn
 */
export interface UpdateShortUrlIn {
  /**
   * short url id
   * @type {string}
   * @memberof UpdateShortUrlIn
   */
  _id?: string;
  /**
   * short url sid
   * @type {string}
   * @memberof UpdateShortUrlIn
   */
  sid?: string;
}

/**
 *
 * @export
 * @interface UpdateShortUrlOut
 */
export interface UpdateShortUrlOut {
  /**
   * original url
   * @type {string}
   * @memberof UpdateShortUrlOut
   */
  originalUrl?: string;
  /**
   * short url
   * @type {string}
   * @memberof UpdateShortUrlOut
   */
  shortUrl?: string;
  /**
   * short url sid
   * @type {string}
   * @memberof UpdateShortUrlOut
   */
  sid?: string;
}

/**
 *
 * @export
 * @interface WhoAmIOut
 */
export interface WhoAmIOut {
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  userId?: string;
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  reqIpAddress?: string;
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  reqIpCountry?: string;
  /**
   *
   * @type {string}
   * @memberof WhoAmIOut
   */
  reqUserAgent?: string;
}

/**
 * CountryApi - axios parameter creator
 * @export
 */
export const CountryApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get country facts and information
     * @param {string} code code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCountryDetails: async (
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'code' is not null or undefined
      assertParamExists('v1GetCountryDetails', 'code', code);
      const localVarPath = `/v1-get-country-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (code !== undefined) {
        localVarQueryParameter['code'] = code;
      }

      if (expand) {
        localVarQueryParameter['expand'] = expand;
      }

      if (exclude) {
        localVarQueryParameter['exclude'] = exclude;
      }

      if (language !== undefined) {
        localVarQueryParameter['language'] = language;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get list of all countries
     * @param {Array<string>} [code] code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCountries: async (
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1-list-countries`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (code) {
        localVarQueryParameter['code'] = code;
      }

      if (expand) {
        localVarQueryParameter['expand'] = expand;
      }

      if (exclude) {
        localVarQueryParameter['exclude'] = exclude;
      }

      if (language !== undefined) {
        localVarQueryParameter['language'] = language;
      }

      if (sort) {
        localVarQueryParameter['sort'] = sort;
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter['pageSize'] = pageSize;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * CountryApi - functional programming interface
 * @export
 */
export const CountryApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CountryApiAxiosParamCreator(configuration);
  return {
    /**
     * Get country facts and information
     * @param {string} code code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCountryDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCountryDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCountryDetails(
        code,
        expand,
        exclude,
        language,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Get list of all countries
     * @param {Array<string>} [code] code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListCountries(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCountriesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListCountries(
        code,
        expand,
        exclude,
        language,
        sort,
        page,
        pageSize,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * CountryApi - factory interface
 * @export
 */
export const CountryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = CountryApiFp(configuration);
  return {
    /**
     * Get country facts and information
     * @param {string} code code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCountryDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      options?: any,
    ): AxiosPromise<GetCountryDetailsOut> {
      return localVarFp
        .v1GetCountryDetails(code, expand, exclude, language, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get list of all countries
     * @param {Array<string>} [code] code - country code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCountries(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options?: any,
    ): AxiosPromise<ListCountriesOut> {
      return localVarFp
        .v1ListCountries(code, expand, exclude, language, sort, page, pageSize, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetCountryDetails operation in CountryApi.
 * @export
 * @interface CountryApiV1GetCountryDetailsRequest
 */
export interface CountryApiV1GetCountryDetailsRequest {
  /**
   * code - country code ISO 4217
   * @type {string}
   * @memberof CountryApiV1GetCountryDetails
   */
  readonly code: string;

  /**
   * expand - expand properties
   * @type {Array<string>}
   * @memberof CountryApiV1GetCountryDetails
   */
  readonly expand?: Array<string>;

  /**
   * exclude - exclude properties
   * @type {Array<string>}
   * @memberof CountryApiV1GetCountryDetails
   */
  readonly exclude?: Array<string>;

  /**
   * language - localisation language
   * @type {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'}
   * @memberof CountryApiV1GetCountryDetails
   */
  readonly language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru';
}

/**
 * Request parameters for v1ListCountries operation in CountryApi.
 * @export
 * @interface CountryApiV1ListCountriesRequest
 */
export interface CountryApiV1ListCountriesRequest {
  /**
   * code - country code ISO 4217
   * @type {Array<string>}
   * @memberof CountryApiV1ListCountries
   */
  readonly code?: Array<string>;

  /**
   * expand - expand properties
   * @type {Array<string>}
   * @memberof CountryApiV1ListCountries
   */
  readonly expand?: Array<string>;

  /**
   * exclude - exclude properties
   * @type {Array<string>}
   * @memberof CountryApiV1ListCountries
   */
  readonly exclude?: Array<string>;

  /**
   * language - localisation language
   * @type {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'}
   * @memberof CountryApiV1ListCountries
   */
  readonly language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru';

  /**
   * sort - sort properties
   * @type {Array<string>}
   * @memberof CountryApiV1ListCountries
   */
  readonly sort?: Array<string>;

  /**
   * page - page number
   * @type {string}
   * @memberof CountryApiV1ListCountries
   */
  readonly page?: string;

  /**
   * pageSize - page size
   * @type {string}
   * @memberof CountryApiV1ListCountries
   */
  readonly pageSize?: string;
}

/**
 * CountryApi
 * @export
 * @class CountryApi
 * @extends {BaseAPI}
 */
export class CountryApi extends BaseAPI {
  /**
   * Get country facts and information
   * @param {CountryApiV1GetCountryDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CountryApi
   */
  public v1GetCountryDetails(requestParameters: CountryApiV1GetCountryDetailsRequest, options?: AxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1GetCountryDetails(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
        requestParameters.language,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get list of all countries
   * @param {CountryApiV1ListCountriesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CountryApi
   */
  public v1ListCountries(requestParameters: CountryApiV1ListCountriesRequest = {}, options?: AxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1ListCountries(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
        requestParameters.language,
        requestParameters.sort,
        requestParameters.page,
        requestParameters.pageSize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * CurrencyApi - axios parameter creator
 * @export
 */
export const CurrencyApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Convert currency to another currency
     * @param {string} from from - currency to convert from
     * @param {string} to to - currency to convert to
     * @param {number} [amount] amount - amount to convert
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ConvertCurrency: async (
      from: string,
      to: string,
      amount?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'from' is not null or undefined
      assertParamExists('v1ConvertCurrency', 'from', from);
      // verify required parameter 'to' is not null or undefined
      assertParamExists('v1ConvertCurrency', 'to', to);
      const localVarPath = `/v1-convert-currency`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (amount !== undefined) {
        localVarQueryParameter['amount'] = amount;
      }

      if (from !== undefined) {
        localVarQueryParameter['from'] = from;
      }

      if (to !== undefined) {
        localVarQueryParameter['to'] = to;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get currency facts and information
     * @param {string} code code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyDetails: async (
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'code' is not null or undefined
      assertParamExists('v1GetCurrencyDetails', 'code', code);
      const localVarPath = `/v1-get-currency-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (code !== undefined) {
        localVarQueryParameter['code'] = code;
      }

      if (expand) {
        localVarQueryParameter['expand'] = expand;
      }

      if (exclude) {
        localVarQueryParameter['exclude'] = exclude;
      }

      if (language !== undefined) {
        localVarQueryParameter['language'] = language;
      }

      if (type !== undefined) {
        localVarQueryParameter['type'] = type;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get exchange rate for a currency
     * @param {string} from from - currency to get exchange rate from
     * @param {string} to to - currency to get exchange rate to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyExchangeRate: async (
      from: string,
      to: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'from' is not null or undefined
      assertParamExists('v1GetCurrencyExchangeRate', 'from', from);
      // verify required parameter 'to' is not null or undefined
      assertParamExists('v1GetCurrencyExchangeRate', 'to', to);
      const localVarPath = `/v1-get-currency-exchange-rate`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (from !== undefined) {
        localVarQueryParameter['from'] = from;
      }

      if (to !== undefined) {
        localVarQueryParameter['to'] = to;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get list of all currencies
     * @param {Array<string>} [code] code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCurrencies: async (
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1-list-currencies`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (code) {
        localVarQueryParameter['code'] = code;
      }

      if (expand) {
        localVarQueryParameter['expand'] = expand;
      }

      if (exclude) {
        localVarQueryParameter['exclude'] = exclude;
      }

      if (language !== undefined) {
        localVarQueryParameter['language'] = language;
      }

      if (type !== undefined) {
        localVarQueryParameter['type'] = type;
      }

      if (sort) {
        localVarQueryParameter['sort'] = sort;
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter['pageSize'] = pageSize;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * CurrencyApi - functional programming interface
 * @export
 */
export const CurrencyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CurrencyApiAxiosParamCreator(configuration);
  return {
    /**
     * Convert currency to another currency
     * @param {string} from from - currency to convert from
     * @param {string} to to - currency to convert to
     * @param {number} [amount] amount - amount to convert
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ConvertCurrency(
      from: string,
      to: string,
      amount?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConvertCurrencyOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ConvertCurrency(from, to, amount, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Get currency facts and information
     * @param {string} code code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCurrencyDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCurrencyDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCurrencyDetails(
        code,
        expand,
        exclude,
        language,
        type,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Get exchange rate for a currency
     * @param {string} from from - currency to get exchange rate from
     * @param {string} to to - currency to get exchange rate to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCurrencyExchangeRate(
      from: string,
      to: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCurrencyExchangeRateOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCurrencyExchangeRate(from, to, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Get list of all currencies
     * @param {Array<string>} [code] code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListCurrencies(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCurrenciesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListCurrencies(
        code,
        expand,
        exclude,
        language,
        type,
        sort,
        page,
        pageSize,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * CurrencyApi - factory interface
 * @export
 */
export const CurrencyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = CurrencyApiFp(configuration);
  return {
    /**
     * Convert currency to another currency
     * @param {string} from from - currency to convert from
     * @param {string} to to - currency to convert to
     * @param {number} [amount] amount - amount to convert
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ConvertCurrency(from: string, to: string, amount?: number, options?: any): AxiosPromise<ConvertCurrencyOut> {
      return localVarFp.v1ConvertCurrency(from, to, amount, options).then((request) => request(axios, basePath));
    },
    /**
     * Get currency facts and information
     * @param {string} code code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      options?: any,
    ): AxiosPromise<GetCurrencyDetailsOut> {
      return localVarFp
        .v1GetCurrencyDetails(code, expand, exclude, language, type, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get exchange rate for a currency
     * @param {string} from from - currency to get exchange rate from
     * @param {string} to to - currency to get exchange rate to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyExchangeRate(from: string, to: string, options?: any): AxiosPromise<GetCurrencyExchangeRateOut> {
      return localVarFp.v1GetCurrencyExchangeRate(from, to, options).then((request) => request(axios, basePath));
    },
    /**
     * Get list of all currencies
     * @param {Array<string>} [code] code - currency code ISO 4217
     * @param {Array<string>} [expand] expand - expand properties
     * @param {Array<string>} [exclude] exclude - exclude properties
     * @param {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'} [language] language - localisation language
     * @param {'fiat' | 'crypto'} [type] type - type of currency
     * @param {Array<string>} [sort] sort - sort properties
     * @param {string} [page] page - page number
     * @param {string} [pageSize] pageSize - page size
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCurrencies(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru',
      type?: 'fiat' | 'crypto',
      sort?: Array<string>,
      page?: string,
      pageSize?: string,
      options?: any,
    ): AxiosPromise<ListCurrenciesOut> {
      return localVarFp
        .v1ListCurrencies(code, expand, exclude, language, type, sort, page, pageSize, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1ConvertCurrency operation in CurrencyApi.
 * @export
 * @interface CurrencyApiV1ConvertCurrencyRequest
 */
export interface CurrencyApiV1ConvertCurrencyRequest {
  /**
   * from - currency to convert from
   * @type {string}
   * @memberof CurrencyApiV1ConvertCurrency
   */
  readonly from: string;

  /**
   * to - currency to convert to
   * @type {string}
   * @memberof CurrencyApiV1ConvertCurrency
   */
  readonly to: string;

  /**
   * amount - amount to convert
   * @type {number}
   * @memberof CurrencyApiV1ConvertCurrency
   */
  readonly amount?: number;
}

/**
 * Request parameters for v1GetCurrencyDetails operation in CurrencyApi.
 * @export
 * @interface CurrencyApiV1GetCurrencyDetailsRequest
 */
export interface CurrencyApiV1GetCurrencyDetailsRequest {
  /**
   * code - currency code ISO 4217
   * @type {string}
   * @memberof CurrencyApiV1GetCurrencyDetails
   */
  readonly code: string;

  /**
   * expand - expand properties
   * @type {Array<string>}
   * @memberof CurrencyApiV1GetCurrencyDetails
   */
  readonly expand?: Array<string>;

  /**
   * exclude - exclude properties
   * @type {Array<string>}
   * @memberof CurrencyApiV1GetCurrencyDetails
   */
  readonly exclude?: Array<string>;

  /**
   * language - localisation language
   * @type {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'}
   * @memberof CurrencyApiV1GetCurrencyDetails
   */
  readonly language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru';

  /**
   * type - type of currency
   * @type {'fiat' | 'crypto'}
   * @memberof CurrencyApiV1GetCurrencyDetails
   */
  readonly type?: 'fiat' | 'crypto';
}

/**
 * Request parameters for v1GetCurrencyExchangeRate operation in CurrencyApi.
 * @export
 * @interface CurrencyApiV1GetCurrencyExchangeRateRequest
 */
export interface CurrencyApiV1GetCurrencyExchangeRateRequest {
  /**
   * from - currency to get exchange rate from
   * @type {string}
   * @memberof CurrencyApiV1GetCurrencyExchangeRate
   */
  readonly from: string;

  /**
   * to - currency to get exchange rate to
   * @type {string}
   * @memberof CurrencyApiV1GetCurrencyExchangeRate
   */
  readonly to: string;
}

/**
 * Request parameters for v1ListCurrencies operation in CurrencyApi.
 * @export
 * @interface CurrencyApiV1ListCurrenciesRequest
 */
export interface CurrencyApiV1ListCurrenciesRequest {
  /**
   * code - currency code ISO 4217
   * @type {Array<string>}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly code?: Array<string>;

  /**
   * expand - expand properties
   * @type {Array<string>}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly expand?: Array<string>;

  /**
   * exclude - exclude properties
   * @type {Array<string>}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly exclude?: Array<string>;

  /**
   * language - localisation language
   * @type {'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru'}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly language?: 'en' | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'pt' | 'ru';

  /**
   * type - type of currency
   * @type {'fiat' | 'crypto'}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly type?: 'fiat' | 'crypto';

  /**
   * sort - sort properties
   * @type {Array<string>}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly sort?: Array<string>;

  /**
   * page - page number
   * @type {string}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly page?: string;

  /**
   * pageSize - page size
   * @type {string}
   * @memberof CurrencyApiV1ListCurrencies
   */
  readonly pageSize?: string;
}

/**
 * CurrencyApi
 * @export
 * @class CurrencyApi
 * @extends {BaseAPI}
 */
export class CurrencyApi extends BaseAPI {
  /**
   * Convert currency to another currency
   * @param {CurrencyApiV1ConvertCurrencyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrencyApi
   */
  public v1ConvertCurrency(requestParameters: CurrencyApiV1ConvertCurrencyRequest, options?: AxiosRequestConfig) {
    return CurrencyApiFp(this.configuration)
      .v1ConvertCurrency(requestParameters.from, requestParameters.to, requestParameters.amount, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get currency facts and information
   * @param {CurrencyApiV1GetCurrencyDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrencyApi
   */
  public v1GetCurrencyDetails(requestParameters: CurrencyApiV1GetCurrencyDetailsRequest, options?: AxiosRequestConfig) {
    return CurrencyApiFp(this.configuration)
      .v1GetCurrencyDetails(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
        requestParameters.language,
        requestParameters.type,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get exchange rate for a currency
   * @param {CurrencyApiV1GetCurrencyExchangeRateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrencyApi
   */
  public v1GetCurrencyExchangeRate(
    requestParameters: CurrencyApiV1GetCurrencyExchangeRateRequest,
    options?: AxiosRequestConfig,
  ) {
    return CurrencyApiFp(this.configuration)
      .v1GetCurrencyExchangeRate(requestParameters.from, requestParameters.to, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get list of all currencies
   * @param {CurrencyApiV1ListCurrenciesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrencyApi
   */
  public v1ListCurrencies(requestParameters: CurrencyApiV1ListCurrenciesRequest = {}, options?: AxiosRequestConfig) {
    return CurrencyApiFp(this.configuration)
      .v1ListCurrencies(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
        requestParameters.language,
        requestParameters.type,
        requestParameters.sort,
        requestParameters.page,
        requestParameters.pageSize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * DomainApi - axios parameter creator
 * @export
 */
export const DomainApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get domain WHOIS details and registration information
     * @param {string} [domain] domain - Domain name to get details for
     * @param {string} [parseWhoisToJson] parseWhoisToJson - Parse WHOIS to JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetDomainWhois: async (
      domain?: string,
      parseWhoisToJson?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1-get-domain-whois`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain;
      }

      if (parseWhoisToJson !== undefined) {
        localVarQueryParameter['parseWhoisToJson'] = parseWhoisToJson;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DomainApi - functional programming interface
 * @export
 */
export const DomainApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DomainApiAxiosParamCreator(configuration);
  return {
    /**
     * Get domain WHOIS details and registration information
     * @param {string} [domain] domain - Domain name to get details for
     * @param {string} [parseWhoisToJson] parseWhoisToJson - Parse WHOIS to JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetDomainWhois(
      domain?: string,
      parseWhoisToJson?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDomainWhoisOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetDomainWhois(domain, parseWhoisToJson, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * DomainApi - factory interface
 * @export
 */
export const DomainApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = DomainApiFp(configuration);
  return {
    /**
     * Get domain WHOIS details and registration information
     * @param {string} [domain] domain - Domain name to get details for
     * @param {string} [parseWhoisToJson] parseWhoisToJson - Parse WHOIS to JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetDomainWhois(domain?: string, parseWhoisToJson?: string, options?: any): AxiosPromise<GetDomainWhoisOut> {
      return localVarFp.v1GetDomainWhois(domain, parseWhoisToJson, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetDomainWhois operation in DomainApi.
 * @export
 * @interface DomainApiV1GetDomainWhoisRequest
 */
export interface DomainApiV1GetDomainWhoisRequest {
  /**
   * domain - Domain name to get details for
   * @type {string}
   * @memberof DomainApiV1GetDomainWhois
   */
  readonly domain?: string;

  /**
   * parseWhoisToJson - Parse WHOIS to JSON
   * @type {string}
   * @memberof DomainApiV1GetDomainWhois
   */
  readonly parseWhoisToJson?: string;
}

/**
 * DomainApi
 * @export
 * @class DomainApi
 * @extends {BaseAPI}
 */
export class DomainApi extends BaseAPI {
  /**
   * Get domain WHOIS details and registration information
   * @param {DomainApiV1GetDomainWhoisRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainApi
   */
  public v1GetDomainWhois(requestParameters: DomainApiV1GetDomainWhoisRequest = {}, options?: AxiosRequestConfig) {
    return DomainApiFp(this.configuration)
      .v1GetDomainWhois(requestParameters.domain, requestParameters.parseWhoisToJson, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * EmailApi - axios parameter creator
 * @export
 */
export const EmailApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get email validation details
     * @param {string} email email - email address
     * @param {boolean} [verifyMx] verifyMx - verify domain dns for MX record
     * @param {boolean} [verifySmtp] verifySmtp - verify mailbox with SMTP Connect and Reply
     * @param {string} [timeout] timeout - timeout in milliseconds max 10000 (10 seconds)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetEmailDetails: async (
      email: string,
      verifyMx?: boolean,
      verifySmtp?: boolean,
      timeout?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'email' is not null or undefined
      assertParamExists('v1GetEmailDetails', 'email', email);
      const localVarPath = `/v1-get-email-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (email !== undefined) {
        localVarQueryParameter['email'] = email;
      }

      if (verifyMx !== undefined) {
        localVarQueryParameter['verifyMx'] = verifyMx;
      }

      if (verifySmtp !== undefined) {
        localVarQueryParameter['verifySmtp'] = verifySmtp;
      }

      if (timeout !== undefined) {
        localVarQueryParameter['timeout'] = timeout;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * EmailApi - functional programming interface
 * @export
 */
export const EmailApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EmailApiAxiosParamCreator(configuration);
  return {
    /**
     * Get email validation details
     * @param {string} email email - email address
     * @param {boolean} [verifyMx] verifyMx - verify domain dns for MX record
     * @param {boolean} [verifySmtp] verifySmtp - verify mailbox with SMTP Connect and Reply
     * @param {string} [timeout] timeout - timeout in milliseconds max 10000 (10 seconds)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetEmailDetails(
      email: string,
      verifyMx?: boolean,
      verifySmtp?: boolean,
      timeout?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmailDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetEmailDetails(
        email,
        verifyMx,
        verifySmtp,
        timeout,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * EmailApi - factory interface
 * @export
 */
export const EmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = EmailApiFp(configuration);
  return {
    /**
     * Get email validation details
     * @param {string} email email - email address
     * @param {boolean} [verifyMx] verifyMx - verify domain dns for MX record
     * @param {boolean} [verifySmtp] verifySmtp - verify mailbox with SMTP Connect and Reply
     * @param {string} [timeout] timeout - timeout in milliseconds max 10000 (10 seconds)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetEmailDetails(
      email: string,
      verifyMx?: boolean,
      verifySmtp?: boolean,
      timeout?: string,
      options?: any,
    ): AxiosPromise<GetEmailDetailsOut> {
      return localVarFp
        .v1GetEmailDetails(email, verifyMx, verifySmtp, timeout, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetEmailDetails operation in EmailApi.
 * @export
 * @interface EmailApiV1GetEmailDetailsRequest
 */
export interface EmailApiV1GetEmailDetailsRequest {
  /**
   * email - email address
   * @type {string}
   * @memberof EmailApiV1GetEmailDetails
   */
  readonly email: string;

  /**
   * verifyMx - verify domain dns for MX record
   * @type {boolean}
   * @memberof EmailApiV1GetEmailDetails
   */
  readonly verifyMx?: boolean;

  /**
   * verifySmtp - verify mailbox with SMTP Connect and Reply
   * @type {boolean}
   * @memberof EmailApiV1GetEmailDetails
   */
  readonly verifySmtp?: boolean;

  /**
   * timeout - timeout in milliseconds max 10000 (10 seconds)
   * @type {string}
   * @memberof EmailApiV1GetEmailDetails
   */
  readonly timeout?: string;
}

/**
 * EmailApi
 * @export
 * @class EmailApi
 * @extends {BaseAPI}
 */
export class EmailApi extends BaseAPI {
  /**
   * Get email validation details
   * @param {EmailApiV1GetEmailDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailApi
   */
  public v1GetEmailDetails(requestParameters: EmailApiV1GetEmailDetailsRequest, options?: AxiosRequestConfig) {
    return EmailApiFp(this.configuration)
      .v1GetEmailDetails(
        requestParameters.email,
        requestParameters.verifyMx,
        requestParameters.verifySmtp,
        requestParameters.timeout,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * IPApi - axios parameter creator
 * @export
 */
export const IPApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get IP GEO Location and ISP details
     * @param {string} [ip] ip - IP Address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetIpDetails: async (ip?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1-get-ip-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (ip !== undefined) {
        localVarQueryParameter['ip'] = ip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * IPApi - functional programming interface
 * @export
 */
export const IPApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = IPApiAxiosParamCreator(configuration);
  return {
    /**
     * Get IP GEO Location and ISP details
     * @param {string} [ip] ip - IP Address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetIpDetails(
      ip?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIpDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetIpDetails(ip, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * IPApi - factory interface
 * @export
 */
export const IPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = IPApiFp(configuration);
  return {
    /**
     * Get IP GEO Location and ISP details
     * @param {string} [ip] ip - IP Address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetIpDetails(ip?: string, options?: any): AxiosPromise<GetIpDetailsOut> {
      return localVarFp.v1GetIpDetails(ip, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetIpDetails operation in IPApi.
 * @export
 * @interface IPApiV1GetIpDetailsRequest
 */
export interface IPApiV1GetIpDetailsRequest {
  /**
   * ip - IP Address
   * @type {string}
   * @memberof IPApiV1GetIpDetails
   */
  readonly ip?: string;
}

/**
 * IPApi
 * @export
 * @class IPApi
 * @extends {BaseAPI}
 */
export class IPApi extends BaseAPI {
  /**
   * Get IP GEO Location and ISP details
   * @param {IPApiV1GetIpDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IPApi
   */
  public v1GetIpDetails(requestParameters: IPApiV1GetIpDetailsRequest = {}, options?: AxiosRequestConfig) {
    return IPApiFp(this.configuration)
      .v1GetIpDetails(requestParameters.ip, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * ImageApi - axios parameter creator
 * @export
 */
export const ImageApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get Text From Image with OCR
     * @param {GetTextFromImageIn} getTextFromImageIn body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetTextFromImage: async (
      getTextFromImageIn: GetTextFromImageIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'getTextFromImageIn' is not null or undefined
      assertParamExists('v1GetTextFromImage', 'getTextFromImageIn', getTextFromImageIn);
      const localVarPath = `/v1-get-text-from-image`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(getTextFromImageIn, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ImageApi - functional programming interface
 * @export
 */
export const ImageApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ImageApiAxiosParamCreator(configuration);
  return {
    /**
     * Get Text From Image with OCR
     * @param {GetTextFromImageIn} getTextFromImageIn body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetTextFromImage(
      getTextFromImageIn: GetTextFromImageIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTextFromImageOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetTextFromImage(getTextFromImageIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * ImageApi - factory interface
 * @export
 */
export const ImageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = ImageApiFp(configuration);
  return {
    /**
     * Get Text From Image with OCR
     * @param {GetTextFromImageIn} getTextFromImageIn body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetTextFromImage(getTextFromImageIn: GetTextFromImageIn, options?: any): AxiosPromise<GetTextFromImageOut> {
      return localVarFp.v1GetTextFromImage(getTextFromImageIn, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetTextFromImage operation in ImageApi.
 * @export
 * @interface ImageApiV1GetTextFromImageRequest
 */
export interface ImageApiV1GetTextFromImageRequest {
  /**
   * body
   * @type {GetTextFromImageIn}
   * @memberof ImageApiV1GetTextFromImage
   */
  readonly getTextFromImageIn: GetTextFromImageIn;
}

/**
 * ImageApi
 * @export
 * @class ImageApi
 * @extends {BaseAPI}
 */
export class ImageApi extends BaseAPI {
  /**
   * Get Text From Image with OCR
   * @param {ImageApiV1GetTextFromImageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImageApi
   */
  public v1GetTextFromImage(requestParameters: ImageApiV1GetTextFromImageRequest, options?: AxiosRequestConfig) {
    return ImageApiFp(this.configuration)
      .v1GetTextFromImage(requestParameters.getTextFromImageIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * PhoneApi - axios parameter creator
 * @export
 */
export const PhoneApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get phone validation details
     * @param {string} phone phone - phone number to validate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetPhoneDetails: async (phone: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'phone' is not null or undefined
      assertParamExists('v1GetPhoneDetails', 'phone', phone);
      const localVarPath = `/v1-get-phone-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (phone !== undefined) {
        localVarQueryParameter['phone'] = phone;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * PhoneApi - functional programming interface
 * @export
 */
export const PhoneApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PhoneApiAxiosParamCreator(configuration);
  return {
    /**
     * Get phone validation details
     * @param {string} phone phone - phone number to validate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetPhoneDetails(
      phone: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPhoneDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetPhoneDetails(phone, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * PhoneApi - factory interface
 * @export
 */
export const PhoneApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = PhoneApiFp(configuration);
  return {
    /**
     * Get phone validation details
     * @param {string} phone phone - phone number to validate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetPhoneDetails(phone: string, options?: any): AxiosPromise<GetPhoneDetailsOut> {
      return localVarFp.v1GetPhoneDetails(phone, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetPhoneDetails operation in PhoneApi.
 * @export
 * @interface PhoneApiV1GetPhoneDetailsRequest
 */
export interface PhoneApiV1GetPhoneDetailsRequest {
  /**
   * phone - phone number to validate
   * @type {string}
   * @memberof PhoneApiV1GetPhoneDetails
   */
  readonly phone: string;
}

/**
 * PhoneApi
 * @export
 * @class PhoneApi
 * @extends {BaseAPI}
 */
export class PhoneApi extends BaseAPI {
  /**
   * Get phone validation details
   * @param {PhoneApiV1GetPhoneDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PhoneApi
   */
  public v1GetPhoneDetails(requestParameters: PhoneApiV1GetPhoneDetailsRequest, options?: AxiosRequestConfig) {
    return PhoneApiFp(this.configuration)
      .v1GetPhoneDetails(requestParameters.phone, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * ShortUrlApi - axios parameter creator
 * @export
 */
export const ShortUrlApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Create a short URL from a long URL
     * @param {CreateShortUrlIn} createShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateShortUrl: async (
      createShortUrlIn: CreateShortUrlIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'createShortUrlIn' is not null or undefined
      assertParamExists('v1CreateShortUrl', 'createShortUrlIn', createShortUrlIn);
      const localVarPath = `/v1-create-short-url`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(createShortUrlIn, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a short URL from a long URL
     * @param {DeleteShortUrlIn} deleteShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteShortUrl: async (
      deleteShortUrlIn: DeleteShortUrlIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'deleteShortUrlIn' is not null or undefined
      assertParamExists('v1DeleteShortUrl', 'deleteShortUrlIn', deleteShortUrlIn);
      const localVarPath = `/v1-delete-short-url`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(deleteShortUrlIn, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a short URL from a long URL
     * @param {string} [sid] sid - short url sid
     * @param {string} [id] _id - short url id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetShortUrlDetails: async (sid?: string, id?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1-get-short-url-details`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      if (sid !== undefined) {
        localVarQueryParameter['sid'] = sid;
      }

      if (id !== undefined) {
        localVarQueryParameter['_id'] = id;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a short URL from a long URL
     * @param {UpdateShortUrlIn} updateShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1UpdateShortUrl: async (
      updateShortUrlIn: UpdateShortUrlIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'updateShortUrlIn' is not null or undefined
      assertParamExists('v1UpdateShortUrl', 'updateShortUrlIn', updateShortUrlIn);
      const localVarPath = `/v1-update-short-url`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(updateShortUrlIn, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ShortUrlApi - functional programming interface
 * @export
 */
export const ShortUrlApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ShortUrlApiAxiosParamCreator(configuration);
  return {
    /**
     * Create a short URL from a long URL
     * @param {CreateShortUrlIn} createShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateShortUrl(
      createShortUrlIn: CreateShortUrlIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateShortUrl(createShortUrlIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Create a short URL from a long URL
     * @param {DeleteShortUrlIn} deleteShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1DeleteShortUrl(
      deleteShortUrlIn: DeleteShortUrlIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1DeleteShortUrl(deleteShortUrlIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Create a short URL from a long URL
     * @param {string} [sid] sid - short url sid
     * @param {string} [id] _id - short url id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetShortUrlDetails(
      sid?: string,
      id?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetShortUrlDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetShortUrlDetails(sid, id, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Create a short URL from a long URL
     * @param {UpdateShortUrlIn} updateShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1UpdateShortUrl(
      updateShortUrlIn: UpdateShortUrlIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1UpdateShortUrl(updateShortUrlIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * ShortUrlApi - factory interface
 * @export
 */
export const ShortUrlApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = ShortUrlApiFp(configuration);
  return {
    /**
     * Create a short URL from a long URL
     * @param {CreateShortUrlIn} createShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateShortUrl(createShortUrlIn: CreateShortUrlIn, options?: any): AxiosPromise<CreateShortUrlOut> {
      return localVarFp.v1CreateShortUrl(createShortUrlIn, options).then((request) => request(axios, basePath));
    },
    /**
     * Create a short URL from a long URL
     * @param {DeleteShortUrlIn} deleteShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteShortUrl(deleteShortUrlIn: DeleteShortUrlIn, options?: any): AxiosPromise<DeleteShortUrlOut> {
      return localVarFp.v1DeleteShortUrl(deleteShortUrlIn, options).then((request) => request(axios, basePath));
    },
    /**
     * Create a short URL from a long URL
     * @param {string} [sid] sid - short url sid
     * @param {string} [id] _id - short url id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetShortUrlDetails(sid?: string, id?: string, options?: any): AxiosPromise<GetShortUrlDetailsOut> {
      return localVarFp.v1GetShortUrlDetails(sid, id, options).then((request) => request(axios, basePath));
    },
    /**
     * Create a short URL from a long URL
     * @param {UpdateShortUrlIn} updateShortUrlIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1UpdateShortUrl(updateShortUrlIn: UpdateShortUrlIn, options?: any): AxiosPromise<UpdateShortUrlOut> {
      return localVarFp.v1UpdateShortUrl(updateShortUrlIn, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateShortUrl operation in ShortUrlApi.
 * @export
 * @interface ShortUrlApiV1CreateShortUrlRequest
 */
export interface ShortUrlApiV1CreateShortUrlRequest {
  /**
   *
   * @type {CreateShortUrlIn}
   * @memberof ShortUrlApiV1CreateShortUrl
   */
  readonly createShortUrlIn: CreateShortUrlIn;
}

/**
 * Request parameters for v1DeleteShortUrl operation in ShortUrlApi.
 * @export
 * @interface ShortUrlApiV1DeleteShortUrlRequest
 */
export interface ShortUrlApiV1DeleteShortUrlRequest {
  /**
   *
   * @type {DeleteShortUrlIn}
   * @memberof ShortUrlApiV1DeleteShortUrl
   */
  readonly deleteShortUrlIn: DeleteShortUrlIn;
}

/**
 * Request parameters for v1GetShortUrlDetails operation in ShortUrlApi.
 * @export
 * @interface ShortUrlApiV1GetShortUrlDetailsRequest
 */
export interface ShortUrlApiV1GetShortUrlDetailsRequest {
  /**
   * sid - short url sid
   * @type {string}
   * @memberof ShortUrlApiV1GetShortUrlDetails
   */
  readonly sid?: string;

  /**
   * _id - short url id
   * @type {string}
   * @memberof ShortUrlApiV1GetShortUrlDetails
   */
  readonly id?: string;
}

/**
 * Request parameters for v1UpdateShortUrl operation in ShortUrlApi.
 * @export
 * @interface ShortUrlApiV1UpdateShortUrlRequest
 */
export interface ShortUrlApiV1UpdateShortUrlRequest {
  /**
   *
   * @type {UpdateShortUrlIn}
   * @memberof ShortUrlApiV1UpdateShortUrl
   */
  readonly updateShortUrlIn: UpdateShortUrlIn;
}

/**
 * ShortUrlApi
 * @export
 * @class ShortUrlApi
 * @extends {BaseAPI}
 */
export class ShortUrlApi extends BaseAPI {
  /**
   * Create a short URL from a long URL
   * @param {ShortUrlApiV1CreateShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ShortUrlApi
   */
  public v1CreateShortUrl(requestParameters: ShortUrlApiV1CreateShortUrlRequest, options?: AxiosRequestConfig) {
    return ShortUrlApiFp(this.configuration)
      .v1CreateShortUrl(requestParameters.createShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create a short URL from a long URL
   * @param {ShortUrlApiV1DeleteShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ShortUrlApi
   */
  public v1DeleteShortUrl(requestParameters: ShortUrlApiV1DeleteShortUrlRequest, options?: AxiosRequestConfig) {
    return ShortUrlApiFp(this.configuration)
      .v1DeleteShortUrl(requestParameters.deleteShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create a short URL from a long URL
   * @param {ShortUrlApiV1GetShortUrlDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ShortUrlApi
   */
  public v1GetShortUrlDetails(
    requestParameters: ShortUrlApiV1GetShortUrlDetailsRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ShortUrlApiFp(this.configuration)
      .v1GetShortUrlDetails(requestParameters.sid, requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create a short URL from a long URL
   * @param {ShortUrlApiV1UpdateShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ShortUrlApi
   */
  public v1UpdateShortUrl(requestParameters: ShortUrlApiV1UpdateShortUrlRequest, options?: AxiosRequestConfig) {
    return ShortUrlApiFp(this.configuration)
      .v1UpdateShortUrl(requestParameters.updateShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * UrlScraperApi - axios parameter creator
 * @export
 */
export const UrlScraperApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Capture a screenshot of a URL
     * @param {CaptureUrlScreenshotIn} captureUrlScreenshotIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CaptureUrlScreenshot: async (
      captureUrlScreenshotIn: CaptureUrlScreenshotIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'captureUrlScreenshotIn' is not null or undefined
      assertParamExists('v1CaptureUrlScreenshot', 'captureUrlScreenshotIn', captureUrlScreenshotIn);
      const localVarPath = `/v1-capture-url-screenshot`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(
        captureUrlScreenshotIn,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Scrape metadata, OpenGraph and Html from a URL
     * @param {ScrapeUrlDataIn} scrapeUrlDataIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ScrapeUrlData: async (
      scrapeUrlDataIn: ScrapeUrlDataIn,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'scrapeUrlDataIn' is not null or undefined
      assertParamExists('v1ScrapeUrlData', 'scrapeUrlDataIn', scrapeUrlDataIn);
      const localVarPath = `/v1-scrape-url-data`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(scrapeUrlDataIn, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UrlScraperApi - functional programming interface
 * @export
 */
export const UrlScraperApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UrlScraperApiAxiosParamCreator(configuration);
  return {
    /**
     * Capture a screenshot of a URL
     * @param {CaptureUrlScreenshotIn} captureUrlScreenshotIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CaptureUrlScreenshot(
      captureUrlScreenshotIn: CaptureUrlScreenshotIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CaptureUrlScreenshotOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CaptureUrlScreenshot(captureUrlScreenshotIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Scrape metadata, OpenGraph and Html from a URL
     * @param {ScrapeUrlDataIn} scrapeUrlDataIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ScrapeUrlData(
      scrapeUrlDataIn: ScrapeUrlDataIn,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScrapeUrlDataOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ScrapeUrlData(scrapeUrlDataIn, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * UrlScraperApi - factory interface
 * @export
 */
export const UrlScraperApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = UrlScraperApiFp(configuration);
  return {
    /**
     * Capture a screenshot of a URL
     * @param {CaptureUrlScreenshotIn} captureUrlScreenshotIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CaptureUrlScreenshot(
      captureUrlScreenshotIn: CaptureUrlScreenshotIn,
      options?: any,
    ): AxiosPromise<CaptureUrlScreenshotOut> {
      return localVarFp
        .v1CaptureUrlScreenshot(captureUrlScreenshotIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Scrape metadata, OpenGraph and Html from a URL
     * @param {ScrapeUrlDataIn} scrapeUrlDataIn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ScrapeUrlData(scrapeUrlDataIn: ScrapeUrlDataIn, options?: any): AxiosPromise<ScrapeUrlDataOut> {
      return localVarFp.v1ScrapeUrlData(scrapeUrlDataIn, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CaptureUrlScreenshot operation in UrlScraperApi.
 * @export
 * @interface UrlScraperApiV1CaptureUrlScreenshotRequest
 */
export interface UrlScraperApiV1CaptureUrlScreenshotRequest {
  /**
   *
   * @type {CaptureUrlScreenshotIn}
   * @memberof UrlScraperApiV1CaptureUrlScreenshot
   */
  readonly captureUrlScreenshotIn: CaptureUrlScreenshotIn;
}

/**
 * Request parameters for v1ScrapeUrlData operation in UrlScraperApi.
 * @export
 * @interface UrlScraperApiV1ScrapeUrlDataRequest
 */
export interface UrlScraperApiV1ScrapeUrlDataRequest {
  /**
   *
   * @type {ScrapeUrlDataIn}
   * @memberof UrlScraperApiV1ScrapeUrlData
   */
  readonly scrapeUrlDataIn: ScrapeUrlDataIn;
}

/**
 * UrlScraperApi
 * @export
 * @class UrlScraperApi
 * @extends {BaseAPI}
 */
export class UrlScraperApi extends BaseAPI {
  /**
   * Capture a screenshot of a URL
   * @param {UrlScraperApiV1CaptureUrlScreenshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrlScraperApi
   */
  public v1CaptureUrlScreenshot(
    requestParameters: UrlScraperApiV1CaptureUrlScreenshotRequest,
    options?: AxiosRequestConfig,
  ) {
    return UrlScraperApiFp(this.configuration)
      .v1CaptureUrlScreenshot(requestParameters.captureUrlScreenshotIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Scrape metadata, OpenGraph and Html from a URL
   * @param {UrlScraperApiV1ScrapeUrlDataRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrlScraperApi
   */
  public v1ScrapeUrlData(requestParameters: UrlScraperApiV1ScrapeUrlDataRequest, options?: AxiosRequestConfig) {
    return UrlScraperApiFp(this.configuration)
      .v1ScrapeUrlData(requestParameters.scrapeUrlDataIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * UtilsApi - axios parameter creator
 * @export
 */
export const UtilsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get current user details with api key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1WhoAmI: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1-who-am-i`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication APIKeyHeader required
      await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

      // authentication APIKeyQueryParam required
      await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UtilsApi - functional programming interface
 * @export
 */
export const UtilsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UtilsApiAxiosParamCreator(configuration);
  return {
    /**
     * Get current user details with api key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1WhoAmI(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhoAmIOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1WhoAmI(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * UtilsApi - factory interface
 * @export
 */
export const UtilsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = UtilsApiFp(configuration);
  return {
    /**
     * Get current user details with api key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1WhoAmI(options?: any): AxiosPromise<WhoAmIOut> {
      return localVarFp.v1WhoAmI(options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * UtilsApi
 * @export
 * @class UtilsApi
 * @extends {BaseAPI}
 */
export class UtilsApi extends BaseAPI {
  /**
   * Get current user details with api key
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UtilsApi
   */
  public v1WhoAmI(options?: AxiosRequestConfig) {
    return UtilsApiFp(this.configuration)
      .v1WhoAmI(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
