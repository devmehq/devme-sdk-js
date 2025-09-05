/**
 * DEV.ME API Documentation
 * **DEV.ME API Platform** - 19 powerful services across 7 categories  **Validation & Verification:** [Email Validation API](https://dev.me/products/email) • [Phone Validation API](https://dev.me/products/phone) • [IP Geolocation API](https://dev.me/products/ip) **Financial & Currency:** [Currency Exchange API](https://dev.me/products/currency) • [Currency List API](https://dev.me/products/currency-list) **Domain & Security:** [Domain WHOIS API](https://dev.me/products/domain-whois) • [DNS Lookup API](https://dev.me/products/dns-lookup) • [Domain Tools API](https://dev.me/products/domain-tools) **Content & Media:** [QR Code Generator API](https://dev.me/products/qr-code-generator) • [Image Placeholders API](https://dev.me/products/image-placeholder) • [Image Optimization API](https://dev.me/products/image-optimizer) **URL & Web:** [URL Shortening API](https://dev.me/products/short-url) • [Web Scraping API](https://dev.me/products/url-scrapper) • [URL Metadata API](https://dev.me/products/url-metadata) • [One-Time URL API](https://dev.me/products/onetime-url) **Global Data:** [Country Data API](https://dev.me/products/country) • [City Data API](https://dev.me/products/city) **Management:** [API Key Management](https://dev.me/dashboard) • [API Usage Analytics](https://dev.me/dashboard)  **Quick Start:** Use API key `demo-key` for testing • Visit [dev.me](https://dev.me) for complete documentation **Authentication:** Header `x-api-key: YOUR_API_KEY` or Query Parameter `?x-api-key=YOUR_API_KEY` **[Rate Limits](https://dev.me/pricing):** Free (500/mo) • Essential (15K/mo) • Standard (60K/mo) • Professional (1M/mo) • Enterprise (Unlimited) **Support:** support@dev.me • [Documentation](https://dev.me/documentation)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me

 */

export interface ConfigurationParameters {
  apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
  username?: string;
  password?: string;
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  basePath?: string;
  serverIndex?: number;
  baseOptions?: any;
  formDataCtor?: new () => any;
}

export class Configuration {
  /**
   * parameter for apiKey security
   * @param name security name
   */
  apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
  /**
   * parameter for basic security
   */
  username?: string;
  /**
   * parameter for basic security
   */
  password?: string;
  /**
   * parameter for oauth2 security
   * @param name security name
   * @param scopes oauth2 scope
   */
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  /**
   * override base path
   */
  basePath?: string;
  /**
   * override server index
   */
  serverIndex?: number;
  /**
   * base options for axios calls
   */
  baseOptions?: any;
  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  formDataCtor?: new () => any;

  constructor(param: ConfigurationParameters = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.serverIndex = param.serverIndex;
    this.baseOptions = {
      ...param.baseOptions,
      headers: {
        ...param.baseOptions?.headers,
      },
    };
    this.formDataCtor = param.formDataCtor;
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}
