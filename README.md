# DEV.ME SDK for JavaScript & TypeScript
[![Build Status](https://github.com/devmehq/devme-sdk-js/actions/workflows/ci.yml/badge.svg)](https://github.com/devmehq/devme-sdk-js/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@devmehq/sdk-js.svg)](https://www.npmjs.com/package/@devmehq/sdk-js)
[![Downloads](https://img.shields.io/npm/dm/@devmehq/sdk-js.svg)](https://www.npmjs.com/package/@devmehq/sdk-js)

DEV.ME SDK for JavaScript & TypeScript

> Works with Node.js and in The Browser, Compatible with Node.js & React.js & Vue.js & Angular.js

## Get Your Free API Key
[Signup Here](https://dev.me/signup) and Get Your Free API Key

## Installation and usage instructions

## Installation
Install the module through YARN:
```yarn
yarn add @devmehq/sdk-js
```
Or NPM
```npm
npm insgall @devmehq/sdk-js
```

## Examples

### Currency API Conversion
```typescript
import { CurrencyApi, Configuration } from '@devmehq/sdk-js';
const config = new Configuration({ apiKey: 'demo-key' });
const currencyApi = new CurrencyApi(config);

const result = await currencyApi.v1ConvertCurrency({
  amount: 10,
  from: 'USD',
  to: 'EUR',
});
// {
//   convertedAmount: 8.819,
//   convertedText: '10 USD equal to 8.819 EUR',
//   exchangeRate: 0.8819,
//   from: 'USD',
//   originalAmount: 10,
//   rateTime: '2022-01-20T14:49:28.046Z',
//   to: 'EUR'
// }
```

### IP API Geolocation, IP2Location, IP Data
```typescript
import { IPApi, Configuration } from '@devmehq/sdk-js';
const config = new Configuration({ apiKey: 'demo-key' });
const ipApi = new IPApi(config);

const result = await ipApi.v1GetIpDetails({ ip: '52.45.23.11' });

// {
//   asn: 14618,
//   aso: 'AMAZON-AES',
//   city: {
//   accuracyRadius: 1000,
//     latitude: 39.0469,
//     longitude: -77.4903,
//     metroCode: 511,
//     name: 'Ashburn',
//     timeZone: 'America/New_York',
//   },
//   countryCode: 'US',
//   ip: '52.45.23.11',
//   registeredCountryCode: 'US',
// }

```

## Testing
```shell
yarn test
```

## Contributing
Please feel free to open an issue or create a pull request and fix bugs or add features, All contributions are welcome. Thank you!

## LICENSE [MIT](LICENSE.md)
