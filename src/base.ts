/**
 * DEV.ME API Documentation
 * **DEV.ME API Platform** - 19 powerful services across 7 categories  **Validation & Verification:** [Email Validation API](https://dev.me/products/email) • [Phone Validation API](https://dev.me/products/phone) • [IP Geolocation API](https://dev.me/products/ip) **Financial & Currency:** [Currency Exchange API](https://dev.me/products/currency) • [Currency List API](https://dev.me/products/currency-list) **Domain & Security:** [Domain WHOIS API](https://dev.me/products/domain-whois) • [DNS Lookup API](https://dev.me/products/dns-lookup) • [Domain Tools API](https://dev.me/products/domain-tools) **Content & Media:** [QR Code Generator API](https://dev.me/products/qr-code-generator) • [Image Placeholders API](https://dev.me/products/image-placeholder) • [Image Optimization API](https://dev.me/products/image-optimizer) **URL & Web:** [URL Shortening API](https://dev.me/products/short-url) • [Web Scraping API](https://dev.me/products/url-scrapper) • [URL Metadata API](https://dev.me/products/url-metadata) • [One-Time URL API](https://dev.me/products/onetime-url) **Global Data:** [Country Data API](https://dev.me/products/country) • [City Data API](https://dev.me/products/city) **Management:** [API Key Management](https://dev.me/dashboard) • [API Usage Analytics](https://dev.me/dashboard)  **Quick Start:** Use API key `demo-key` for testing • Visit [dev.me](https://dev.me) for complete documentation **Authentication:** Header `x-api-key: YOUR_API_KEY` or Query Parameter `?x-api-key=YOUR_API_KEY` **[Rate Limits](https://dev.me/pricing):** Free (500/mo) • Essential (15K/mo) • Standard (60K/mo) • Professional (1M/mo) • Enterprise (Unlimited) **Support:** support@dev.me • [Documentation](https://dev.me/documentation)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me

 */

// Some imports not used depending on template conditions
import type { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from './configuration';

export const BASE_PATH = 'https://api.dev.me'.replace(/\/+$/, '');

export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};

export interface RequestArgs {
  url: string;
  options: RawAxiosRequestConfig;
}

export class BaseAPI {
  protected configuration: Configuration | undefined;

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios,
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath ?? basePath;
    }
  }
}

export class RequiredError extends Error {
  constructor(
    public field: string,
    msg?: string,
  ) {
    super(msg);
    this.name = 'RequiredError';
  }
}

interface ServerMap {
  [key: string]: {
    url: string;
    description: string;
  }[];
}

export const operationServerMap: ServerMap = {};
