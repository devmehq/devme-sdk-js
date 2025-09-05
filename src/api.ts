/**
 * DEV.ME API Documentation
 * **DEV.ME API Platform** - 19 powerful services across 7 categories  **Validation & Verification:** [Email Validation API](https://dev.me/products/email) • [Phone Validation API](https://dev.me/products/phone) • [IP Geolocation API](https://dev.me/products/ip) **Financial & Currency:** [Currency Exchange API](https://dev.me/products/currency) • [Currency List API](https://dev.me/products/currency-list) **Domain & Security:** [Domain WHOIS API](https://dev.me/products/domain-whois) • [DNS Lookup API](https://dev.me/products/dns-lookup) • [Domain Tools API](https://dev.me/products/domain-tools) **Content & Media:** [QR Code Generator API](https://dev.me/products/qr-code-generator) • [Image Placeholders API](https://dev.me/products/image-placeholder) • [Image Optimization API](https://dev.me/products/image-optimizer) **URL & Web:** [URL Shortening API](https://dev.me/products/short-url) • [Web Scraping API](https://dev.me/products/url-scrapper) • [URL Metadata API](https://dev.me/products/url-metadata) • [One-Time URL API](https://dev.me/products/onetime-url) **Global Data:** [Country Data API](https://dev.me/products/country) • [City Data API](https://dev.me/products/city) **Management:** [API Key Management](https://dev.me/dashboard) • [API Usage Analytics](https://dev.me/dashboard)  **Quick Start:** Use API key `demo-key` for testing • Visit [dev.me](https://dev.me) for complete documentation **Authentication:** Header `x-api-key: YOUR_API_KEY` or Query Parameter `?x-api-key=YOUR_API_KEY` **[Rate Limits](https://dev.me/pricing):** Free (500/mo) • Essential (15K/mo) • Standard (60K/mo) • Professional (1M/mo) • Enterprise (Unlimited) **Support:** support@dev.me • [Documentation](https://dev.me/documentation)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@dev.me

 */

import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { RequestArgs } from './base';
import { BASE_PATH, BaseAPI, operationServerMap } from './base';
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
import type { Configuration } from './configuration';

/**
 *
 */
export interface ApiUsageItem {
  /**
   * Date of usage
   */
  date?: string;
  /**
   * Service name
   */
  service?: string;
  /**
   * Number of requests
   */
  count?: number;
  /**
   * User ID
   */
  userId?: string;
}

/**
 *
 */
export interface BulkShortUrlItem {
  /**
   * Original URL to shorten
   */
  url?: string;
  /**
   * Domain to use for short URL
   */
  domain?: string;
  /**
   * Custom suffix for the short URL (optional)
   */
  suffix?: string;
}

/**
 *
 */
export interface BulkShortUrlResult {
  /**
   * Whether the URL was created successfully
   */
  success?: boolean;
  /**
   * Original URL
   */
  url?: string;
  /**
   * Generated short URL (if successful)
   */
  shortUrl?: string;
  /**
   * Domain used
   */
  domain?: string;
  /**
   * Short ID (if successful)
   */
  sid?: string;
  /**
   * Error message (if failed)
   */
  error?: string;
}

/**
 *
 */
export interface CapitalInfo {
  /**
   * Latitude and longitude of capital
   */
  latlng?: Array<number>;
}

/**
 *
 */
export interface CarInfo {
  /**
   * Car signs
   */
  signs?: Array<string>;
  /**
   * Driving side (left/right)
   */
  side?: string;
}

/**
 * Currency conversion response
 */
export interface ConvertCurrencyOut {
  /**
   * Source currency code
   */
  from: string;
  /**
   * Target currency code
   */
  to: string;
  /**
   * Exchange rate used
   */
  exchangeRate: number;
  /**
   * Timestamp of the rate
   */
  rateTime: string;
  /**
   * Original amount
   */
  originalAmount: number;
  /**
   * Converted amount
   */
  convertedAmount: number;
  /**
   * Human-readable conversion text
   */
  convertedText: string;
  /**
   * Data provider used (if available)
   */
  provider?: string;
  /**
   * Whether the rate was cached
   */
  cached?: boolean;
  /**
   * Performance metrics (only when getPerformanceData=1)
   */
  performance?: object;
}

/**
 *
 */
export interface CountryName {
  /**
   * Common country name
   */
  common?: string;
  /**
   * Official country name
   */
  official?: string;
  /**
   * Native names by language code
   */
  nativeName?: object;
}

/**
 *
 */
export interface CreateApiKeyIn {
  /**
   * Name/description for the API key
   */
  name?: string;
  /**
   * List of services this key can access
   */
  services?: Array<string>;
  /**
   * Whether to enable the API key immediately
   */
  isEnabled?: boolean;
}

/**
 *
 */
export interface CreateBulkShortUrlsRequest {
  /**
   * Array of URLs to shorten (max 100)
   */
  items?: Array<BulkShortUrlItem>;
  /**
   * Custom batch ID for this bulk operation (optional)
   */
  batchId?: string;
}

/**
 *
 */
export interface CreateBulkShortUrlsResponse {
  /**
   * Number of successfully created short URLs
   */
  created?: number;
  /**
   * Number of failed creations
   */
  failed?: number;
  /**
   * Unique identifier for this bulk operation
   */
  batchId?: string;
  /**
   * Detailed results for each item
   */
  results?: Array<BulkShortUrlResult>;
}

/**
 *
 */
export interface CreateOnetimeUrlIn {
  /**
   * The secret text/content to share
   */
  text: string;
  /**
   * Optional password protection (leave empty for no password)
   */
  passphrase?: string;
  /**
   * Domain to use for the URL
   */
  domain?: string;
  /**
   * Custom suffix for the URL
   */
  suffix?: string;
  /**
   * Lifetime in seconds (default: 7 days)
   */
  lifetime?: number;
  /**
   * Maximum number of times the URL can be viewed (default: 1)
   */
  maxViews?: number;
}

/**
 *
 */
export interface CreateOnetimeUrlOut {
  /**
   * The complete one-time URL
   */
  onetimeUrl: string;
  /**
   * Domain used for the URL
   */
  domain: string;
  /**
   * Short ID of the one-time URL
   */
  sid: string;
  /**
   * ISO timestamp of creation
   */
  createdAt: string;
}

/**
 *
 */
export interface CreateQrCodeIn {
  /**
   * Data to encode in QR code
   */
  data?: string;
  /**
   * QR code type
   */
  type?: string;
  /**
   * Mixed JSON object with all QR code settings
   */
  settings?: object;
}

/**
 *
 */
export interface CreateQrCodeOut {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID for the QR code
   */
  sid?: string;
  /**
   * Encoded data in the QR code
   */
  data?: string;
  /**
   * Type of QR code
   */
  type?: string;
  /**
   * Base64 encoded QR code image
   */
  qrCodeImage?: string;
  settings?: QrCodeGenerationSettings;
  /**
   * ISO timestamp when QR code expires
   */
  expiresAt?: string;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
}

/**
 *
 */
export interface CreateQrCodeSettings {
  /**
   * Mixed JSON object with all QR code settings from frontend
   */
  settings?: object;
}

/**
 *
 */
export interface CreateShortUrlIn {
  /**
   * URL to shorten
   */
  url: string;
  /**
   * Domain to use for short URL
   */
  domain?: string;
  /**
   * Custom suffix for the short URL
   */
  suffix?: string;
}

/**
 *
 */
export interface CreateShortUrlOut {
  /**
   * The original URL
   */
  url: string;
  /**
   * The complete shortened URL
   */
  shortUrl: string;
  /**
   * Domain used for the short URL
   */
  domain: string;
  /**
   * Short ID of the URL
   */
  sid: string;
  /**
   * ISO timestamp of creation
   */
  createdAt: string;
}

/**
 *
 */
export interface CurrencyDenominations {
  /**
   * Frequently used denominations
   */
  frequent?: Array<string>;
  /**
   * Rarely used denominations
   */
  rare?: Array<string>;
}

/**
 *
 */
export interface CurrencyISO {
  /**
   * ISO currency code
   */
  code?: string;
  /**
   * ISO numeric code
   */
  number?: string;
}

/**
 *
 */
export interface CurrencyMajorUnit {
  /**
   * Major unit name
   */
  name?: string;
  /**
   * Major unit symbol
   */
  symbol?: string;
}

/**
 *
 */
export interface CurrencyMinorUnit {
  /**
   * Minor unit name
   */
  name?: string;
  /**
   * Minor unit symbol
   */
  symbol?: string;
  /**
   * Value relative to major unit
   */
  majorValue?: number;
}

/**
 *
 */
export interface CurrencyUnits {
  major?: CurrencyMajorUnit;
  minor?: CurrencyMinorUnit;
}

/**
 *
 */
export interface DeleteApiKeyIn {
  /**
   * Database ID of the API key to delete
   */
  _id?: string;
}

/**
 *
 */
export interface DeleteApiKeyOut {
  /**
   * Whether the deletion was successful
   */
  success?: boolean;
}

/**
 *
 */
export interface DeleteOnetimeUrlIn {
  /**
   * Short ID of the one-time URL
   */
  sid: string;
  /**
   * Domain of the URL
   */
  domain?: string;
  /**
   * Passphrase if set during creation
   */
  passphrase?: string;
}

/**
 *
 */
export interface DeleteOnetimeUrlOut {
  /**
   * Whether deletion was successful
   */
  success: boolean;
}

/**
 *
 */
export interface DeleteQrCodeIn {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID of the QR code (alternative to _id)
   */
  sid?: string;
  /**
   * Also delete related logs and short URLs (default: true)
   */
  deleteRelated?: boolean;
}

/**
 *
 */
export interface DeleteQrCodeOut {
  /**
   * Whether deletion was successful
   */
  success?: boolean;
  deletedCount?: DeletedCountInfo;
}

/**
 *
 */
export interface DeleteShortUrlIn {
  /**
   * Short ID of the URL
   */
  sid: string;
  /**
   * Domain of the short URL
   */
  domain?: string;
}

/**
 *
 */
export interface DeleteShortUrlOut {
  /**
   * Whether deletion was successful
   */
  success: boolean;
}

/**
 *
 */
export interface DeletedCountInfo {
  /**
   * Number of QR codes deleted
   */
  qrCode?: number;
  /**
   * Number of logs deleted
   */
  logs?: number;
}

/**
 *
 */
export interface DetectedName {
  /**
   * First name detected from email
   */
  firstName?: string;
  /**
   * Last name detected from email
   */
  lastName?: string;
  /**
   * Confidence score for name detection (0-1)
   */
  confidence?: number;
}

/**
 *
 */
export interface DomainAgeInfo {
  /**
   * Age of the domain in days
   */
  ageInDays?: number;
  /**
   * Domain creation date
   */
  createdDate?: string;
  /**
   * Whether the age information is valid
   */
  isValid?: boolean;
}

/**
 *
 */
export interface DomainRegistrationInfo {
  /**
   * Domain creation date
   */
  created?: string;
  /**
   * Domain last update date
   */
  updated?: string;
  /**
   * Domain expiration date
   */
  expires?: string;
  /**
   * Domain registrar name
   */
  registrar?: string;
  /**
   * Registrant organization
   */
  registrantOrganization?: string;
  /**
   * Registrant country
   */
  registrantCountry?: string;
  /**
   * Domain status
   */
  status?: string;
}

/**
 *
 */
export interface DomainSuggestion {
  /**
   * Original domain with typo
   */
  original?: string;
  /**
   * Suggested corrected domain
   */
  suggested?: string;
  /**
   * Confidence score for suggestion (0-1)
   */
  confidence?: number;
}

/**
 *
 */
export interface DownloadApiUsageOut {
  /**
   * Download URL for the exported file
   */
  url?: string;
  /**
   * Suggested filename for the download
   */
  filename?: string;
  /**
   * MIME type of the file
   */
  contentType?: string;
}

/**
 * error value
 */
export interface ErrorValue {}

/**
 *
 */
export interface GetApiKeyDetailsIn {
  /**
   * Database ID of the API key
   */
  _id?: string;
}

/**
 *
 */
export interface GetApiKeyDetailsOut {
  /**
   * Database document ID
   */
  _id?: string;
  /**
   * Name/description of the API key
   */
  name?: string;
  /**
   * The actual API key value
   */
  apiKey?: string;
  /**
   * List of services this key can access
   */
  services?: Array<string>;
  /**
   * Whether the API key is active
   */
  isEnabled?: boolean;
  /**
   * User ID who owns this API key
   */
  userId?: string;
  /**
   * Additional metadata
   */
  meta?: object;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
  /**
   * ISO timestamp of last update
   */
  updatedAt?: string;
}

/**
 *
 */
export interface GetApiUsageOut {
  /**
   * Array of daily usage records
   */
  usage?: Array<ApiUsageItem>;
  /**
   * Total number of requests in the period
   */
  totalRequests?: number;
}

/**
 *
 */
export interface GetCityDetailsOut {
  /**
   * City ID
   */
  id?: number;
  /**
   * City name
   */
  name?: string;
  /**
   * Country code
   */
  countryCode?: string;
  /**
   * Country name
   */
  countryName?: string;
  /**
   * State/Province code
   */
  stateCode?: string;
  /**
   * State/Province name
   */
  stateName?: string;
  /**
   * Latitude coordinate
   */
  latitude?: number;
  /**
   * Longitude coordinate
   */
  longitude?: number;
}

/**
 *
 */
export interface GetCountryDetailsOut {
  /**
   * Country code (ISO 3166-1 alpha-2)
   */
  code?: string;
  /**
   * ISO 3166-1 alpha-2 code
   */
  cca2?: string;
  /**
   * ISO 3166-1 alpha-3 code
   */
  cca3?: string;
  /**
   * ISO 3166-1 numeric code
   */
  ccn3?: string;
  /**
   * International Olympic Committee code
   */
  cioc?: string;
  /**
   * FIFA code
   */
  fifa?: string;
  name?: CountryName;
  /**
   * Capital city/cities
   */
  capital?: Array<string>;
  capitalInfo?: CapitalInfo;
  /**
   * Alternative country name spellings
   */
  altSpellings?: Array<string>;
  /**
   * Geographic region
   */
  region?: string;
  /**
   * Geographic subregion
   */
  subregion?: string;
  /**
   * Continents the country belongs to
   */
  continents?: Array<string>;
  /**
   * Official languages (key-value pairs)
   */
  languages?: object;
  /**
   * Currency information (key-value pairs)
   */
  currencies?: object;
  /**
   * Flag emoji
   */
  flag?: string;
  flags?: ImageLinks;
  coatOfArms?: ImageLinks;
  /**
   * Total area in km²
   */
  area?: number;
  /**
   * Population count
   */
  population?: number;
  /**
   * Latitude and longitude coordinates
   */
  latlng?: Array<number>;
  /**
   * Whether the country is landlocked
   */
  landlocked?: boolean;
  /**
   * Border country codes
   */
  borders?: Array<string>;
  /**
   * Timezones
   */
  timezones?: Array<string>;
  /**
   * Top-level domains
   */
  tld?: Array<string>;
  /**
   * Independence status
   */
  independent?: boolean;
  /**
   * UN membership status
   */
  unMember?: boolean;
  /**
   * Country status
   */
  status?: string;
  /**
   * First day of the week
   */
  startOfWeek?: string;
  car?: CarInfo;
  idd?: IddInfo;
  postalCode?: PostalCodeInfo;
  /**
   * Demonym information by language
   */
  demonyms?: object;
  /**
   * Gini coefficient by year
   */
  gini?: object;
  maps?: MapsInfo;
  /**
   * Country name translations
   */
  translations?: object;
}

/**
 *
 */
export interface GetCurrencyDetailsOut {
  /**
   * Currency code (ISO 4217)
   */
  code?: string;
  /**
   * Currency name
   */
  name?: string;
  /**
   * Native currency name
   */
  nameNative?: string;
  /**
   * Plural form of currency name
   */
  namePlural?: string;
  /**
   * Native plural form of currency name
   */
  namePluralNative?: string;
  /**
   * Currency symbol code
   */
  symbol?: string;
  /**
   * Native currency symbol (e.g., $, €)
   */
  symbolNative?: string;
  /**
   * Number of decimal places
   */
  decimalDigits?: number;
  /**
   * Rounding precision
   */
  rounding?: number;
  /**
   * Flag code for primary country
   */
  flagCode?: string;
  iso?: CurrencyISO;
  units?: CurrencyUnits;
  banknotes?: CurrencyDenominations;
  coins?: CurrencyDenominations;
  /**
   * Country codes using this currency
   */
  countries?: Array<string>;
}

/**
 *
 */
export interface GetCurrencyExchangeRateOut {
  /**
   * Source currency code
   */
  from?: string;
  /**
   * Target currency code
   */
  to?: string;
  /**
   * Exchange rate from source to target currency
   */
  exchangeRate?: number;
  /**
   * Timestamp of the exchange rate (ISO 8601 format)
   */
  rateTime?: string;
  /**
   * Data provider used for this rate
   */
  provider?: string;
  /**
   * Whether the rate was served from cache
   */
  cached?: boolean;
  /**
   * Inverse exchange rate (to -> from)
   */
  inverseRate?: number;
  /**
   * Rate disclaimer or terms of use
   */
  disclaimer?: string;
}

/**
 *
 */
export interface GetDomainWhoisOut {
  /**
   *
   */
  domain?: string;
  /**
   *
   */
  whoisText?: string;
  /**
   *
   */
  whoisJson?: object;
}

/**
 *
 */
export interface GetEmailDetailsOut {
  /**
   * The email address that was validated
   */
  email?: string;
  /**
   * Whether MX records exist for the domain
   */
  validMx?: boolean;
  /**
   * Whether SMTP connection was successful
   */
  validSmtp?: boolean;
  /**
   * Whether email format is valid
   */
  validFormat?: boolean;
  /**
   * Whether email is from a disposable domain
   */
  isDisposable?: boolean;
  /**
   * Whether email is from a free email provider
   */
  isFree?: boolean;
  detectedName?: DetectedName;
  domainSuggestion?: DomainSuggestion;
  domainAge?: DomainAgeInfo;
  domainRegistration?: DomainRegistrationInfo;
  /**
   * Overall email quality score (0-100)
   */
  score?: number;
  /**
   * Performance metrics (only when getPerformanceData=true)
   */
  performance?: object;
}

/**
 * City geolocation information
 */
export interface GetIpDetailsCityOut {
  /**
   * Accuracy radius in kilometers
   */
  accuracyRadius: number;
  /**
   * Geographic latitude
   */
  latitude: number;
  /**
   * Geographic longitude
   */
  longitude: number;
  /**
   * IANA time zone
   */
  timeZone?: string;
  /**
   * City name
   */
  name?: string;
  /**
   * Region or state name
   */
  region?: string;
  /**
   * Area code if available
   */
  areaCode?: string;
}

/**
 * IP geolocation response
 */
export interface GetIpDetailsOut {
  /**
   * The IP address that was looked up
   */
  ip: string;
  /**
   * PTR record (reverse DNS) if available
   */
  ptr?: string;
  /**
   * ISO 3166-1 alpha-2 country code
   */
  countryCode?: string;
  /**
   * ISO 3166-1 alpha-3 country code
   */
  countryCode3?: string;
  /**
   * Full country name
   */
  countryName?: string;
  /**
   * Continent code
   */
  continentCode?: string;
  /**
   * Country code where IP is registered
   */
  registeredCountryCode?: string;
  /**
   * Autonomous System Number
   */
  asn?: number;
  /**
   * Autonomous System Organization name
   */
  aso?: string;
  /**
   * Organization name
   */
  organization?: string;
  city?: GetIpDetailsCityOut;
  /**
   * Performance metrics (only when getPerformanceData=1)
   */
  performance?: object;
}

/**
 *
 */
export interface GetOnetimeUrlDetailsOut {
  /**
   * Whether a passphrase is required to access the content
   */
  requirePassphrase?: boolean;
  /**
   * Complete one-time URL
   */
  onetimeUrl?: string;
  /**
   * Short ID identifier for the one-time URL
   */
  sid?: string;
  /**
   * Domain used for the one-time URL
   */
  domain?: string;
  /**
   * The secret text content (only shown once)
   */
  text?: string;
  /**
   * Number of times the URL has been viewed
   */
  viewCount?: number;
  /**
   * Maximum number of views allowed
   */
  maxViews?: number;
  /**
   * ISO timestamp when the URL expires
   */
  expireAt?: string;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
}

/**
 *
 */
export interface GetPhoneDetailsOut {
  /**
   * Whether the phone number is valid
   */
  valid?: boolean;
  /**
   * Normalized phone number with country code
   */
  number?: string;
  /**
   * Phone number in local format
   */
  localFormat?: string;
  /**
   * Phone number in international format
   */
  internationalFormat?: string;
  /**
   * Country calling code
   */
  countryPrefix?: string;
  /**
   * ISO country code
   */
  countryCode?: string;
  /**
   * Country name
   */
  countryName?: string;
  /**
   * Geographic location or region
   */
  location?: string;
  /**
   * Phone carrier/operator name
   */
  carrier?: string;
  /**
   * Array of all possible carriers when multiple matches exist
   */
  matchedCarriers?: Array<string>;
  /**
   * Type of phone line (mobile, landline, voip)
   */
  lineType?: string;
}

/**
 *
 */
export interface GetQrCodeAnalyticsOut {
  /**
   * Database ID of the QR code
   */
  qrCodeId?: string;
  /**
   * Short ID of the QR code
   */
  sid?: string;
  /**
   * QR code data
   */
  data?: string;
  /**
   * QR code type
   */
  type?: string;
  /**
   * Total number of scans
   */
  totalScans?: number;
  /**
   * Number of unique scans
   */
  uniqueScans?: number;
  /**
   * Last scan timestamp
   */
  lastScannedAt?: string;
  /**
   * Breakdown by device type
   */
  deviceTypes?: object;
  /**
   * Breakdown by country
   */
  countries?: object;
  /**
   * Breakdown by browser
   */
  browsers?: object;
  /**
   * Timeline of scans
   */
  scanTimeline?: Array<object>;
  /**
   * Analytics period
   */
  period?: object;
}

/**
 *
 */
export interface GetQrCodeDetailsOut {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID for the QR code
   */
  sid?: string;
  /**
   * Encoded data in the QR code
   */
  data?: string;
  /**
   * Type of QR code
   */
  type?: string;
  /**
   * Base64 QR code image or URL
   */
  imageUrl?: string;
  settings?: QrCodeGenerationSettings;
  /**
   * Whether QR code is active
   */
  isActive?: boolean;
  /**
   * Expiration timestamp
   */
  expiresAt?: string;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
  /**
   * ISO timestamp of last update
   */
  updatedAt?: string;
}

/**
 *
 */
export interface GetShortUrlAnalyticsOut {
  /**
   * Short URL details
   */
  shortUrl: object;
  /**
   * Array of view/click records
   */
  views: Array<object>;
  /**
   * Domain of the short URL
   */
  domain: string;
  /**
   * Database ID
   */
  _id?: string;
  /**
   * Short ID
   */
  sid?: string;
}

/**
 *
 */
export interface GetShortUrlDetailsOut {
  /**
   * Database document ID
   */
  _id?: string;
  /**
   * Original long URL
   */
  url?: string;
  /**
   * Complete shortened URL
   */
  shortUrl?: string;
  /**
   * Short ID identifier
   */
  sid?: string;
  /**
   * Domain used for shortening
   */
  domain?: string;
  /**
   * Number of times the short URL was accessed
   */
  clicks?: number;
  meta?: ShortUrlMeta;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
  /**
   * ISO timestamp of last update
   */
  updatedAt?: string;
}

/**
 *
 */
export interface HttpErrorOut {
  /**
   * http status code
   */
  status?: number;
  /**
   * error name
   */
  name?: string;
  /**
   * error message
   */
  message?: string;
  /**
   * array of errors
   */
  errors?: Array<Error>;
}

/**
 *
 */
export interface IApiKeyModelJSON {
  /**
   *
   */
  _id?: string;
  /**
   *
   */
  userId?: string;
  /**
   *
   */
  apiKey?: string;
  /**
   *
   */
  name?: string;
  /**
   *
   */
  environment?: string;
  /**
   *
   */
  services?: Array<string>;
  /**
   *
   */
  isEnabled?: boolean;
  /**
   *
   */
  note?: string;
  /**
   *
   */
  meta?: object;
  /**
   *
   */
  createdAt?: string;
  /**
   *
   */
  updatedAt?: string;
}

/**
 *
 */
export interface IddInfo {
  /**
   * Root dialing code
   */
  root?: string;
  /**
   * Dialing code suffixes
   */
  suffixes?: Array<string>;
}

/**
 *
 */
export interface ImageLinks {
  /**
   * SVG image URL
   */
  svg?: string;
  /**
   * PNG image URL
   */
  png?: string;
  /**
   * Alternative text
   */
  alt?: string;
}

/**
 *
 */
export interface ListApiKeysIn {
  /**
   * Optional Database ID to filter specific API key
   */
  _id?: string;
}

/**
 *
 */
export interface ListApiKeysOut {
  /**
   * Array of API key objects
   */
  list?: Array<GetApiKeyDetailsOut>;
}

/**
 *
 */
export interface ListCitiesOut {
  /**
   * Array of city objects
   */
  list?: Array<GetCityDetailsOut>;
  /**
   * page number
   */
  page?: number;
  /**
   * total number of cities
   */
  total?: number;
  /**
   * page size
   */
  size?: number;
  /**
   * total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface ListCountriesOut {
  /**
   * Array of country objects (fields based on expand/exclude parameters)
   */
  list?: Array<GetCountryDetailsOut>;
  /**
   * page number
   */
  page?: number;
  /**
   * total number of countries
   */
  total?: number;
  /**
   * page size
   */
  size?: number;
  /**
   * total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface ListCurrenciesOut {
  /**
   * Array of currency objects (fields based on expand/exclude parameters)
   */
  list?: Array<GetCurrencyDetailsOut>;
  /**
   * Total number of currencies matching filters
   */
  total?: number;
  /**
   * Current page number
   */
  page?: number;
  /**
   * Number of items per page
   */
  pageSize?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface ListOnetimeUrlsOut {
  /**
   * Array of one-time URL objects
   */
  list?: Array<GetOnetimeUrlDetailsOut>;
  /**
   * Current page number
   */
  page?: number;
  /**
   * Number of items per page
   */
  pageSize?: number;
  /**
   * Total number of URLs
   */
  total?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface ListQrCodesOut {
  /**
   * Array of QR codes
   */
  list?: Array<QrCodeListItem>;
  pagination?: PaginationInfo;
}

/**
 *
 */
export interface ListShortUrlsOut {
  /**
   * Array of short URL objects
   */
  list?: Array<GetShortUrlDetailsOut>;
  /**
   * Current page number
   */
  page?: number;
  /**
   * Number of items per page
   */
  pageSize?: number;
  /**
   * Total number of URLs
   */
  total?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface LookupDomainDnsOut {
  /**
   *
   */
  address?: string;
  /**
   *
   */
  type?: string;
  /**
   *
   */
  records?: Array<object>;
  /**
   *
   */
  success?: boolean;
  /**
   *
   */
  error?: object;
  /**
   * Performance metrics (only when getPerformanceData=true)
   */
  performance?: object;
}

/**
 *
 */
export interface MapsInfo {
  /**
   * Google Maps URL
   */
  googleMaps?: string;
  /**
   * OpenStreetMap URL
   */
  openStreetMaps?: string;
}

/**
 *
 */
export interface ModelError {
  value?: ErrorValue;
  /**
   * error message
   */
  msg?: string;
  /**
   * error parameters
   */
  param?: string;
  /**
   * location of the error
   */
  location?: string;
}

/**
 *
 */
export interface PaginationInfo {
  /**
   * Current page number
   */
  page?: number;
  /**
   * Items per page
   */
  pageSize?: number;
  /**
   * Total number of items
   */
  total?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
}

/**
 *
 */
export interface PerformanceMetrics {
  /**
   * Total processing time in milliseconds
   */
  totalTime?: number;
  /**
   * Time to fetch the URL in milliseconds
   */
  fetchTime?: number;
  /**
   * Time to extract metadata in milliseconds
   */
  metadataTime?: number;
  /**
   * Time to extract Open Graph data in milliseconds
   */
  openGraphTime?: number;
  /**
   * Whether a retry was attempted due to bot detection
   */
  retryAttempted?: boolean;
  /**
   * Time taken for retry attempt in milliseconds
   */
  retryTime?: number;
  /**
   * User agent used for the request
   */
  userAgent?: string;
  /**
   * Whether mobile fallback was used
   */
  mobileUserAgentUsed?: boolean;
}

/**
 *
 */
export interface PostalCodeInfo {
  /**
   * Postal code format
   */
  format?: string;
  /**
   * Postal code validation regex
   */
  regex?: string;
}

/**
 *
 */
export interface PreviewQrCodeIn {
  /**
   * Data to encode in QR code
   */
  data?: string;
  /**
   * QR code type
   */
  type?: PreviewQrCodeInTypeEnum;
  /**
   * Output format (always returns base64)
   */
  format?: PreviewQrCodeInFormatEnum;
  /**
   * Mixed JSON object with all QR code settings
   */
  settings?: object;
}

export const PreviewQrCodeInTypeEnum = {
  Url: 'url',
  Text: 'text',
  Email: 'email',
  Phone: 'phone',
  Sms: 'sms',
  Wifi: 'wifi',
  Vcard: 'vcard',
} as const;

export type PreviewQrCodeInTypeEnum = (typeof PreviewQrCodeInTypeEnum)[keyof typeof PreviewQrCodeInTypeEnum];
export const PreviewQrCodeInFormatEnum = {
  Base64: 'base64',
} as const;

export type PreviewQrCodeInFormatEnum = (typeof PreviewQrCodeInFormatEnum)[keyof typeof PreviewQrCodeInFormatEnum];

/**
 *
 */
export interface PreviewQrCodeOut {
  /**
   * Output format
   */
  format?: string;
  /**
   * Data encoded in QR code
   */
  data?: string;
  /**
   * QR code type
   */
  type?: string;
  /**
   * QR code content (base64, SVG, or PNG binary)
   */
  qrCode?: string;
  /**
   * Settings used for generation
   */
  settings?: object;
  /**
   * Legacy field for backward compatibility
   */
  imgString?: string;
}

/**
 *
 */
export interface QrCodeAnalytics {
  /**
   * Total number of scans
   */
  scans?: number;
  /**
   * Number of unique scans
   */
  uniqueScans?: number;
  /**
   * Last scan timestamp
   */
  lastScannedAt?: string;
}

/**
 *
 */
export interface QrCodeBase {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID of the QR code
   */
  sid?: string;
  /**
   * Encoded data in the QR code
   */
  data?: string;
  /**
   * Type of QR code
   */
  type?: QrCodeBaseTypeEnum;
  /**
   * Base64 QR code image or URL
   */
  imageUrl?: string;
  analytics?: QrCodeAnalytics;
  settings?: QrCodeGenerationSettings;
  /**
   * Whether QR code is active
   */
  isActive?: boolean;
  /**
   * Expiration timestamp
   */
  expiresAt?: string;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
  /**
   * ISO timestamp of last update
   */
  updatedAt?: string;
}

export const QrCodeBaseTypeEnum = {
  Url: 'url',
  Text: 'text',
  Email: 'email',
  Phone: 'phone',
  Sms: 'sms',
  Wifi: 'wifi',
  Vcard: 'vcard',
} as const;

export type QrCodeBaseTypeEnum = (typeof QrCodeBaseTypeEnum)[keyof typeof QrCodeBaseTypeEnum];

/**
 *
 */
export interface QrCodeColorOptions {
  /**
   * Dark color (hex)
   */
  dark?: string;
  /**
   * Light color (hex)
   */
  light?: string;
}

/**
 *
 */
export interface QrCodeGenerationSettings {
  /**
   * Size of QR code in pixels (100-1000)
   */
  size?: number;
  /**
   * Margin around QR code (0-10)
   */
  margin?: number;
  /**
   * Error correction level
   */
  errorCorrectionLevel?: QrCodeGenerationSettingsErrorCorrectionLevelEnum;
  color?: QrCodeColorOptions;
  /**
   * URL to logo image to embed
   */
  logo?: string;
}

export const QrCodeGenerationSettingsErrorCorrectionLevelEnum = {
  L: 'L',
  M: 'M',
  Q: 'Q',
  H: 'H',
} as const;

export type QrCodeGenerationSettingsErrorCorrectionLevelEnum =
  (typeof QrCodeGenerationSettingsErrorCorrectionLevelEnum)[keyof typeof QrCodeGenerationSettingsErrorCorrectionLevelEnum];

/**
 *
 */
export interface QrCodeListItem {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID of the QR code
   */
  sid?: string;
  /**
   * Encoded data in the QR code
   */
  data?: string;
  /**
   * Type of QR code
   */
  type?: string;
  /**
   * Base64 QR code image or URL (truncated)
   */
  imageUrl?: string;
  /**
   * Whether QR code is active
   */
  isActive?: boolean;
  /**
   * Expiration timestamp
   */
  expiresAt?: string;
  /**
   * ISO timestamp of creation
   */
  createdAt?: string;
  /**
   * ISO timestamp of last update
   */
  updatedAt?: string;
}

/**
 *
 */
export interface ScrapeUrlDataIn {
  /**
   * URL to scrape metadata from
   */
  url?: string;
  /**
   * Data types to return, metadata,openGraph,html, Default [\"openGraph\"]
   */
  dataTypes?: Array<string>;
  /**
   * Specific metadata fields to extract: author,description,image,logo,favicon,title,url,spotify,youtube,instagram,soundcloud,amazon,shopping,clearbit,manifest. Default: all fields
   */
  metadataFields?: Array<string>;
}

/**
 *
 */
export interface ScrapeUrlDataOut {
  /**
   * The scraped URL
   */
  url?: string;
  /**
   *
   */
  metadata?: object;
  /**
   *
   */
  openGraph?: object;
  /**
   * Raw HTML content (if requested)
   */
  html?: string;
  /**
   * Data types that were requested
   */
  dataTypes?: Array<string>;
  /**
   * Whether the data came from cache
   */
  cached?: boolean;
  performance?: PerformanceMetrics;
}

/**
 *
 */
export interface ShortUrlMeta {
  /**
   * Whether the URL is disabled
   */
  isDisabled?: boolean;
  /**
   * User ID who created the URL
   */
  userId?: string;
}

/**
 *
 */
export interface TrackQrViewIn {
  /**
   * Referrer URL
   */
  referrer?: string;
  /**
   * User agent string
   */
  userAgent?: string;
  /**
   * Additional tracking metadata
   */
  meta?: object;
}

/**
 *
 */
export interface TrackQrViewOut {
  /**
   * Whether tracking was successful
   */
  success?: boolean;
  /**
   * Whether the view was tracked
   */
  tracked?: boolean;
  /**
   * Response message
   */
  message?: string;
}

/**
 *
 */
export interface UpdateApiKeyIn {
  /**
   * Database ID of the API key to update
   */
  _id: string;
  /**
   * Updated name/description for the API key
   */
  name?: string;
  /**
   * Environment designation (e.g., production, staging, development)
   */
  environment?: string;
  /**
   * Updated list of services this key can access
   */
  services?: Array<string>;
  /**
   * Whether to enable or disable the API key
   */
  isEnabled?: boolean;
}

/**
 *
 */
export interface UpdateQrCodeIn {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID of the QR code (alternative to _id)
   */
  sid?: string;
  /**
   * New data to encode (regenerates QR code)
   */
  data?: string;
  /**
   * New QR code type
   */
  type?: UpdateQrCodeInTypeEnum;
  /**
   * Enable/disable QR code
   */
  isActive?: boolean;
  /**
   * New expiration date (ISO 8601)
   */
  expiresAt?: string;
  /**
   * Mixed JSON object with all QR code settings
   */
  settings?: object;
  /**
   * Force regenerate QR code image
   */
  regenerateImage?: boolean;
}

export const UpdateQrCodeInTypeEnum = {
  Url: 'url',
  Text: 'text',
  Email: 'email',
  Phone: 'phone',
  Sms: 'sms',
  Wifi: 'wifi',
  Vcard: 'vcard',
} as const;

export type UpdateQrCodeInTypeEnum = (typeof UpdateQrCodeInTypeEnum)[keyof typeof UpdateQrCodeInTypeEnum];

/**
 *
 */
export interface UpdateQrCodeOut {
  /**
   * Database ID of the QR code
   */
  _id?: string;
  /**
   * Short ID of the QR code
   */
  sid?: string;
  /**
   * Encoded data
   */
  data?: string;
  /**
   * QR code type
   */
  type?: string;
  /**
   * Updated QR code image
   */
  imageUrl?: string;
  /**
   * Active status
   */
  isActive?: boolean;
  /**
   * Expiration date
   */
  expiresAt?: string;
  settings?: QrCodeGenerationSettings;
  /**
   * Update timestamp
   */
  updatedAt?: string;
}

/**
 *
 */
export interface UpdateQrCodeSettings {
  /**
   * Mixed JSON object with all QR code settings from frontend
   */
  settings?: object;
}

/**
 *
 */
export interface UpdateShortUrlIn {
  /**
   * Database ID of the short URL
   */
  _id: string;
  /**
   * Updated target URL
   */
  url: string;
  /**
   * New short ID
   */
  sid: string;
  /**
   * Domain for the short URL
   */
  domain?: string;
}

/**
 *
 */
export interface UpdateShortUrlOut {
  /**
   * The updated target URL
   */
  originalUrl: string;
  /**
   * Complete updated short URL
   */
  shortUrl: string;
  /**
   * Domain of the short URL
   */
  domain: string;
  /**
   * Updated short ID
   */
  sid: string;
}

/**
 *
 */
export interface WhoAmIOut {
  /**
   *
   */
  userId?: string;
  /**
   *
   */
  email?: string;
  /**
   *
   */
  username?: string;
  /**
   *
   */
  reqIpAddress?: string;
  /**
   *
   */
  reqIpCountry?: string;
  /**
   *
   */
  reqUserAgent?: string;
}

/**
 * APIKeyApi - axios parameter creator
 */
export const APIKeyApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Create API Key - Generate a new API key
   * @param {CreateApiKeyIn} createApiKeyIn API key configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateApiKey: async (createApiKeyIn: CreateApiKeyIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'createApiKeyIn' is not null or undefined
    assertParamExists('v1CreateApiKey', 'createApiKeyIn', createApiKeyIn);
    const localVarPath = `/v1-create-api-key`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(createApiKeyIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Delete API Key - Remove an API key permanently
   * @param {DeleteApiKeyIn} deleteApiKeyIn API key to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1DeleteApiKey: async (deleteApiKeyIn: DeleteApiKeyIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'deleteApiKeyIn' is not null or undefined
    assertParamExists('v1DeleteApiKey', 'deleteApiKeyIn', deleteApiKeyIn);
    const localVarPath = `/v1-delete-api-key`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(deleteApiKeyIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get API Key Details - Retrieve details of a specific API key
   * @param {GetApiKeyDetailsIn} getApiKeyDetailsIn Request body with API key ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetApiKeyDetails: async (
    getApiKeyDetailsIn: GetApiKeyDetailsIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'getApiKeyDetailsIn' is not null or undefined
    assertParamExists('v1GetApiKeyDetails', 'getApiKeyDetailsIn', getApiKeyDetailsIn);
    const localVarPath = `/v1-get-api-key-details`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(getApiKeyDetailsIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Who Am I - Get current user information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetWhoAmI: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List API Keys - Retrieve user\'s API keys
   * @param {ListApiKeysIn} listApiKeysIn Request body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListApiKeys: async (listApiKeysIn: ListApiKeysIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'listApiKeysIn' is not null or undefined
    assertParamExists('v1ListApiKeys', 'listApiKeysIn', listApiKeysIn);
    const localVarPath = `/v1-list-api-keys`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(listApiKeysIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Update API Key - Modify an existing API key
   * @param {UpdateApiKeyIn} updateApiKeyIn Updated API key configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1UpdateApiKey: async (updateApiKeyIn: UpdateApiKeyIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'updateApiKeyIn' is not null or undefined
    assertParamExists('v1UpdateApiKey', 'updateApiKeyIn', updateApiKeyIn);
    const localVarPath = `/v1-update-api-key`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(updateApiKeyIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * APIKeyApi - functional programming interface
 */
export const APIKeyApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = APIKeyApiAxiosParamCreator(configuration);
  return {
    /**
     * Create API Key - Generate a new API key
     * @param {CreateApiKeyIn} createApiKeyIn API key configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateApiKey(
      createApiKeyIn: CreateApiKeyIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiKeyDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateApiKey(createApiKeyIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1CreateApiKey']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete API Key - Remove an API key permanently
     * @param {DeleteApiKeyIn} deleteApiKeyIn API key to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1DeleteApiKey(
      deleteApiKeyIn: DeleteApiKeyIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteApiKeyOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1DeleteApiKey(deleteApiKeyIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1DeleteApiKey']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get API Key Details - Retrieve details of a specific API key
     * @param {GetApiKeyDetailsIn} getApiKeyDetailsIn Request body with API key ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetApiKeyDetails(
      getApiKeyDetailsIn: GetApiKeyDetailsIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiKeyDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetApiKeyDetails(getApiKeyDetailsIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1GetApiKeyDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Who Am I - Get current user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetWhoAmI(
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhoAmIOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetWhoAmI(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1GetWhoAmI']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List API Keys - Retrieve user\'s API keys
     * @param {ListApiKeysIn} listApiKeysIn Request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListApiKeys(
      listApiKeysIn: ListApiKeysIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListApiKeysOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListApiKeys(listApiKeysIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1ListApiKeys']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update API Key - Modify an existing API key
     * @param {UpdateApiKeyIn} updateApiKeyIn Updated API key configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1UpdateApiKey(
      updateApiKeyIn: UpdateApiKeyIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiKeyDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1UpdateApiKey(updateApiKeyIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIKeyApi.v1UpdateApiKey']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * APIKeyApi - factory interface
 */
export const APIKeyApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = APIKeyApiFp(configuration);
  return {
    /**
     * Create API Key - Generate a new API key
     * @param {APIKeyApiV1CreateApiKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateApiKey(
      requestParameters: APIKeyApiV1CreateApiKeyRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetApiKeyDetailsOut> {
      return localVarFp
        .v1CreateApiKey(requestParameters.createApiKeyIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete API Key - Remove an API key permanently
     * @param {APIKeyApiV1DeleteApiKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteApiKey(
      requestParameters: APIKeyApiV1DeleteApiKeyRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<DeleteApiKeyOut> {
      return localVarFp
        .v1DeleteApiKey(requestParameters.deleteApiKeyIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get API Key Details - Retrieve details of a specific API key
     * @param {APIKeyApiV1GetApiKeyDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetApiKeyDetails(
      requestParameters: APIKeyApiV1GetApiKeyDetailsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetApiKeyDetailsOut> {
      return localVarFp
        .v1GetApiKeyDetails(requestParameters.getApiKeyDetailsIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Who Am I - Get current user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetWhoAmI(options?: RawAxiosRequestConfig): AxiosPromise<WhoAmIOut> {
      return localVarFp.v1GetWhoAmI(options).then((request) => request(axios, basePath));
    },
    /**
     * List API Keys - Retrieve user\'s API keys
     * @param {APIKeyApiV1ListApiKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListApiKeys(
      requestParameters: APIKeyApiV1ListApiKeysRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListApiKeysOut> {
      return localVarFp
        .v1ListApiKeys(requestParameters.listApiKeysIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update API Key - Modify an existing API key
     * @param {APIKeyApiV1UpdateApiKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1UpdateApiKey(
      requestParameters: APIKeyApiV1UpdateApiKeyRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetApiKeyDetailsOut> {
      return localVarFp
        .v1UpdateApiKey(requestParameters.updateApiKeyIn, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateApiKey operation in APIKeyApi.
 */
export interface APIKeyApiV1CreateApiKeyRequest {
  /**
   * API key configuration
   */
  readonly createApiKeyIn: CreateApiKeyIn;
}

/**
 * Request parameters for v1DeleteApiKey operation in APIKeyApi.
 */
export interface APIKeyApiV1DeleteApiKeyRequest {
  /**
   * API key to delete
   */
  readonly deleteApiKeyIn: DeleteApiKeyIn;
}

/**
 * Request parameters for v1GetApiKeyDetails operation in APIKeyApi.
 */
export interface APIKeyApiV1GetApiKeyDetailsRequest {
  /**
   * Request body with API key ID
   */
  readonly getApiKeyDetailsIn: GetApiKeyDetailsIn;
}

/**
 * Request parameters for v1ListApiKeys operation in APIKeyApi.
 */
export interface APIKeyApiV1ListApiKeysRequest {
  /**
   * Request body
   */
  readonly listApiKeysIn: ListApiKeysIn;
}

/**
 * Request parameters for v1UpdateApiKey operation in APIKeyApi.
 */
export interface APIKeyApiV1UpdateApiKeyRequest {
  /**
   * Updated API key configuration
   */
  readonly updateApiKeyIn: UpdateApiKeyIn;
}

/**
 * APIKeyApi - object-oriented interface
 */
export class APIKeyApi extends BaseAPI {
  /**
   * Create API Key - Generate a new API key
   * @param {APIKeyApiV1CreateApiKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateApiKey(requestParameters: APIKeyApiV1CreateApiKeyRequest, options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1CreateApiKey(requestParameters.createApiKeyIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete API Key - Remove an API key permanently
   * @param {APIKeyApiV1DeleteApiKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1DeleteApiKey(requestParameters: APIKeyApiV1DeleteApiKeyRequest, options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1DeleteApiKey(requestParameters.deleteApiKeyIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get API Key Details - Retrieve details of a specific API key
   * @param {APIKeyApiV1GetApiKeyDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetApiKeyDetails(requestParameters: APIKeyApiV1GetApiKeyDetailsRequest, options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1GetApiKeyDetails(requestParameters.getApiKeyDetailsIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Who Am I - Get current user information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetWhoAmI(options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1GetWhoAmI(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List API Keys - Retrieve user\'s API keys
   * @param {APIKeyApiV1ListApiKeysRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListApiKeys(requestParameters: APIKeyApiV1ListApiKeysRequest, options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1ListApiKeys(requestParameters.listApiKeysIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update API Key - Modify an existing API key
   * @param {APIKeyApiV1UpdateApiKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1UpdateApiKey(requestParameters: APIKeyApiV1UpdateApiKeyRequest, options?: RawAxiosRequestConfig) {
    return APIKeyApiFp(this.configuration)
      .v1UpdateApiKey(requestParameters.updateApiKeyIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * APIUsageApi - axios parameter creator
 */
export const APIUsageApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Get API Usage - Retrieve API usage statistics
   * @param {string} [from] Start date for usage period (ISO 8601 format) - eg: 2024-01-01
   * @param {string} [to] End date for usage period (ISO 8601 format) - eg: 2024-01-31
   * @param {string} [service] Filter by specific service name - eg: currency, country, ip
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetApiUsage: async (
    from?: string,
    to?: string,
    service?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-api-usage`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (from !== undefined) {
      localVarQueryParameter['from'] = from;
    }

    if (to !== undefined) {
      localVarQueryParameter['to'] = to;
    }

    if (service !== undefined) {
      localVarQueryParameter['service'] = service;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Download API Usage - Export API usage data as CSV
   * @param {string} [from] Start date for usage period (ISO 8601 format) - eg: 2024-01-01
   * @param {string} [to] End date for usage period (ISO 8601 format) - eg: 2024-01-31
   * @param {string} [service] Filter by specific service name - eg: currency, country, ip
   * @param {string} [format] Export format csv,json, default: csv
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetDownloadApiUsage: async (
    from?: string,
    to?: string,
    service?: string,
    format?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-download-api-usage`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (from !== undefined) {
      localVarQueryParameter['from'] = from;
    }

    if (to !== undefined) {
      localVarQueryParameter['to'] = to;
    }

    if (service !== undefined) {
      localVarQueryParameter['service'] = service;
    }

    if (format !== undefined) {
      localVarQueryParameter['format'] = format;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * APIUsageApi - functional programming interface
 */
export const APIUsageApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = APIUsageApiAxiosParamCreator(configuration);
  return {
    /**
     * Get API Usage - Retrieve API usage statistics
     * @param {string} [from] Start date for usage period (ISO 8601 format) - eg: 2024-01-01
     * @param {string} [to] End date for usage period (ISO 8601 format) - eg: 2024-01-31
     * @param {string} [service] Filter by specific service name - eg: currency, country, ip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetApiUsage(
      from?: string,
      to?: string,
      service?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiUsageOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetApiUsage(from, to, service, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIUsageApi.v1GetApiUsage']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Download API Usage - Export API usage data as CSV
     * @param {string} [from] Start date for usage period (ISO 8601 format) - eg: 2024-01-01
     * @param {string} [to] End date for usage period (ISO 8601 format) - eg: 2024-01-31
     * @param {string} [service] Filter by specific service name - eg: currency, country, ip
     * @param {string} [format] Export format csv,json, default: csv
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetDownloadApiUsage(
      from?: string,
      to?: string,
      service?: string,
      format?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DownloadApiUsageOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetDownloadApiUsage(
        from,
        to,
        service,
        format,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['APIUsageApi.v1GetDownloadApiUsage']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * APIUsageApi - factory interface
 */
export const APIUsageApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = APIUsageApiFp(configuration);
  return {
    /**
     * Get API Usage - Retrieve API usage statistics
     * @param {APIUsageApiV1GetApiUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetApiUsage(
      requestParameters: APIUsageApiV1GetApiUsageRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetApiUsageOut> {
      return localVarFp
        .v1GetApiUsage(requestParameters.from, requestParameters.to, requestParameters.service, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Download API Usage - Export API usage data as CSV
     * @param {APIUsageApiV1GetDownloadApiUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetDownloadApiUsage(
      requestParameters: APIUsageApiV1GetDownloadApiUsageRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<DownloadApiUsageOut> {
      return localVarFp
        .v1GetDownloadApiUsage(
          requestParameters.from,
          requestParameters.to,
          requestParameters.service,
          requestParameters.format,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetApiUsage operation in APIUsageApi.
 */
export interface APIUsageApiV1GetApiUsageRequest {
  /**
   * Start date for usage period (ISO 8601 format) - eg: 2024-01-01
   */
  readonly from?: string;

  /**
   * End date for usage period (ISO 8601 format) - eg: 2024-01-31
   */
  readonly to?: string;

  /**
   * Filter by specific service name - eg: currency, country, ip
   */
  readonly service?: string;
}

/**
 * Request parameters for v1GetDownloadApiUsage operation in APIUsageApi.
 */
export interface APIUsageApiV1GetDownloadApiUsageRequest {
  /**
   * Start date for usage period (ISO 8601 format) - eg: 2024-01-01
   */
  readonly from?: string;

  /**
   * End date for usage period (ISO 8601 format) - eg: 2024-01-31
   */
  readonly to?: string;

  /**
   * Filter by specific service name - eg: currency, country, ip
   */
  readonly service?: string;

  /**
   * Export format csv,json, default: csv
   */
  readonly format?: string;
}

/**
 * APIUsageApi - object-oriented interface
 */
export class APIUsageApi extends BaseAPI {
  /**
   * Get API Usage - Retrieve API usage statistics
   * @param {APIUsageApiV1GetApiUsageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetApiUsage(requestParameters: APIUsageApiV1GetApiUsageRequest = {}, options?: RawAxiosRequestConfig) {
    return APIUsageApiFp(this.configuration)
      .v1GetApiUsage(requestParameters.from, requestParameters.to, requestParameters.service, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Download API Usage - Export API usage data as CSV
   * @param {APIUsageApiV1GetDownloadApiUsageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetDownloadApiUsage(
    requestParameters: APIUsageApiV1GetDownloadApiUsageRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return APIUsageApiFp(this.configuration)
      .v1GetDownloadApiUsage(
        requestParameters.from,
        requestParameters.to,
        requestParameters.service,
        requestParameters.format,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * CountryApi - axios parameter creator
 */
export const CountryApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Get City Details - Retrieve detailed information about a specific city
   * @param {number} [id] City ID
   * @param {string} [name] City name (must be exact match)
   * @param {string} [countryCode] Country code (2 letter ISO code) - eg: US, GB
   * @param {string} [stateCode] State/Province code - eg: CA, NY
   * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;countryName\&quot;, \&quot;stateName\&quot;]
   * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;countryId\&quot;, \&quot;stateId\&quot;]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetCityDetails: async (
    id?: number,
    name?: string,
    countryCode?: string,
    stateCode?: string,
    expand?: Array<string>,
    exclude?: Array<string>,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-city-details`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (id !== undefined) {
      localVarQueryParameter['id'] = id;
    }

    if (name !== undefined) {
      localVarQueryParameter['name'] = name;
    }

    if (countryCode !== undefined) {
      localVarQueryParameter['countryCode'] = countryCode;
    }

    if (stateCode !== undefined) {
      localVarQueryParameter['stateCode'] = stateCode;
    }

    if (expand) {
      localVarQueryParameter['expand'] = expand;
    }

    if (exclude) {
      localVarQueryParameter['exclude'] = exclude;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get Country Details - Retrieve detailed information about a specific country
   * @param {string} code Country code (2 or 3 letter ISO code) - eg: US, USA
   * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;, \&quot;languages\&quot;]
   * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetCountryDetails: async (
    code: string,
    expand?: Array<string>,
    exclude?: Array<string>,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (code !== undefined) {
      localVarQueryParameter['code'] = code;
    }

    if (expand) {
      localVarQueryParameter['expand'] = expand;
    }

    if (exclude) {
      localVarQueryParameter['exclude'] = exclude;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get Factbook Details - Retrieve detailed CIA World Factbook information for a country
   * @param {string} code Country code (2 or 3 letter ISO code) - eg: US, USA
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetFactbookDetails: async (code: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'code' is not null or undefined
    assertParamExists('v1GetFactbookDetails', 'code', code);
    const localVarPath = `/v1-get-factbook-details`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (code !== undefined) {
      localVarQueryParameter['code'] = code;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List Cities - Search and retrieve cities by name and country
   * @param {string} [name] City name to search for (partial match supported)
   * @param {Array<string>} [country] Filter by country codes (2 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;CA\&quot;]
   * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
   * @param {number} [page] Page number for pagination - Default: 1
   * @param {number} [pageSize] Number of items per page - Default: 20
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListCities: async (
    name?: string,
    country?: Array<string>,
    sort?: Array<string>,
    page?: number,
    pageSize?: number,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-list-cities`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (name !== undefined) {
      localVarQueryParameter['name'] = name;
    }

    if (country) {
      localVarQueryParameter['country'] = country;
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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List Countries - Retrieve a searchable list of countries with filtering options
   * @param {Array<string>} [code] Filter by country codes (2 or 3 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;FR\&quot;]
   * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;]
   * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
   * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
   * @param {number} [page] Page number for pagination - Default: 1
   * @param {number} [pageSize] Number of items per page - Default: 20
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListCountries: async (
    code?: Array<string>,
    expand?: Array<string>,
    exclude?: Array<string>,
    sort?: Array<string>,
    page?: number,
    pageSize?: number,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (code) {
      localVarQueryParameter['code'] = code;
    }

    if (expand) {
      localVarQueryParameter['expand'] = expand;
    }

    if (exclude) {
      localVarQueryParameter['exclude'] = exclude;
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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * CountryApi - functional programming interface
 */
export const CountryApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = CountryApiAxiosParamCreator(configuration);
  return {
    /**
     * Get City Details - Retrieve detailed information about a specific city
     * @param {number} [id] City ID
     * @param {string} [name] City name (must be exact match)
     * @param {string} [countryCode] Country code (2 letter ISO code) - eg: US, GB
     * @param {string} [stateCode] State/Province code - eg: CA, NY
     * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;countryName\&quot;, \&quot;stateName\&quot;]
     * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;countryId\&quot;, \&quot;stateId\&quot;]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCityDetails(
      id?: number,
      name?: string,
      countryCode?: string,
      stateCode?: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCityDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCityDetails(
        id,
        name,
        countryCode,
        stateCode,
        expand,
        exclude,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CountryApi.v1GetCityDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Country Details - Retrieve detailed information about a specific country
     * @param {string} code Country code (2 or 3 letter ISO code) - eg: US, USA
     * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;, \&quot;languages\&quot;]
     * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCountryDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCountryDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCountryDetails(code, expand, exclude, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CountryApi.v1GetCountryDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Factbook Details - Retrieve detailed CIA World Factbook information for a country
     * @param {string} code Country code (2 or 3 letter ISO code) - eg: US, USA
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetFactbookDetails(
      code: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetFactbookDetails(code, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CountryApi.v1GetFactbookDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List Cities - Search and retrieve cities by name and country
     * @param {string} [name] City name to search for (partial match supported)
     * @param {Array<string>} [country] Filter by country codes (2 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;CA\&quot;]
     * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
     * @param {number} [page] Page number for pagination - Default: 1
     * @param {number} [pageSize] Number of items per page - Default: 20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListCities(
      name?: string,
      country?: Array<string>,
      sort?: Array<string>,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCitiesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListCities(
        name,
        country,
        sort,
        page,
        pageSize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CountryApi.v1ListCities']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List Countries - Retrieve a searchable list of countries with filtering options
     * @param {Array<string>} [code] Filter by country codes (2 or 3 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;FR\&quot;]
     * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;]
     * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
     * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
     * @param {number} [page] Page number for pagination - Default: 1
     * @param {number} [pageSize] Number of items per page - Default: 20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListCountries(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      sort?: Array<string>,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCountriesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListCountries(
        code,
        expand,
        exclude,
        sort,
        page,
        pageSize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CountryApi.v1ListCountries']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * CountryApi - factory interface
 */
export const CountryApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = CountryApiFp(configuration);
  return {
    /**
     * Get City Details - Retrieve detailed information about a specific city
     * @param {CountryApiV1GetCityDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCityDetails(
      requestParameters: CountryApiV1GetCityDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCityDetailsOut> {
      return localVarFp
        .v1GetCityDetails(
          requestParameters.id,
          requestParameters.name,
          requestParameters.countryCode,
          requestParameters.stateCode,
          requestParameters.expand,
          requestParameters.exclude,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get Country Details - Retrieve detailed information about a specific country
     * @param {CountryApiV1GetCountryDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCountryDetails(
      requestParameters: CountryApiV1GetCountryDetailsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCountryDetailsOut> {
      return localVarFp
        .v1GetCountryDetails(requestParameters.code, requestParameters.expand, requestParameters.exclude, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get Factbook Details - Retrieve detailed CIA World Factbook information for a country
     * @param {CountryApiV1GetFactbookDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetFactbookDetails(
      requestParameters: CountryApiV1GetFactbookDetailsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<object> {
      return localVarFp
        .v1GetFactbookDetails(requestParameters.code, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List Cities - Search and retrieve cities by name and country
     * @param {CountryApiV1ListCitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCities(
      requestParameters: CountryApiV1ListCitiesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListCitiesOut> {
      return localVarFp
        .v1ListCities(
          requestParameters.name,
          requestParameters.country,
          requestParameters.sort,
          requestParameters.page,
          requestParameters.pageSize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List Countries - Retrieve a searchable list of countries with filtering options
     * @param {CountryApiV1ListCountriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCountries(
      requestParameters: CountryApiV1ListCountriesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListCountriesOut> {
      return localVarFp
        .v1ListCountries(
          requestParameters.code,
          requestParameters.expand,
          requestParameters.exclude,
          requestParameters.sort,
          requestParameters.page,
          requestParameters.pageSize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetCityDetails operation in CountryApi.
 */
export interface CountryApiV1GetCityDetailsRequest {
  /**
   * City ID
   */
  readonly id?: number;

  /**
   * City name (must be exact match)
   */
  readonly name?: string;

  /**
   * Country code (2 letter ISO code) - eg: US, GB
   */
  readonly countryCode?: string;

  /**
   * State/Province code - eg: CA, NY
   */
  readonly stateCode?: string;

  /**
   * Fields to include in response - eg: [\&quot;name\&quot;, \&quot;countryName\&quot;, \&quot;stateName\&quot;]
   */
  readonly expand?: Array<string>;

  /**
   * Fields to exclude from response - eg: [\&quot;countryId\&quot;, \&quot;stateId\&quot;]
   */
  readonly exclude?: Array<string>;
}

/**
 * Request parameters for v1GetCountryDetails operation in CountryApi.
 */
export interface CountryApiV1GetCountryDetailsRequest {
  /**
   * Country code (2 or 3 letter ISO code) - eg: US, USA
   */
  readonly code: string;

  /**
   * Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;, \&quot;languages\&quot;]
   */
  readonly expand?: Array<string>;

  /**
   * Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
   */
  readonly exclude?: Array<string>;
}

/**
 * Request parameters for v1GetFactbookDetails operation in CountryApi.
 */
export interface CountryApiV1GetFactbookDetailsRequest {
  /**
   * Country code (2 or 3 letter ISO code) - eg: US, USA
   */
  readonly code: string;
}

/**
 * Request parameters for v1ListCities operation in CountryApi.
 */
export interface CountryApiV1ListCitiesRequest {
  /**
   * City name to search for (partial match supported)
   */
  readonly name?: string;

  /**
   * Filter by country codes (2 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;CA\&quot;]
   */
  readonly country?: Array<string>;

  /**
   * Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
   */
  readonly sort?: Array<string>;

  /**
   * Page number for pagination - Default: 1
   */
  readonly page?: number;

  /**
   * Number of items per page - Default: 20
   */
  readonly pageSize?: number;
}

/**
 * Request parameters for v1ListCountries operation in CountryApi.
 */
export interface CountryApiV1ListCountriesRequest {
  /**
   * Filter by country codes (2 or 3 letter ISO codes) - eg: [\&quot;US\&quot;, \&quot;GB\&quot;, \&quot;FR\&quot;]
   */
  readonly code?: Array<string>;

  /**
   * Fields to include in response - eg: [\&quot;name\&quot;, \&quot;capital\&quot;, \&quot;currencies\&quot;]
   */
  readonly expand?: Array<string>;

  /**
   * Fields to exclude from response - eg: [\&quot;translations\&quot;, \&quot;demonyms\&quot;]
   */
  readonly exclude?: Array<string>;

  /**
   * Sort fields (prefix with - for descending) - eg: [\&quot;name\&quot;, \&quot;-population\&quot;]
   */
  readonly sort?: Array<string>;

  /**
   * Page number for pagination - Default: 1
   */
  readonly page?: number;

  /**
   * Number of items per page - Default: 20
   */
  readonly pageSize?: number;
}

/**
 * CountryApi - object-oriented interface
 */
export class CountryApi extends BaseAPI {
  /**
   * Get City Details - Retrieve detailed information about a specific city
   * @param {CountryApiV1GetCityDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetCityDetails(requestParameters: CountryApiV1GetCityDetailsRequest = {}, options?: RawAxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1GetCityDetails(
        requestParameters.id,
        requestParameters.name,
        requestParameters.countryCode,
        requestParameters.stateCode,
        requestParameters.expand,
        requestParameters.exclude,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get Country Details - Retrieve detailed information about a specific country
   * @param {CountryApiV1GetCountryDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetCountryDetails(requestParameters: CountryApiV1GetCountryDetailsRequest, options?: RawAxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1GetCountryDetails(requestParameters.code, requestParameters.expand, requestParameters.exclude, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get Factbook Details - Retrieve detailed CIA World Factbook information for a country
   * @param {CountryApiV1GetFactbookDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetFactbookDetails(
    requestParameters: CountryApiV1GetFactbookDetailsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CountryApiFp(this.configuration)
      .v1GetFactbookDetails(requestParameters.code, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List Cities - Search and retrieve cities by name and country
   * @param {CountryApiV1ListCitiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListCities(requestParameters: CountryApiV1ListCitiesRequest = {}, options?: RawAxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1ListCities(
        requestParameters.name,
        requestParameters.country,
        requestParameters.sort,
        requestParameters.page,
        requestParameters.pageSize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List Countries - Retrieve a searchable list of countries with filtering options
   * @param {CountryApiV1ListCountriesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListCountries(requestParameters: CountryApiV1ListCountriesRequest = {}, options?: RawAxiosRequestConfig) {
    return CountryApiFp(this.configuration)
      .v1ListCountries(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
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
 */
export const CurrencyApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Converts an amount from one currency to another using real-time exchange rates. Supports multiple data providers with automatic fallback.
   * @param {number} [amount] Amount to convert (defaults to 1) - optional
   * @param {string} [from] Source currency code (3 letters, e.g., USD) - required
   * @param {string} [to] Target currency code (3 letters, e.g., EUR) - required
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ConvertCurrency: async (
    amount?: number,
    from?: string,
    to?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get Currency Details - Retrieve detailed information about a specific currency
   * @param {string} code Currency code (3-letter ISO code) - eg: USD, EUR, BTC
   * @param {Array<string>} [expand] Fields to expand in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;]
   * @param {Array<string>} [exclude] Fields to exclude from response
   * @param {Array<string>} [language] Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetCurrencyDetails: async (
    code: string,
    expand?: Array<string>,
    exclude?: Array<string>,
    language?: Array<string>,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (code !== undefined) {
      localVarQueryParameter['code'] = code;
    }

    if (expand) {
      localVarQueryParameter['expand'] = expand;
    }

    if (exclude) {
      localVarQueryParameter['exclude'] = exclude;
    }

    if (language) {
      localVarQueryParameter['language'] = language;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get Currency Exchange Rate - Retrieve real-time exchange rate between two currencies
   * @param {string} from Source currency code (3-letter ISO code) - eg: USD, EUR, GBP
   * @param {string} to Target currency code (3-letter ISO code) - eg: JPY, CAD, AUD
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetCurrencyExchangeRate: async (
    from: string,
    to: string,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (from !== undefined) {
      localVarQueryParameter['from'] = from;
    }

    if (to !== undefined) {
      localVarQueryParameter['to'] = to;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List Currencies - Retrieve a paginated list of available currencies
   * @param {Array<string>} [code] Filter by specific currency codes - eg: [\&quot;USD\&quot;, \&quot;EUR\&quot;, \&quot;GBP\&quot;]
   * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;, \&quot;banknotes\&quot;, \&quot;coins\&quot;]
   * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;banknotes\&quot;, \&quot;coins\&quot;]
   * @param {Array<string>} [language] Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
   * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;code\&quot;, \&quot;-name\&quot;]
   * @param {number} [page] Page number for pagination - Default: 1
   * @param {number} [pageSize] Number of items per page (max: 500) - Default: 300
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListCurrencies: async (
    code?: Array<string>,
    expand?: Array<string>,
    exclude?: Array<string>,
    language?: Array<string>,
    sort?: Array<string>,
    page?: number,
    pageSize?: number,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (code) {
      localVarQueryParameter['code'] = code;
    }

    if (expand) {
      localVarQueryParameter['expand'] = expand;
    }

    if (exclude) {
      localVarQueryParameter['exclude'] = exclude;
    }

    if (language) {
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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * CurrencyApi - functional programming interface
 */
export const CurrencyApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = CurrencyApiAxiosParamCreator(configuration);
  return {
    /**
     * Converts an amount from one currency to another using real-time exchange rates. Supports multiple data providers with automatic fallback.
     * @param {number} [amount] Amount to convert (defaults to 1) - optional
     * @param {string} [from] Source currency code (3 letters, e.g., USD) - required
     * @param {string} [to] Target currency code (3 letters, e.g., EUR) - required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ConvertCurrency(
      amount?: number,
      from?: string,
      to?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConvertCurrencyOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ConvertCurrency(amount, from, to, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CurrencyApi.v1ConvertCurrency']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Currency Details - Retrieve detailed information about a specific currency
     * @param {string} code Currency code (3-letter ISO code) - eg: USD, EUR, BTC
     * @param {Array<string>} [expand] Fields to expand in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;]
     * @param {Array<string>} [exclude] Fields to exclude from response
     * @param {Array<string>} [language] Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCurrencyDetails(
      code: string,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCurrencyDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCurrencyDetails(
        code,
        expand,
        exclude,
        language,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CurrencyApi.v1GetCurrencyDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Currency Exchange Rate - Retrieve real-time exchange rate between two currencies
     * @param {string} from Source currency code (3-letter ISO code) - eg: USD, EUR, GBP
     * @param {string} to Target currency code (3-letter ISO code) - eg: JPY, CAD, AUD
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetCurrencyExchangeRate(
      from: string,
      to: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCurrencyExchangeRateOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetCurrencyExchangeRate(from, to, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CurrencyApi.v1GetCurrencyExchangeRate']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List Currencies - Retrieve a paginated list of available currencies
     * @param {Array<string>} [code] Filter by specific currency codes - eg: [\&quot;USD\&quot;, \&quot;EUR\&quot;, \&quot;GBP\&quot;]
     * @param {Array<string>} [expand] Fields to include in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;, \&quot;banknotes\&quot;, \&quot;coins\&quot;]
     * @param {Array<string>} [exclude] Fields to exclude from response - eg: [\&quot;banknotes\&quot;, \&quot;coins\&quot;]
     * @param {Array<string>} [language] Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
     * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;code\&quot;, \&quot;-name\&quot;]
     * @param {number} [page] Page number for pagination - Default: 1
     * @param {number} [pageSize] Number of items per page (max: 500) - Default: 300
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListCurrencies(
      code?: Array<string>,
      expand?: Array<string>,
      exclude?: Array<string>,
      language?: Array<string>,
      sort?: Array<string>,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCurrenciesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListCurrencies(
        code,
        expand,
        exclude,
        language,
        sort,
        page,
        pageSize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CurrencyApi.v1ListCurrencies']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * CurrencyApi - factory interface
 */
export const CurrencyApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = CurrencyApiFp(configuration);
  return {
    /**
     * Converts an amount from one currency to another using real-time exchange rates. Supports multiple data providers with automatic fallback.
     * @param {CurrencyApiV1ConvertCurrencyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ConvertCurrency(
      requestParameters: CurrencyApiV1ConvertCurrencyRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ConvertCurrencyOut> {
      return localVarFp
        .v1ConvertCurrency(requestParameters.amount, requestParameters.from, requestParameters.to, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get Currency Details - Retrieve detailed information about a specific currency
     * @param {CurrencyApiV1GetCurrencyDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyDetails(
      requestParameters: CurrencyApiV1GetCurrencyDetailsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCurrencyDetailsOut> {
      return localVarFp
        .v1GetCurrencyDetails(
          requestParameters.code,
          requestParameters.expand,
          requestParameters.exclude,
          requestParameters.language,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get Currency Exchange Rate - Retrieve real-time exchange rate between two currencies
     * @param {CurrencyApiV1GetCurrencyExchangeRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetCurrencyExchangeRate(
      requestParameters: CurrencyApiV1GetCurrencyExchangeRateRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCurrencyExchangeRateOut> {
      return localVarFp
        .v1GetCurrencyExchangeRate(requestParameters.from, requestParameters.to, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List Currencies - Retrieve a paginated list of available currencies
     * @param {CurrencyApiV1ListCurrenciesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListCurrencies(
      requestParameters: CurrencyApiV1ListCurrenciesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListCurrenciesOut> {
      return localVarFp
        .v1ListCurrencies(
          requestParameters.code,
          requestParameters.expand,
          requestParameters.exclude,
          requestParameters.language,
          requestParameters.sort,
          requestParameters.page,
          requestParameters.pageSize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1ConvertCurrency operation in CurrencyApi.
 */
export interface CurrencyApiV1ConvertCurrencyRequest {
  /**
   * Amount to convert (defaults to 1) - optional
   */
  readonly amount?: number;

  /**
   * Source currency code (3 letters, e.g., USD) - required
   */
  readonly from?: string;

  /**
   * Target currency code (3 letters, e.g., EUR) - required
   */
  readonly to?: string;
}

/**
 * Request parameters for v1GetCurrencyDetails operation in CurrencyApi.
 */
export interface CurrencyApiV1GetCurrencyDetailsRequest {
  /**
   * Currency code (3-letter ISO code) - eg: USD, EUR, BTC
   */
  readonly code: string;

  /**
   * Fields to expand in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;]
   */
  readonly expand?: Array<string>;

  /**
   * Fields to exclude from response
   */
  readonly exclude?: Array<string>;

  /**
   * Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
   */
  readonly language?: Array<string>;
}

/**
 * Request parameters for v1GetCurrencyExchangeRate operation in CurrencyApi.
 */
export interface CurrencyApiV1GetCurrencyExchangeRateRequest {
  /**
   * Source currency code (3-letter ISO code) - eg: USD, EUR, GBP
   */
  readonly from: string;

  /**
   * Target currency code (3-letter ISO code) - eg: JPY, CAD, AUD
   */
  readonly to: string;
}

/**
 * Request parameters for v1ListCurrencies operation in CurrencyApi.
 */
export interface CurrencyApiV1ListCurrenciesRequest {
  /**
   * Filter by specific currency codes - eg: [\&quot;USD\&quot;, \&quot;EUR\&quot;, \&quot;GBP\&quot;]
   */
  readonly code?: Array<string>;

  /**
   * Fields to include in response - eg: [\&quot;symbol\&quot;, \&quot;country\&quot;, \&quot;decimal\&quot;, \&quot;banknotes\&quot;, \&quot;coins\&quot;]
   */
  readonly expand?: Array<string>;

  /**
   * Fields to exclude from response - eg: [\&quot;banknotes\&quot;, \&quot;coins\&quot;]
   */
  readonly exclude?: Array<string>;

  /**
   * Language codes for localized names - eg: [\&quot;en\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;]
   */
  readonly language?: Array<string>;

  /**
   * Sort fields (prefix with - for descending) - eg: [\&quot;code\&quot;, \&quot;-name\&quot;]
   */
  readonly sort?: Array<string>;

  /**
   * Page number for pagination - Default: 1
   */
  readonly page?: number;

  /**
   * Number of items per page (max: 500) - Default: 300
   */
  readonly pageSize?: number;
}

/**
 * CurrencyApi - object-oriented interface
 */
export class CurrencyApi extends BaseAPI {
  /**
   * Converts an amount from one currency to another using real-time exchange rates. Supports multiple data providers with automatic fallback.
   * @param {CurrencyApiV1ConvertCurrencyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ConvertCurrency(
    requestParameters: CurrencyApiV1ConvertCurrencyRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return CurrencyApiFp(this.configuration)
      .v1ConvertCurrency(requestParameters.amount, requestParameters.from, requestParameters.to, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get Currency Details - Retrieve detailed information about a specific currency
   * @param {CurrencyApiV1GetCurrencyDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetCurrencyDetails(
    requestParameters: CurrencyApiV1GetCurrencyDetailsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CurrencyApiFp(this.configuration)
      .v1GetCurrencyDetails(
        requestParameters.code,
        requestParameters.expand,
        requestParameters.exclude,
        requestParameters.language,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get Currency Exchange Rate - Retrieve real-time exchange rate between two currencies
   * @param {CurrencyApiV1GetCurrencyExchangeRateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetCurrencyExchangeRate(
    requestParameters: CurrencyApiV1GetCurrencyExchangeRateRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CurrencyApiFp(this.configuration)
      .v1GetCurrencyExchangeRate(requestParameters.from, requestParameters.to, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List Currencies - Retrieve a paginated list of available currencies
   * @param {CurrencyApiV1ListCurrenciesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListCurrencies(requestParameters: CurrencyApiV1ListCurrenciesRequest = {}, options?: RawAxiosRequestConfig) {
    return CurrencyApiFp(this.configuration)
      .v1ListCurrencies(
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
 * DomainToolsApi - axios parameter creator
 */
export const DomainToolsApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Retrieves WHOIS information for a given domain, with optional JSON parsing and caching control
   * @param {string} [domain] Domain name to query - required
   * @param {boolean} [parseWhoisToJson] Parse WHOIS text to JSON format - optional
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetDomainWhois: async (
    domain?: string,
    parseWhoisToJson?: boolean,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (domain !== undefined) {
      localVarQueryParameter['domain'] = domain;
    }

    if (parseWhoisToJson !== undefined) {
      localVarQueryParameter['parseWhoisToJson'] = parseWhoisToJson;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Performs DNS lookups for various record types (A, AAAA, CNAME, MX, etc.) with caching support
   * @param {string} [address] Domain or URL to lookup - required
   * @param {V1GetLookupDomainDnsTypeEnum} [type] DNS record type - required
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetLookupDomainDns: async (
    address?: string,
    type?: V1GetLookupDomainDnsTypeEnum,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-lookup-domain-dns`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (address !== undefined) {
      localVarQueryParameter['address'] = address;
    }

    if (type !== undefined) {
      localVarQueryParameter['type'] = type;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * DomainToolsApi - functional programming interface
 */
export const DomainToolsApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = DomainToolsApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves WHOIS information for a given domain, with optional JSON parsing and caching control
     * @param {string} [domain] Domain name to query - required
     * @param {boolean} [parseWhoisToJson] Parse WHOIS text to JSON format - optional
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetDomainWhois(
      domain?: string,
      parseWhoisToJson?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDomainWhoisOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetDomainWhois(domain, parseWhoisToJson, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['DomainToolsApi.v1GetDomainWhois']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Performs DNS lookups for various record types (A, AAAA, CNAME, MX, etc.) with caching support
     * @param {string} [address] Domain or URL to lookup - required
     * @param {V1GetLookupDomainDnsTypeEnum} [type] DNS record type - required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetLookupDomainDns(
      address?: string,
      type?: V1GetLookupDomainDnsTypeEnum,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LookupDomainDnsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetLookupDomainDns(address, type, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['DomainToolsApi.v1GetLookupDomainDns']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * DomainToolsApi - factory interface
 */
export const DomainToolsApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = DomainToolsApiFp(configuration);
  return {
    /**
     * Retrieves WHOIS information for a given domain, with optional JSON parsing and caching control
     * @param {DomainToolsApiV1GetDomainWhoisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetDomainWhois(
      requestParameters: DomainToolsApiV1GetDomainWhoisRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetDomainWhoisOut> {
      return localVarFp
        .v1GetDomainWhois(requestParameters.domain, requestParameters.parseWhoisToJson, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Performs DNS lookups for various record types (A, AAAA, CNAME, MX, etc.) with caching support
     * @param {DomainToolsApiV1GetLookupDomainDnsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetLookupDomainDns(
      requestParameters: DomainToolsApiV1GetLookupDomainDnsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<LookupDomainDnsOut> {
      return localVarFp
        .v1GetLookupDomainDns(requestParameters.address, requestParameters.type, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetDomainWhois operation in DomainToolsApi.
 */
export interface DomainToolsApiV1GetDomainWhoisRequest {
  /**
   * Domain name to query - required
   */
  readonly domain?: string;

  /**
   * Parse WHOIS text to JSON format - optional
   */
  readonly parseWhoisToJson?: boolean;
}

/**
 * Request parameters for v1GetLookupDomainDns operation in DomainToolsApi.
 */
export interface DomainToolsApiV1GetLookupDomainDnsRequest {
  /**
   * Domain or URL to lookup - required
   */
  readonly address?: string;

  /**
   * DNS record type - required
   */
  readonly type?: V1GetLookupDomainDnsTypeEnum;
}

/**
 * DomainToolsApi - object-oriented interface
 */
export class DomainToolsApi extends BaseAPI {
  /**
   * Retrieves WHOIS information for a given domain, with optional JSON parsing and caching control
   * @param {DomainToolsApiV1GetDomainWhoisRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetDomainWhois(
    requestParameters: DomainToolsApiV1GetDomainWhoisRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return DomainToolsApiFp(this.configuration)
      .v1GetDomainWhois(requestParameters.domain, requestParameters.parseWhoisToJson, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Performs DNS lookups for various record types (A, AAAA, CNAME, MX, etc.) with caching support
   * @param {DomainToolsApiV1GetLookupDomainDnsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetLookupDomainDns(
    requestParameters: DomainToolsApiV1GetLookupDomainDnsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return DomainToolsApiFp(this.configuration)
      .v1GetLookupDomainDns(requestParameters.address, requestParameters.type, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const V1GetLookupDomainDnsTypeEnum = {
  A: 'A',
  Aaaa: 'AAAA',
  Cname: 'CNAME',
  Mx: 'MX',
  Naptr: 'NAPTR',
  Ns: 'NS',
  Ptr: 'PTR',
  Soa: 'SOA',
  Srv: 'SRV',
  Txt: 'TXT',
  Any: 'ANY',
} as const;
export type V1GetLookupDomainDnsTypeEnum =
  (typeof V1GetLookupDomainDnsTypeEnum)[keyof typeof V1GetLookupDomainDnsTypeEnum];

/**
 * EmailApi - axios parameter creator
 */
export const EmailApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Get Email Details - Validate and verify email address
   * @param {string} [email] Email address to validate
   * @param {boolean} [verifyMx] Verify MX records - optional
   * @param {boolean} [verifySmtp] Verify SMTP connection - optional
   * @param {boolean} [detectName] Detect name from email address - optional
   * @param {boolean} [suggestDomain] Suggest domain corrections for typos - optional
   * @param {boolean} [checkDomainAge] Check domain age - optional
   * @param {boolean} [checkDomainRegistration] Check domain registration details - optional
   * @param {number} [timeout] Timeout in milliseconds (max: 10000)
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetEmailDetails: async (
    email?: string,
    verifyMx?: boolean,
    verifySmtp?: boolean,
    detectName?: boolean,
    suggestDomain?: boolean,
    checkDomainAge?: boolean,
    checkDomainRegistration?: boolean,
    timeout?: number,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (email !== undefined) {
      localVarQueryParameter['email'] = email;
    }

    if (verifyMx !== undefined) {
      localVarQueryParameter['verifyMx'] = verifyMx;
    }

    if (verifySmtp !== undefined) {
      localVarQueryParameter['verifySmtp'] = verifySmtp;
    }

    if (detectName !== undefined) {
      localVarQueryParameter['detectName'] = detectName;
    }

    if (suggestDomain !== undefined) {
      localVarQueryParameter['suggestDomain'] = suggestDomain;
    }

    if (checkDomainAge !== undefined) {
      localVarQueryParameter['checkDomainAge'] = checkDomainAge;
    }

    if (checkDomainRegistration !== undefined) {
      localVarQueryParameter['checkDomainRegistration'] = checkDomainRegistration;
    }

    if (timeout !== undefined) {
      localVarQueryParameter['timeout'] = timeout;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * EmailApi - functional programming interface
 */
export const EmailApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = EmailApiAxiosParamCreator(configuration);
  return {
    /**
     * Get Email Details - Validate and verify email address
     * @param {string} [email] Email address to validate
     * @param {boolean} [verifyMx] Verify MX records - optional
     * @param {boolean} [verifySmtp] Verify SMTP connection - optional
     * @param {boolean} [detectName] Detect name from email address - optional
     * @param {boolean} [suggestDomain] Suggest domain corrections for typos - optional
     * @param {boolean} [checkDomainAge] Check domain age - optional
     * @param {boolean} [checkDomainRegistration] Check domain registration details - optional
     * @param {number} [timeout] Timeout in milliseconds (max: 10000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetEmailDetails(
      email?: string,
      verifyMx?: boolean,
      verifySmtp?: boolean,
      detectName?: boolean,
      suggestDomain?: boolean,
      checkDomainAge?: boolean,
      checkDomainRegistration?: boolean,
      timeout?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmailDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetEmailDetails(
        email,
        verifyMx,
        verifySmtp,
        detectName,
        suggestDomain,
        checkDomainAge,
        checkDomainRegistration,
        timeout,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['EmailApi.v1GetEmailDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * EmailApi - factory interface
 */
export const EmailApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = EmailApiFp(configuration);
  return {
    /**
     * Get Email Details - Validate and verify email address
     * @param {EmailApiV1GetEmailDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetEmailDetails(
      requestParameters: EmailApiV1GetEmailDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEmailDetailsOut> {
      return localVarFp
        .v1GetEmailDetails(
          requestParameters.email,
          requestParameters.verifyMx,
          requestParameters.verifySmtp,
          requestParameters.detectName,
          requestParameters.suggestDomain,
          requestParameters.checkDomainAge,
          requestParameters.checkDomainRegistration,
          requestParameters.timeout,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetEmailDetails operation in EmailApi.
 */
export interface EmailApiV1GetEmailDetailsRequest {
  /**
   * Email address to validate
   */
  readonly email?: string;

  /**
   * Verify MX records - optional
   */
  readonly verifyMx?: boolean;

  /**
   * Verify SMTP connection - optional
   */
  readonly verifySmtp?: boolean;

  /**
   * Detect name from email address - optional
   */
  readonly detectName?: boolean;

  /**
   * Suggest domain corrections for typos - optional
   */
  readonly suggestDomain?: boolean;

  /**
   * Check domain age - optional
   */
  readonly checkDomainAge?: boolean;

  /**
   * Check domain registration details - optional
   */
  readonly checkDomainRegistration?: boolean;

  /**
   * Timeout in milliseconds (max: 10000)
   */
  readonly timeout?: number;
}

/**
 * EmailApi - object-oriented interface
 */
export class EmailApi extends BaseAPI {
  /**
   * Get Email Details - Validate and verify email address
   * @param {EmailApiV1GetEmailDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetEmailDetails(requestParameters: EmailApiV1GetEmailDetailsRequest = {}, options?: RawAxiosRequestConfig) {
    return EmailApiFp(this.configuration)
      .v1GetEmailDetails(
        requestParameters.email,
        requestParameters.verifyMx,
        requestParameters.verifySmtp,
        requestParameters.detectName,
        requestParameters.suggestDomain,
        requestParameters.checkDomainAge,
        requestParameters.checkDomainRegistration,
        requestParameters.timeout,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * IPApi - axios parameter creator
 */
export const IPApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Retrieves comprehensive geolocation data including country, city, ASN, and ISP information. Default provider is configurable via IP_PROVIDER environment variable (defaults to \'maxmind\').
   * @param {string} [ip] IP address to lookup (IPv4 or IPv6). If not provided, uses the request IP - optional
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetIpDetails: async (ip?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (ip !== undefined) {
      localVarQueryParameter['ip'] = ip;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * IPApi - functional programming interface
 */
export const IPApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = IPApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves comprehensive geolocation data including country, city, ASN, and ISP information. Default provider is configurable via IP_PROVIDER environment variable (defaults to \'maxmind\').
     * @param {string} [ip] IP address to lookup (IPv4 or IPv6). If not provided, uses the request IP - optional
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetIpDetails(
      ip?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIpDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetIpDetails(ip, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['IPApi.v1GetIpDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * IPApi - factory interface
 */
export const IPApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = IPApiFp(configuration);
  return {
    /**
     * Retrieves comprehensive geolocation data including country, city, ASN, and ISP information. Default provider is configurable via IP_PROVIDER environment variable (defaults to \'maxmind\').
     * @param {IPApiV1GetIpDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetIpDetails(
      requestParameters: IPApiV1GetIpDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetIpDetailsOut> {
      return localVarFp.v1GetIpDetails(requestParameters.ip, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetIpDetails operation in IPApi.
 */
export interface IPApiV1GetIpDetailsRequest {
  /**
   * IP address to lookup (IPv4 or IPv6). If not provided, uses the request IP - optional
   */
  readonly ip?: string;
}

/**
 * IPApi - object-oriented interface
 */
export class IPApi extends BaseAPI {
  /**
   * Retrieves comprehensive geolocation data including country, city, ASN, and ISP information. Default provider is configurable via IP_PROVIDER environment variable (defaults to \'maxmind\').
   * @param {IPApiV1GetIpDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetIpDetails(requestParameters: IPApiV1GetIpDetailsRequest = {}, options?: RawAxiosRequestConfig) {
    return IPApiFp(this.configuration)
      .v1GetIpDetails(requestParameters.ip, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * OneTimeURLApi - axios parameter creator
 */
export const OneTimeURLApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Creates a one-time URL that will self-destruct after being accessed or after the specified lifetime expires. Perfect for sharing sensitive information securely.
   * @param {CreateOnetimeUrlIn} createOnetimeUrlIn One-time URL configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateOnetimeUrl: async (
    createOnetimeUrlIn: CreateOnetimeUrlIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'createOnetimeUrlIn' is not null or undefined
    assertParamExists('v1CreateOnetimeUrl', 'createOnetimeUrlIn', createOnetimeUrlIn);
    const localVarPath = `/v1-create-onetime-url`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(createOnetimeUrlIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Deletes a one-time URL before it expires. Requires authentication or the correct passphrase.
   * @param {DeleteOnetimeUrlIn} deleteOnetimeUrlIn Delete request parameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1DeleteOnetimeUrl: async (
    deleteOnetimeUrlIn: DeleteOnetimeUrlIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'deleteOnetimeUrlIn' is not null or undefined
    assertParamExists('v1DeleteOnetimeUrl', 'deleteOnetimeUrlIn', deleteOnetimeUrlIn);
    const localVarPath = `/v1-delete-onetime-url`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(deleteOnetimeUrlIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get One-Time URL Details - Retrieve and consume a one-time URL
   * @param {string} [sid] Short ID of the one-time URL
   * @param {string} [id] Database ID of the one-time URL record
   * @param {V1GetOnetimeUrlDetailsDomainEnum} [domain] Domain used for the one-time URL
   * @param {string} [passphrase] Passphrase to access protected content
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetOnetimeUrlDetails: async (
    sid?: string,
    id?: string,
    domain?: V1GetOnetimeUrlDetailsDomainEnum,
    passphrase?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-onetime-url-details`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    if (id !== undefined) {
      localVarQueryParameter['_id'] = id;
    }

    if (domain !== undefined) {
      localVarQueryParameter['domain'] = domain;
    }

    if (passphrase !== undefined) {
      localVarQueryParameter['passphrase'] = passphrase;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List One-Time URLs - Retrieve user\'s one-time URLs
   * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;expireAt\&quot;]
   * @param {number} [page] Page number for pagination - Default: 1
   * @param {number} [pageSize] Number of items per page - Default: 200
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListOnetimeUrls: async (
    sort?: Array<string>,
    page?: number,
    pageSize?: number,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-list-onetime-urls`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * OneTimeURLApi - functional programming interface
 */
export const OneTimeURLApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = OneTimeURLApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a one-time URL that will self-destruct after being accessed or after the specified lifetime expires. Perfect for sharing sensitive information securely.
     * @param {CreateOnetimeUrlIn} createOnetimeUrlIn One-time URL configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateOnetimeUrl(
      createOnetimeUrlIn: CreateOnetimeUrlIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateOnetimeUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateOnetimeUrl(createOnetimeUrlIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['OneTimeURLApi.v1CreateOnetimeUrl']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Deletes a one-time URL before it expires. Requires authentication or the correct passphrase.
     * @param {DeleteOnetimeUrlIn} deleteOnetimeUrlIn Delete request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1DeleteOnetimeUrl(
      deleteOnetimeUrlIn: DeleteOnetimeUrlIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteOnetimeUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1DeleteOnetimeUrl(deleteOnetimeUrlIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['OneTimeURLApi.v1DeleteOnetimeUrl']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get One-Time URL Details - Retrieve and consume a one-time URL
     * @param {string} [sid] Short ID of the one-time URL
     * @param {string} [id] Database ID of the one-time URL record
     * @param {V1GetOnetimeUrlDetailsDomainEnum} [domain] Domain used for the one-time URL
     * @param {string} [passphrase] Passphrase to access protected content
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetOnetimeUrlDetails(
      sid?: string,
      id?: string,
      domain?: V1GetOnetimeUrlDetailsDomainEnum,
      passphrase?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOnetimeUrlDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetOnetimeUrlDetails(
        sid,
        id,
        domain,
        passphrase,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['OneTimeURLApi.v1GetOnetimeUrlDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List One-Time URLs - Retrieve user\'s one-time URLs
     * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;expireAt\&quot;]
     * @param {number} [page] Page number for pagination - Default: 1
     * @param {number} [pageSize] Number of items per page - Default: 200
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListOnetimeUrls(
      sort?: Array<string>,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListOnetimeUrlsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListOnetimeUrls(sort, page, pageSize, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['OneTimeURLApi.v1ListOnetimeUrls']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * OneTimeURLApi - factory interface
 */
export const OneTimeURLApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = OneTimeURLApiFp(configuration);
  return {
    /**
     * Creates a one-time URL that will self-destruct after being accessed or after the specified lifetime expires. Perfect for sharing sensitive information securely.
     * @param {OneTimeURLApiV1CreateOnetimeUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateOnetimeUrl(
      requestParameters: OneTimeURLApiV1CreateOnetimeUrlRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<CreateOnetimeUrlOut> {
      return localVarFp
        .v1CreateOnetimeUrl(requestParameters.createOnetimeUrlIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a one-time URL before it expires. Requires authentication or the correct passphrase.
     * @param {OneTimeURLApiV1DeleteOnetimeUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteOnetimeUrl(
      requestParameters: OneTimeURLApiV1DeleteOnetimeUrlRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<DeleteOnetimeUrlOut> {
      return localVarFp
        .v1DeleteOnetimeUrl(requestParameters.deleteOnetimeUrlIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get One-Time URL Details - Retrieve and consume a one-time URL
     * @param {OneTimeURLApiV1GetOnetimeUrlDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetOnetimeUrlDetails(
      requestParameters: OneTimeURLApiV1GetOnetimeUrlDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetOnetimeUrlDetailsOut> {
      return localVarFp
        .v1GetOnetimeUrlDetails(
          requestParameters.sid,
          requestParameters.id,
          requestParameters.domain,
          requestParameters.passphrase,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List One-Time URLs - Retrieve user\'s one-time URLs
     * @param {OneTimeURLApiV1ListOnetimeUrlsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListOnetimeUrls(
      requestParameters: OneTimeURLApiV1ListOnetimeUrlsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListOnetimeUrlsOut> {
      return localVarFp
        .v1ListOnetimeUrls(requestParameters.sort, requestParameters.page, requestParameters.pageSize, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateOnetimeUrl operation in OneTimeURLApi.
 */
export interface OneTimeURLApiV1CreateOnetimeUrlRequest {
  /**
   * One-time URL configuration
   */
  readonly createOnetimeUrlIn: CreateOnetimeUrlIn;
}

/**
 * Request parameters for v1DeleteOnetimeUrl operation in OneTimeURLApi.
 */
export interface OneTimeURLApiV1DeleteOnetimeUrlRequest {
  /**
   * Delete request parameters
   */
  readonly deleteOnetimeUrlIn: DeleteOnetimeUrlIn;
}

/**
 * Request parameters for v1GetOnetimeUrlDetails operation in OneTimeURLApi.
 */
export interface OneTimeURLApiV1GetOnetimeUrlDetailsRequest {
  /**
   * Short ID of the one-time URL
   */
  readonly sid?: string;

  /**
   * Database ID of the one-time URL record
   */
  readonly id?: string;

  /**
   * Domain used for the one-time URL
   */
  readonly domain?: V1GetOnetimeUrlDetailsDomainEnum;

  /**
   * Passphrase to access protected content
   */
  readonly passphrase?: string;
}

/**
 * Request parameters for v1ListOnetimeUrls operation in OneTimeURLApi.
 */
export interface OneTimeURLApiV1ListOnetimeUrlsRequest {
  /**
   * Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;expireAt\&quot;]
   */
  readonly sort?: Array<string>;

  /**
   * Page number for pagination - Default: 1
   */
  readonly page?: number;

  /**
   * Number of items per page - Default: 200
   */
  readonly pageSize?: number;
}

/**
 * OneTimeURLApi - object-oriented interface
 */
export class OneTimeURLApi extends BaseAPI {
  /**
   * Creates a one-time URL that will self-destruct after being accessed or after the specified lifetime expires. Perfect for sharing sensitive information securely.
   * @param {OneTimeURLApiV1CreateOnetimeUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateOnetimeUrl(
    requestParameters: OneTimeURLApiV1CreateOnetimeUrlRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return OneTimeURLApiFp(this.configuration)
      .v1CreateOnetimeUrl(requestParameters.createOnetimeUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a one-time URL before it expires. Requires authentication or the correct passphrase.
   * @param {OneTimeURLApiV1DeleteOnetimeUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1DeleteOnetimeUrl(
    requestParameters: OneTimeURLApiV1DeleteOnetimeUrlRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return OneTimeURLApiFp(this.configuration)
      .v1DeleteOnetimeUrl(requestParameters.deleteOnetimeUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get One-Time URL Details - Retrieve and consume a one-time URL
   * @param {OneTimeURLApiV1GetOnetimeUrlDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetOnetimeUrlDetails(
    requestParameters: OneTimeURLApiV1GetOnetimeUrlDetailsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return OneTimeURLApiFp(this.configuration)
      .v1GetOnetimeUrlDetails(
        requestParameters.sid,
        requestParameters.id,
        requestParameters.domain,
        requestParameters.passphrase,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List One-Time URLs - Retrieve user\'s one-time URLs
   * @param {OneTimeURLApiV1ListOnetimeUrlsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListOnetimeUrls(
    requestParameters: OneTimeURLApiV1ListOnetimeUrlsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return OneTimeURLApiFp(this.configuration)
      .v1ListOnetimeUrls(requestParameters.sort, requestParameters.page, requestParameters.pageSize, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const V1GetOnetimeUrlDetailsDomainEnum = {
  UrLink: 'ur.link',
  CfgMe: 'cfg.me',
  InMt: 'in.mt',
  WallSh: 'wall.sh',
  CiaSh: 'cia.sh',
} as const;
export type V1GetOnetimeUrlDetailsDomainEnum =
  (typeof V1GetOnetimeUrlDetailsDomainEnum)[keyof typeof V1GetOnetimeUrlDetailsDomainEnum];

/**
 * PhoneApi - axios parameter creator
 */
export const PhoneApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Get Phone Details - Validate and get phone number information
   * @param {string} [phone] Phone number to validate (with or without + prefix)
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetPhoneDetails: async (phone?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (phone !== undefined) {
      localVarQueryParameter['phone'] = phone;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * PhoneApi - functional programming interface
 */
export const PhoneApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = PhoneApiAxiosParamCreator(configuration);
  return {
    /**
     * Get Phone Details - Validate and get phone number information
     * @param {string} [phone] Phone number to validate (with or without + prefix)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetPhoneDetails(
      phone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPhoneDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetPhoneDetails(phone, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PhoneApi.v1GetPhoneDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * PhoneApi - factory interface
 */
export const PhoneApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = PhoneApiFp(configuration);
  return {
    /**
     * Get Phone Details - Validate and get phone number information
     * @param {PhoneApiV1GetPhoneDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetPhoneDetails(
      requestParameters: PhoneApiV1GetPhoneDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetPhoneDetailsOut> {
      return localVarFp.v1GetPhoneDetails(requestParameters.phone, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1GetPhoneDetails operation in PhoneApi.
 */
export interface PhoneApiV1GetPhoneDetailsRequest {
  /**
   * Phone number to validate (with or without + prefix)
   */
  readonly phone?: string;
}

/**
 * PhoneApi - object-oriented interface
 */
export class PhoneApi extends BaseAPI {
  /**
   * Get Phone Details - Validate and get phone number information
   * @param {PhoneApiV1GetPhoneDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetPhoneDetails(requestParameters: PhoneApiV1GetPhoneDetailsRequest = {}, options?: RawAxiosRequestConfig) {
    return PhoneApiFp(this.configuration)
      .v1GetPhoneDetails(requestParameters.phone, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * QRCodeApi - axios parameter creator
 */
export const QRCodeApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Create QR Code - Generate a new QR code
   * @param {CreateQrCodeIn} createQrCodeIn QR code configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateQrCode: async (createQrCodeIn: CreateQrCodeIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'createQrCodeIn' is not null or undefined
    assertParamExists('v1CreateQrCode', 'createQrCodeIn', createQrCodeIn);
    const localVarPath = `/v1-create-qr-code`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(createQrCodeIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Track QR View - Track when a QR code is viewed/scanned
   * @param {string} sid Short ID of the QR code
   * @param {TrackQrViewIn} [trackQrViewIn] Tracking data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateTrackQrView: async (
    sid: string,
    trackQrViewIn?: TrackQrViewIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'sid' is not null or undefined
    assertParamExists('v1CreateTrackQrView', 'sid', sid);
    const localVarPath = `/v1-track-qr-view`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(trackQrViewIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Delete QR Code - Permanently remove a QR code
   * @param {DeleteQrCodeIn} deleteQrCodeIn Delete configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1DeleteQrCode: async (deleteQrCodeIn: DeleteQrCodeIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'deleteQrCodeIn' is not null or undefined
    assertParamExists('v1DeleteQrCode', 'deleteQrCodeIn', deleteQrCodeIn);
    const localVarPath = `/v1-delete-qr-code`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(deleteQrCodeIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get QR Code Analytics - Retrieve detailed analytics for a QR code
   * @param {string} [sid] Short ID of the QR code
   * @param {string} [id] Database ID of the QR code
   * @param {string} [from] Start date for analytics (ISO 8601)
   * @param {string} [to] End date for analytics (ISO 8601)
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetQrCodeAnalytics: async (
    sid?: string,
    id?: string,
    from?: string,
    to?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-qr-code-analytics`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    if (id !== undefined) {
      localVarQueryParameter['_id'] = id;
    }

    if (from !== undefined) {
      localVarQueryParameter['from'] = from;
    }

    if (to !== undefined) {
      localVarQueryParameter['to'] = to;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get QR Code Details - Retrieve QR code information for UI
   * @param {string} [sid] Short ID of the QR code
   * @param {string} [id] Database ID of the QR code
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetQrCodeDetails: async (sid?: string, id?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-qr-code-details`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    if (id !== undefined) {
      localVarQueryParameter['_id'] = id;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get QR Code Preview - Generate a QR code preview as base64 image
   * @param {PreviewQrCodeIn} previewQrCodeIn QR code configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetQrCodePreview: async (
    previewQrCodeIn: PreviewQrCodeIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'previewQrCodeIn' is not null or undefined
    assertParamExists('v1GetQrCodePreview', 'previewQrCodeIn', previewQrCodeIn);
    const localVarPath = `/v1-get-qr-code-preview`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(previewQrCodeIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List QR Codes - Get paginated list of user\'s QR codes
   * @param {string} [page] Page number (default: 1)
   * @param {string} [pageSize] Items per page (default: 20, max: 100)
   * @param {V1ListQrCodesTypeEnum} [type] Filter by QR code type
   * @param {boolean} [isActive] Filter by active status
   * @param {V1ListQrCodesSortEnum} [sort] Sort field
   * @param {string} [search] Search in data field
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListQrCodes: async (
    page?: string,
    pageSize?: string,
    type?: V1ListQrCodesTypeEnum,
    isActive?: boolean,
    sort?: V1ListQrCodesSortEnum,
    search?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-list-qr-codes`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (page !== undefined) {
      localVarQueryParameter['page'] = page;
    }

    if (pageSize !== undefined) {
      localVarQueryParameter['pageSize'] = pageSize;
    }

    if (type !== undefined) {
      localVarQueryParameter['type'] = type;
    }

    if (isActive !== undefined) {
      localVarQueryParameter['isActive'] = isActive;
    }

    if (sort !== undefined) {
      localVarQueryParameter['sort'] = sort;
    }

    if (search !== undefined) {
      localVarQueryParameter['search'] = search;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Update QR Code - Modify an existing QR code
   * @param {UpdateQrCodeIn} updateQrCodeIn Update configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1UpdateQrCode: async (updateQrCodeIn: UpdateQrCodeIn, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'updateQrCodeIn' is not null or undefined
    assertParamExists('v1UpdateQrCode', 'updateQrCodeIn', updateQrCodeIn);
    const localVarPath = `/v1-update-qr-code`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(updateQrCodeIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * QRCodeApi - functional programming interface
 */
export const QRCodeApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = QRCodeApiAxiosParamCreator(configuration);
  return {
    /**
     * Create QR Code - Generate a new QR code
     * @param {CreateQrCodeIn} createQrCodeIn QR code configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateQrCode(
      createQrCodeIn: CreateQrCodeIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateQrCodeOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateQrCode(createQrCodeIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1CreateQrCode']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Track QR View - Track when a QR code is viewed/scanned
     * @param {string} sid Short ID of the QR code
     * @param {TrackQrViewIn} [trackQrViewIn] Tracking data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateTrackQrView(
      sid: string,
      trackQrViewIn?: TrackQrViewIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackQrViewOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateTrackQrView(sid, trackQrViewIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1CreateTrackQrView']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete QR Code - Permanently remove a QR code
     * @param {DeleteQrCodeIn} deleteQrCodeIn Delete configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1DeleteQrCode(
      deleteQrCodeIn: DeleteQrCodeIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteQrCodeOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1DeleteQrCode(deleteQrCodeIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1DeleteQrCode']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get QR Code Analytics - Retrieve detailed analytics for a QR code
     * @param {string} [sid] Short ID of the QR code
     * @param {string} [id] Database ID of the QR code
     * @param {string} [from] Start date for analytics (ISO 8601)
     * @param {string} [to] End date for analytics (ISO 8601)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetQrCodeAnalytics(
      sid?: string,
      id?: string,
      from?: string,
      to?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQrCodeAnalyticsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetQrCodeAnalytics(sid, id, from, to, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1GetQrCodeAnalytics']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get QR Code Details - Retrieve QR code information for UI
     * @param {string} [sid] Short ID of the QR code
     * @param {string} [id] Database ID of the QR code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetQrCodeDetails(
      sid?: string,
      id?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQrCodeDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetQrCodeDetails(sid, id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1GetQrCodeDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get QR Code Preview - Generate a QR code preview as base64 image
     * @param {PreviewQrCodeIn} previewQrCodeIn QR code configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetQrCodePreview(
      previewQrCodeIn: PreviewQrCodeIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreviewQrCodeOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetQrCodePreview(previewQrCodeIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1GetQrCodePreview']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List QR Codes - Get paginated list of user\'s QR codes
     * @param {string} [page] Page number (default: 1)
     * @param {string} [pageSize] Items per page (default: 20, max: 100)
     * @param {V1ListQrCodesTypeEnum} [type] Filter by QR code type
     * @param {boolean} [isActive] Filter by active status
     * @param {V1ListQrCodesSortEnum} [sort] Sort field
     * @param {string} [search] Search in data field
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListQrCodes(
      page?: string,
      pageSize?: string,
      type?: V1ListQrCodesTypeEnum,
      isActive?: boolean,
      sort?: V1ListQrCodesSortEnum,
      search?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListQrCodesOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListQrCodes(
        page,
        pageSize,
        type,
        isActive,
        sort,
        search,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1ListQrCodes']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update QR Code - Modify an existing QR code
     * @param {UpdateQrCodeIn} updateQrCodeIn Update configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1UpdateQrCode(
      updateQrCodeIn: UpdateQrCodeIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateQrCodeOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1UpdateQrCode(updateQrCodeIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['QRCodeApi.v1UpdateQrCode']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * QRCodeApi - factory interface
 */
export const QRCodeApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = QRCodeApiFp(configuration);
  return {
    /**
     * Create QR Code - Generate a new QR code
     * @param {QRCodeApiV1CreateQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateQrCode(
      requestParameters: QRCodeApiV1CreateQrCodeRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<CreateQrCodeOut> {
      return localVarFp
        .v1CreateQrCode(requestParameters.createQrCodeIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Track QR View - Track when a QR code is viewed/scanned
     * @param {QRCodeApiV1CreateTrackQrViewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateTrackQrView(
      requestParameters: QRCodeApiV1CreateTrackQrViewRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<TrackQrViewOut> {
      return localVarFp
        .v1CreateTrackQrView(requestParameters.sid, requestParameters.trackQrViewIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete QR Code - Permanently remove a QR code
     * @param {QRCodeApiV1DeleteQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteQrCode(
      requestParameters: QRCodeApiV1DeleteQrCodeRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<DeleteQrCodeOut> {
      return localVarFp
        .v1DeleteQrCode(requestParameters.deleteQrCodeIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get QR Code Analytics - Retrieve detailed analytics for a QR code
     * @param {QRCodeApiV1GetQrCodeAnalyticsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetQrCodeAnalytics(
      requestParameters: QRCodeApiV1GetQrCodeAnalyticsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetQrCodeAnalyticsOut> {
      return localVarFp
        .v1GetQrCodeAnalytics(
          requestParameters.sid,
          requestParameters.id,
          requestParameters.from,
          requestParameters.to,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get QR Code Details - Retrieve QR code information for UI
     * @param {QRCodeApiV1GetQrCodeDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetQrCodeDetails(
      requestParameters: QRCodeApiV1GetQrCodeDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetQrCodeDetailsOut> {
      return localVarFp
        .v1GetQrCodeDetails(requestParameters.sid, requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get QR Code Preview - Generate a QR code preview as base64 image
     * @param {QRCodeApiV1GetQrCodePreviewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetQrCodePreview(
      requestParameters: QRCodeApiV1GetQrCodePreviewRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<PreviewQrCodeOut> {
      return localVarFp
        .v1GetQrCodePreview(requestParameters.previewQrCodeIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List QR Codes - Get paginated list of user\'s QR codes
     * @param {QRCodeApiV1ListQrCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListQrCodes(
      requestParameters: QRCodeApiV1ListQrCodesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListQrCodesOut> {
      return localVarFp
        .v1ListQrCodes(
          requestParameters.page,
          requestParameters.pageSize,
          requestParameters.type,
          requestParameters.isActive,
          requestParameters.sort,
          requestParameters.search,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update QR Code - Modify an existing QR code
     * @param {QRCodeApiV1UpdateQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1UpdateQrCode(
      requestParameters: QRCodeApiV1UpdateQrCodeRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<UpdateQrCodeOut> {
      return localVarFp
        .v1UpdateQrCode(requestParameters.updateQrCodeIn, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateQrCode operation in QRCodeApi.
 */
export interface QRCodeApiV1CreateQrCodeRequest {
  /**
   * QR code configuration
   */
  readonly createQrCodeIn: CreateQrCodeIn;
}

/**
 * Request parameters for v1CreateTrackQrView operation in QRCodeApi.
 */
export interface QRCodeApiV1CreateTrackQrViewRequest {
  /**
   * Short ID of the QR code
   */
  readonly sid: string;

  /**
   * Tracking data
   */
  readonly trackQrViewIn?: TrackQrViewIn;
}

/**
 * Request parameters for v1DeleteQrCode operation in QRCodeApi.
 */
export interface QRCodeApiV1DeleteQrCodeRequest {
  /**
   * Delete configuration
   */
  readonly deleteQrCodeIn: DeleteQrCodeIn;
}

/**
 * Request parameters for v1GetQrCodeAnalytics operation in QRCodeApi.
 */
export interface QRCodeApiV1GetQrCodeAnalyticsRequest {
  /**
   * Short ID of the QR code
   */
  readonly sid?: string;

  /**
   * Database ID of the QR code
   */
  readonly id?: string;

  /**
   * Start date for analytics (ISO 8601)
   */
  readonly from?: string;

  /**
   * End date for analytics (ISO 8601)
   */
  readonly to?: string;
}

/**
 * Request parameters for v1GetQrCodeDetails operation in QRCodeApi.
 */
export interface QRCodeApiV1GetQrCodeDetailsRequest {
  /**
   * Short ID of the QR code
   */
  readonly sid?: string;

  /**
   * Database ID of the QR code
   */
  readonly id?: string;
}

/**
 * Request parameters for v1GetQrCodePreview operation in QRCodeApi.
 */
export interface QRCodeApiV1GetQrCodePreviewRequest {
  /**
   * QR code configuration
   */
  readonly previewQrCodeIn: PreviewQrCodeIn;
}

/**
 * Request parameters for v1ListQrCodes operation in QRCodeApi.
 */
export interface QRCodeApiV1ListQrCodesRequest {
  /**
   * Page number (default: 1)
   */
  readonly page?: string;

  /**
   * Items per page (default: 20, max: 100)
   */
  readonly pageSize?: string;

  /**
   * Filter by QR code type
   */
  readonly type?: V1ListQrCodesTypeEnum;

  /**
   * Filter by active status
   */
  readonly isActive?: boolean;

  /**
   * Sort field
   */
  readonly sort?: V1ListQrCodesSortEnum;

  /**
   * Search in data field
   */
  readonly search?: string;
}

/**
 * Request parameters for v1UpdateQrCode operation in QRCodeApi.
 */
export interface QRCodeApiV1UpdateQrCodeRequest {
  /**
   * Update configuration
   */
  readonly updateQrCodeIn: UpdateQrCodeIn;
}

/**
 * QRCodeApi - object-oriented interface
 */
export class QRCodeApi extends BaseAPI {
  /**
   * Create QR Code - Generate a new QR code
   * @param {QRCodeApiV1CreateQrCodeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateQrCode(requestParameters: QRCodeApiV1CreateQrCodeRequest, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1CreateQrCode(requestParameters.createQrCodeIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Track QR View - Track when a QR code is viewed/scanned
   * @param {QRCodeApiV1CreateTrackQrViewRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateTrackQrView(requestParameters: QRCodeApiV1CreateTrackQrViewRequest, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1CreateTrackQrView(requestParameters.sid, requestParameters.trackQrViewIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete QR Code - Permanently remove a QR code
   * @param {QRCodeApiV1DeleteQrCodeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1DeleteQrCode(requestParameters: QRCodeApiV1DeleteQrCodeRequest, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1DeleteQrCode(requestParameters.deleteQrCodeIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get QR Code Analytics - Retrieve detailed analytics for a QR code
   * @param {QRCodeApiV1GetQrCodeAnalyticsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetQrCodeAnalytics(
    requestParameters: QRCodeApiV1GetQrCodeAnalyticsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return QRCodeApiFp(this.configuration)
      .v1GetQrCodeAnalytics(
        requestParameters.sid,
        requestParameters.id,
        requestParameters.from,
        requestParameters.to,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get QR Code Details - Retrieve QR code information for UI
   * @param {QRCodeApiV1GetQrCodeDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetQrCodeDetails(
    requestParameters: QRCodeApiV1GetQrCodeDetailsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return QRCodeApiFp(this.configuration)
      .v1GetQrCodeDetails(requestParameters.sid, requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get QR Code Preview - Generate a QR code preview as base64 image
   * @param {QRCodeApiV1GetQrCodePreviewRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetQrCodePreview(requestParameters: QRCodeApiV1GetQrCodePreviewRequest, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1GetQrCodePreview(requestParameters.previewQrCodeIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List QR Codes - Get paginated list of user\'s QR codes
   * @param {QRCodeApiV1ListQrCodesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListQrCodes(requestParameters: QRCodeApiV1ListQrCodesRequest = {}, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1ListQrCodes(
        requestParameters.page,
        requestParameters.pageSize,
        requestParameters.type,
        requestParameters.isActive,
        requestParameters.sort,
        requestParameters.search,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update QR Code - Modify an existing QR code
   * @param {QRCodeApiV1UpdateQrCodeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1UpdateQrCode(requestParameters: QRCodeApiV1UpdateQrCodeRequest, options?: RawAxiosRequestConfig) {
    return QRCodeApiFp(this.configuration)
      .v1UpdateQrCode(requestParameters.updateQrCodeIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const V1ListQrCodesTypeEnum = {
  Url: 'url',
  Text: 'text',
  Email: 'email',
  Phone: 'phone',
  Sms: 'sms',
  Wifi: 'wifi',
  Vcard: 'vcard',
} as const;
export type V1ListQrCodesTypeEnum = (typeof V1ListQrCodesTypeEnum)[keyof typeof V1ListQrCodesTypeEnum];
export const V1ListQrCodesSortEnum = {
  CreatedAt: 'createdAt',
  CreatedAt2: '-createdAt',
  Scans: 'scans',
  Scans2: '-scans',
  UpdatedAt: 'updatedAt',
  UpdatedAt2: '-updatedAt',
} as const;
export type V1ListQrCodesSortEnum = (typeof V1ListQrCodesSortEnum)[keyof typeof V1ListQrCodesSortEnum];

/**
 * ShortURLApi - axios parameter creator
 */
export const ShortURLApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Create multiple short URLs in a single request. Supports custom domains based on user settings.
   * @param {CreateBulkShortUrlsRequest} createBulkShortUrlsRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateBulkShortUrls: async (
    createBulkShortUrlsRequest: CreateBulkShortUrlsRequest,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'createBulkShortUrlsRequest' is not null or undefined
    assertParamExists('v1CreateBulkShortUrls', 'createBulkShortUrlsRequest', createBulkShortUrlsRequest);
    const localVarPath = `/v1-create-bulk-short-urls`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(
      createBulkShortUrlsRequest,
      localVarRequestOptions,
      configuration,
    );

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Creates a shortened URL that redirects to the original URL. Validates the URL and checks against blocked domains.
   * @param {CreateShortUrlIn} createShortUrlIn Short URL configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateShortUrl: async (
    createShortUrlIn: CreateShortUrlIn,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(createShortUrlIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Deletes a shortened URL. Requires authentication and ownership of the URL.
   * @param {DeleteShortUrlIn} deleteShortUrlIn Delete request parameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1DeleteShortUrl: async (
    deleteShortUrlIn: DeleteShortUrlIn,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(deleteShortUrlIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Fetches detailed analytics including click data and visitor information for a shortened URL.
   * @param {string} [sid] Short ID of the URL - eg: abc123
   * @param {string} [domain] Domain of the short URL - eg: in.mt
   * @param {string} [id] Database ID of the short URL - optional
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetShortUrlAnalytics: async (
    sid?: string,
    domain?: string,
    id?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-get-short-url-analytics`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    if (domain !== undefined) {
      localVarQueryParameter['domain'] = domain;
    }

    if (id !== undefined) {
      localVarQueryParameter['_id'] = id;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Get Short URL Details - Retrieve details of a shortened URL
   * @param {string} [sid] Short ID of the URL
   * @param {V1GetShortUrlDetailsDomainEnum} [domain] Domain used for the short URL
   * @param {string} [id] Database ID of the short URL record
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1GetShortUrlDetails: async (
    sid?: string,
    domain?: V1GetShortUrlDetailsDomainEnum,
    id?: string,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (sid !== undefined) {
      localVarQueryParameter['sid'] = sid;
    }

    if (domain !== undefined) {
      localVarQueryParameter['domain'] = domain;
    }

    if (id !== undefined) {
      localVarQueryParameter['_id'] = id;
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * List Short URLs - Retrieve user\'s shortened URLs
   * @param {string} [batchId] Filter by batch ID (for bulk created items)
   * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;clicks\&quot;]
   * @param {number} [page] Page number for pagination - Default: 1
   * @param {number} [pageSize] Number of items per page - Default: 200
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1ListShortUrls: async (
    batchId?: string,
    sort?: Array<string>,
    page?: number,
    pageSize?: number,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    const localVarPath = `/v1-list-short-urls`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
      baseOptions = configuration.baseOptions;
    }

    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    if (batchId !== undefined) {
      localVarQueryParameter['batchId'] = batchId;
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
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
  /**
   * Updates the short ID or domain of an existing shortened URL. Requires authentication and ownership.
   * @param {UpdateShortUrlIn} updateShortUrlIn Update request parameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1UpdateShortUrl: async (
    updateShortUrlIn: UpdateShortUrlIn,
    options: RawAxiosRequestConfig = {},
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(updateShortUrlIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * ShortURLApi - functional programming interface
 */
export const ShortURLApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = ShortURLApiAxiosParamCreator(configuration);
  return {
    /**
     * Create multiple short URLs in a single request. Supports custom domains based on user settings.
     * @param {CreateBulkShortUrlsRequest} createBulkShortUrlsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateBulkShortUrls(
      createBulkShortUrlsRequest: CreateBulkShortUrlsRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateBulkShortUrlsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateBulkShortUrls(
        createBulkShortUrlsRequest,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1CreateBulkShortUrls']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Creates a shortened URL that redirects to the original URL. Validates the URL and checks against blocked domains.
     * @param {CreateShortUrlIn} createShortUrlIn Short URL configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateShortUrl(
      createShortUrlIn: CreateShortUrlIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateShortUrl(createShortUrlIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1CreateShortUrl']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Deletes a shortened URL. Requires authentication and ownership of the URL.
     * @param {DeleteShortUrlIn} deleteShortUrlIn Delete request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1DeleteShortUrl(
      deleteShortUrlIn: DeleteShortUrlIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1DeleteShortUrl(deleteShortUrlIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1DeleteShortUrl']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Fetches detailed analytics including click data and visitor information for a shortened URL.
     * @param {string} [sid] Short ID of the URL - eg: abc123
     * @param {string} [domain] Domain of the short URL - eg: in.mt
     * @param {string} [id] Database ID of the short URL - optional
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetShortUrlAnalytics(
      sid?: string,
      domain?: string,
      id?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetShortUrlAnalyticsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetShortUrlAnalytics(sid, domain, id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1GetShortUrlAnalytics']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Short URL Details - Retrieve details of a shortened URL
     * @param {string} [sid] Short ID of the URL
     * @param {V1GetShortUrlDetailsDomainEnum} [domain] Domain used for the short URL
     * @param {string} [id] Database ID of the short URL record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1GetShortUrlDetails(
      sid?: string,
      domain?: V1GetShortUrlDetailsDomainEnum,
      id?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetShortUrlDetailsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1GetShortUrlDetails(sid, domain, id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1GetShortUrlDetails']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List Short URLs - Retrieve user\'s shortened URLs
     * @param {string} [batchId] Filter by batch ID (for bulk created items)
     * @param {Array<string>} [sort] Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;clicks\&quot;]
     * @param {number} [page] Page number for pagination - Default: 1
     * @param {number} [pageSize] Number of items per page - Default: 200
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1ListShortUrls(
      batchId?: string,
      sort?: Array<string>,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListShortUrlsOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1ListShortUrls(batchId, sort, page, pageSize, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1ListShortUrls']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Updates the short ID or domain of an existing shortened URL. Requires authentication and ownership.
     * @param {UpdateShortUrlIn} updateShortUrlIn Update request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1UpdateShortUrl(
      updateShortUrlIn: UpdateShortUrlIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateShortUrlOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1UpdateShortUrl(updateShortUrlIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['ShortURLApi.v1UpdateShortUrl']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * ShortURLApi - factory interface
 */
export const ShortURLApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = ShortURLApiFp(configuration);
  return {
    /**
     * Create multiple short URLs in a single request. Supports custom domains based on user settings.
     * @param {ShortURLApiV1CreateBulkShortUrlsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateBulkShortUrls(
      requestParameters: ShortURLApiV1CreateBulkShortUrlsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<CreateBulkShortUrlsResponse> {
      return localVarFp
        .v1CreateBulkShortUrls(requestParameters.createBulkShortUrlsRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates a shortened URL that redirects to the original URL. Validates the URL and checks against blocked domains.
     * @param {ShortURLApiV1CreateShortUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateShortUrl(
      requestParameters: ShortURLApiV1CreateShortUrlRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<CreateShortUrlOut> {
      return localVarFp
        .v1CreateShortUrl(requestParameters.createShortUrlIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes a shortened URL. Requires authentication and ownership of the URL.
     * @param {ShortURLApiV1DeleteShortUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1DeleteShortUrl(
      requestParameters: ShortURLApiV1DeleteShortUrlRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<DeleteShortUrlOut> {
      return localVarFp
        .v1DeleteShortUrl(requestParameters.deleteShortUrlIn, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Fetches detailed analytics including click data and visitor information for a shortened URL.
     * @param {ShortURLApiV1GetShortUrlAnalyticsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetShortUrlAnalytics(
      requestParameters: ShortURLApiV1GetShortUrlAnalyticsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetShortUrlAnalyticsOut> {
      return localVarFp
        .v1GetShortUrlAnalytics(requestParameters.sid, requestParameters.domain, requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get Short URL Details - Retrieve details of a shortened URL
     * @param {ShortURLApiV1GetShortUrlDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1GetShortUrlDetails(
      requestParameters: ShortURLApiV1GetShortUrlDetailsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetShortUrlDetailsOut> {
      return localVarFp
        .v1GetShortUrlDetails(requestParameters.sid, requestParameters.domain, requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List Short URLs - Retrieve user\'s shortened URLs
     * @param {ShortURLApiV1ListShortUrlsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1ListShortUrls(
      requestParameters: ShortURLApiV1ListShortUrlsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListShortUrlsOut> {
      return localVarFp
        .v1ListShortUrls(
          requestParameters.batchId,
          requestParameters.sort,
          requestParameters.page,
          requestParameters.pageSize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Updates the short ID or domain of an existing shortened URL. Requires authentication and ownership.
     * @param {ShortURLApiV1UpdateShortUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1UpdateShortUrl(
      requestParameters: ShortURLApiV1UpdateShortUrlRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<UpdateShortUrlOut> {
      return localVarFp
        .v1UpdateShortUrl(requestParameters.updateShortUrlIn, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateBulkShortUrls operation in ShortURLApi.
 */
export interface ShortURLApiV1CreateBulkShortUrlsRequest {
  /**
   *
   */
  readonly createBulkShortUrlsRequest: CreateBulkShortUrlsRequest;
}

/**
 * Request parameters for v1CreateShortUrl operation in ShortURLApi.
 */
export interface ShortURLApiV1CreateShortUrlRequest {
  /**
   * Short URL configuration
   */
  readonly createShortUrlIn: CreateShortUrlIn;
}

/**
 * Request parameters for v1DeleteShortUrl operation in ShortURLApi.
 */
export interface ShortURLApiV1DeleteShortUrlRequest {
  /**
   * Delete request parameters
   */
  readonly deleteShortUrlIn: DeleteShortUrlIn;
}

/**
 * Request parameters for v1GetShortUrlAnalytics operation in ShortURLApi.
 */
export interface ShortURLApiV1GetShortUrlAnalyticsRequest {
  /**
   * Short ID of the URL - eg: abc123
   */
  readonly sid?: string;

  /**
   * Domain of the short URL - eg: in.mt
   */
  readonly domain?: string;

  /**
   * Database ID of the short URL - optional
   */
  readonly id?: string;
}

/**
 * Request parameters for v1GetShortUrlDetails operation in ShortURLApi.
 */
export interface ShortURLApiV1GetShortUrlDetailsRequest {
  /**
   * Short ID of the URL
   */
  readonly sid?: string;

  /**
   * Domain used for the short URL
   */
  readonly domain?: V1GetShortUrlDetailsDomainEnum;

  /**
   * Database ID of the short URL record
   */
  readonly id?: string;
}

/**
 * Request parameters for v1ListShortUrls operation in ShortURLApi.
 */
export interface ShortURLApiV1ListShortUrlsRequest {
  /**
   * Filter by batch ID (for bulk created items)
   */
  readonly batchId?: string;

  /**
   * Sort fields (prefix with - for descending) - eg: [\&quot;-createdAt\&quot;, \&quot;clicks\&quot;]
   */
  readonly sort?: Array<string>;

  /**
   * Page number for pagination - Default: 1
   */
  readonly page?: number;

  /**
   * Number of items per page - Default: 200
   */
  readonly pageSize?: number;
}

/**
 * Request parameters for v1UpdateShortUrl operation in ShortURLApi.
 */
export interface ShortURLApiV1UpdateShortUrlRequest {
  /**
   * Update request parameters
   */
  readonly updateShortUrlIn: UpdateShortUrlIn;
}

/**
 * ShortURLApi - object-oriented interface
 */
export class ShortURLApi extends BaseAPI {
  /**
   * Create multiple short URLs in a single request. Supports custom domains based on user settings.
   * @param {ShortURLApiV1CreateBulkShortUrlsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateBulkShortUrls(
    requestParameters: ShortURLApiV1CreateBulkShortUrlsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return ShortURLApiFp(this.configuration)
      .v1CreateBulkShortUrls(requestParameters.createBulkShortUrlsRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Creates a shortened URL that redirects to the original URL. Validates the URL and checks against blocked domains.
   * @param {ShortURLApiV1CreateShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateShortUrl(requestParameters: ShortURLApiV1CreateShortUrlRequest, options?: RawAxiosRequestConfig) {
    return ShortURLApiFp(this.configuration)
      .v1CreateShortUrl(requestParameters.createShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Deletes a shortened URL. Requires authentication and ownership of the URL.
   * @param {ShortURLApiV1DeleteShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1DeleteShortUrl(requestParameters: ShortURLApiV1DeleteShortUrlRequest, options?: RawAxiosRequestConfig) {
    return ShortURLApiFp(this.configuration)
      .v1DeleteShortUrl(requestParameters.deleteShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Fetches detailed analytics including click data and visitor information for a shortened URL.
   * @param {ShortURLApiV1GetShortUrlAnalyticsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetShortUrlAnalytics(
    requestParameters: ShortURLApiV1GetShortUrlAnalyticsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ShortURLApiFp(this.configuration)
      .v1GetShortUrlAnalytics(requestParameters.sid, requestParameters.domain, requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get Short URL Details - Retrieve details of a shortened URL
   * @param {ShortURLApiV1GetShortUrlDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1GetShortUrlDetails(
    requestParameters: ShortURLApiV1GetShortUrlDetailsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ShortURLApiFp(this.configuration)
      .v1GetShortUrlDetails(requestParameters.sid, requestParameters.domain, requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List Short URLs - Retrieve user\'s shortened URLs
   * @param {ShortURLApiV1ListShortUrlsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1ListShortUrls(requestParameters: ShortURLApiV1ListShortUrlsRequest = {}, options?: RawAxiosRequestConfig) {
    return ShortURLApiFp(this.configuration)
      .v1ListShortUrls(
        requestParameters.batchId,
        requestParameters.sort,
        requestParameters.page,
        requestParameters.pageSize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Updates the short ID or domain of an existing shortened URL. Requires authentication and ownership.
   * @param {ShortURLApiV1UpdateShortUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1UpdateShortUrl(requestParameters: ShortURLApiV1UpdateShortUrlRequest, options?: RawAxiosRequestConfig) {
    return ShortURLApiFp(this.configuration)
      .v1UpdateShortUrl(requestParameters.updateShortUrlIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const V1GetShortUrlDetailsDomainEnum = {
  UrLink: 'ur.link',
  CfgMe: 'cfg.me',
  InMt: 'in.mt',
  WallSh: 'wall.sh',
  CiaSh: 'cia.sh',
} as const;
export type V1GetShortUrlDetailsDomainEnum =
  (typeof V1GetShortUrlDetailsDomainEnum)[keyof typeof V1GetShortUrlDetailsDomainEnum];

/**
 * URLMetadataApi - axios parameter creator
 */
export const URLMetadataApiAxiosParamCreator = (configuration?: Configuration) => ({
  /**
   * Scrape URL Data - Extract metadata and Open Graph data from URL
   * @param {ScrapeUrlDataIn} scrapeUrlDataIn URL and options for scraping
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  v1CreateScrapeUrlData: async (
    scrapeUrlDataIn: ScrapeUrlDataIn,
    options: RawAxiosRequestConfig = {},
  ): Promise<RequestArgs> => {
    // verify required parameter 'scrapeUrlDataIn' is not null or undefined
    assertParamExists('v1CreateScrapeUrlData', 'scrapeUrlDataIn', scrapeUrlDataIn);
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

    // authentication APIKeyQueryParam required
    await setApiKeyToObject(localVarQueryParameter, 'x-api-key', configuration);

    // authentication APIKeyHeader required
    await setApiKeyToObject(localVarHeaderParameter, 'x-api-key', configuration);

    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
    localVarRequestOptions.data = serializeDataIfNeeded(scrapeUrlDataIn, localVarRequestOptions, configuration);

    return {
      url: toPathString(localVarUrlObj),
      options: localVarRequestOptions,
    };
  },
});

/**
 * URLMetadataApi - functional programming interface
 */
export const URLMetadataApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = URLMetadataApiAxiosParamCreator(configuration);
  return {
    /**
     * Scrape URL Data - Extract metadata and Open Graph data from URL
     * @param {ScrapeUrlDataIn} scrapeUrlDataIn URL and options for scraping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async v1CreateScrapeUrlData(
      scrapeUrlDataIn: ScrapeUrlDataIn,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScrapeUrlDataOut>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.v1CreateScrapeUrlData(scrapeUrlDataIn, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['URLMetadataApi.v1CreateScrapeUrlData']?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * URLMetadataApi - factory interface
 */
export const URLMetadataApiFactory = (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
  const localVarFp = URLMetadataApiFp(configuration);
  return {
    /**
     * Scrape URL Data - Extract metadata and Open Graph data from URL
     * @param {URLMetadataApiV1CreateScrapeUrlDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1CreateScrapeUrlData(
      requestParameters: URLMetadataApiV1CreateScrapeUrlDataRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ScrapeUrlDataOut> {
      return localVarFp
        .v1CreateScrapeUrlData(requestParameters.scrapeUrlDataIn, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for v1CreateScrapeUrlData operation in URLMetadataApi.
 */
export interface URLMetadataApiV1CreateScrapeUrlDataRequest {
  /**
   * URL and options for scraping
   */
  readonly scrapeUrlDataIn: ScrapeUrlDataIn;
}

/**
 * URLMetadataApi - object-oriented interface
 */
export class URLMetadataApi extends BaseAPI {
  /**
   * Scrape URL Data - Extract metadata and Open Graph data from URL
   * @param {URLMetadataApiV1CreateScrapeUrlDataRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public v1CreateScrapeUrlData(
    requestParameters: URLMetadataApiV1CreateScrapeUrlDataRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return URLMetadataApiFp(this.configuration)
      .v1CreateScrapeUrlData(requestParameters.scrapeUrlDataIn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
