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
   * currency name
   * @type {string}
   * @memberof GetCurrencyDetailsOut
   */
  name?: string;
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
   * Domain details
   * @type {string}
   * @memberof GetDomainWhoisOut
   */
  details?: string;
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

/**
 * @export
 * @enum {string}
 */
export enum ListCurrenciesItemTypeEnum {
  Fiat = 'fiat',
  Crypto = 'crypto',
}

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
  value?: string | number | null;
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
