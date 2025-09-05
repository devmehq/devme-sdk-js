/**
 * DEV.ME API Documentation
 * **DEV.ME API Platform** - 19 powerful services across 7 categories  **Validation & Verification:** [Email Validation API](https://dev.me/products/email) • [Phone Validation API](https://dev.me/products/phone) • [IP Geolocation API](https://dev.me/products/ip) **Financial & Currency:** [Currency Exchange API](https://dev.me/products/currency) • [Currency List API](https://dev.me/products/currency-list) **Domain & Security:** [Domain WHOIS API](https://dev.me/products/domain-whois) • [DNS Lookup API](https://dev.me/products/dns-lookup) • [Domain Tools API](https://dev.me/products/domain-tools) **Content & Media:** [QR Code Generator API](https://dev.me/products/qr-code-generator) • [Image Placeholders API](https://dev.me/products/image-placeholder) • [Image Optimization API](https://dev.me/products/image-optimizer) **URL & Web:** [URL Shortening API](https://dev.me/products/short-url) • [Web Scraping API](https://dev.me/products/url-scrapper) • [URL Metadata API](https://dev.me/products/url-metadata) • [One-Time URL API](https://dev.me/products/onetime-url) **Global Data:** [Country Data API](https://dev.me/products/country) • [City Data API](https://dev.me/products/city) **Management:** [API Key Management](https://dev.me/dashboard) • [API Usage Analytics](https://dev.me/dashboard)  **Quick Start:** Use API key `demo-key` for testing • Visit [dev.me](https://dev.me) for complete documentation **Authentication:** Header `x-api-key: YOUR_API_KEY` or Query Parameter `?x-api-key=YOUR_API_KEY` **[Rate Limits](https://dev.me/pricing):** Free (500/mo) • Essential (15K/mo) • Standard (60K/mo) • Professional (1M/mo) • Enterprise (Unlimited) **Support:** support@dev.me • [Documentation](https://dev.me/documentation)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me

 */

import type { AxiosInstance, AxiosResponse } from 'axios';
import type { RequestArgs } from './base';
import { RequiredError } from './base';
import type { Configuration } from './configuration';

export const DUMMY_BASE_URL = 'https://example.com';

/**
 *
 * @throws {RequiredError}
 */
export const assertParamExists = (functionName: string, paramName: string, paramValue: unknown) => {
  if (paramValue === null || paramValue === undefined) {
    throw new RequiredError(
      paramName,
      `Required parameter ${paramName} was null or undefined when calling ${functionName}.`,
    );
  }
};

export const setApiKeyToObject = async (object: any, keyParamName: string, configuration?: Configuration) => {
  if (configuration?.apiKey) {
    object[keyParamName] =
      typeof configuration.apiKey === 'function'
        ? await configuration.apiKey(keyParamName)
        : await configuration.apiKey;
  }
};

export const setBasicAuthToObject = (object: any, configuration?: Configuration) => {
  if (configuration && (configuration.username || configuration.password)) {
    object.auth = { username: configuration.username, password: configuration.password };
  }
};

export const setBearerAuthToObject = async (object: any, configuration?: Configuration) => {
  if (configuration?.accessToken) {
    const accessToken =
      typeof configuration.accessToken === 'function'
        ? await configuration.accessToken()
        : await configuration.accessToken;
    object.Authorization = `Bearer ${accessToken}`;
  }
};

export const setOAuthToObject = async (object: any, name: string, scopes: string[], configuration?: Configuration) => {
  if (configuration?.accessToken) {
    const localVarAccessTokenValue =
      typeof configuration.accessToken === 'function'
        ? await configuration.accessToken(name, scopes)
        : await configuration.accessToken;
    object.Authorization = `Bearer ${localVarAccessTokenValue}`;
  }
};

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ''): void {
  if (parameter == null) {
    return;
  }
  if (typeof parameter === 'object') {
    if (Array.isArray(parameter)) {
      (parameter as any[]).forEach((item) => {
        setFlattenedQueryParams(urlSearchParams, item, key);
      });
    } else {
      Object.keys(parameter).forEach((currentKey) => {
        setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`);
      });
    }
  } else {
    if (urlSearchParams.has(key)) {
      urlSearchParams.append(key, parameter);
    } else {
      urlSearchParams.set(key, parameter);
    }
  }
}

export const setSearchParams = (url: URL, ...objects: any[]) => {
  const searchParams = new URLSearchParams(url.search);
  setFlattenedQueryParams(searchParams, objects);
  url.search = searchParams.toString();
};

export const serializeDataIfNeeded = (value: any, requestOptions: any, configuration?: Configuration) => {
  const nonString = typeof value !== 'string';
  const needsSerialization =
    nonString && configuration && configuration.isJsonMime
      ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
      : nonString;
  return needsSerialization ? JSON.stringify(value !== undefined ? value : {}) : value || '';
};

export const toPathString = (url: URL) => url.pathname + url.search + url.hash;

export const createRequestFunction =
  (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) =>
  <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
    const axiosRequestArgs = {
      ...axiosArgs.options,
      url: (axios.defaults.baseURL ? '' : (configuration?.basePath ?? basePath)) + axiosArgs.url,
    };
    return axios.request<T, R>(axiosRequestArgs);
  };
