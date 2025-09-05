# DEV.ME SDK for JavaScript & TypeScript

<div style="text-align: center;">

[![Build Status](https://github.com/devmehq/devme-sdk-js/actions/workflows/ci.yml/badge.svg)](https://github.com/devmehq/devme-sdk-js/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@devmehq/sdk-js.svg)](https://www.npmjs.com/package/@devmehq/sdk-js)
[![Downloads](https://img.shields.io/npm/dm/@devmehq/sdk-js.svg)](https://www.npmjs.com/package/@devmehq/sdk-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**The official JavaScript/TypeScript SDK for DEV.ME API Platform**

[Documentation](https://dev.me/docs) • [Get API Key](https://dev.me/signup) • [Support](mailto:support@dev.me)

</div>

## 🚀 Features

- **19 Powerful APIs** across 7 categories
- **TypeScript Support** with full type definitions
- **Universal Compatibility** - Works in Node.js, Browser, React, Vue, Angular
- **Promise-based** with async/await support
- **Comprehensive Error Handling**
- **Auto-retry Logic** for network failures
- **Lightweight** with minimal dependencies

## 📦 Installation

### Using npm

```bash
npm install @devmehq/sdk-js
```

### Using yarn

```bash
yarn add @devmehq/sdk-js
```

### Using pnpm

```bash
pnpm add @devmehq/sdk-js
```

## 🔑 Authentication

Get your free API key from [dev.me/signup](https://dev.me/signup)

```typescript
import { Configuration } from '@devmehq/sdk-js';

// Use demo key for testing (limited rate)
const config = new Configuration({ apiKey: 'demo-key' });

// Use your API key for production
const config = new Configuration({ apiKey: 'YOUR_API_KEY' });
```

## 📚 Available APIs

### 1️⃣ Validation & Verification APIs

#### Email Validation API

Validate email addresses with SMTP verification, domain checks, and name detection.

```typescript
import { EmailApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const emailApi = new EmailApi(config);

const { data } = await emailApi.v1GetEmailDetails({
  email: 'test@example.com',
  verifyMx: true,
  verifySmtp: true,
  suggestDomain: true,
});

console.log(data);
// {
//   email: 'test@example.com',
//   valid: true,
//   format: true,
//   domain: 'example.com',
//   disposable: false,
//   dns: true,
//   mxRecords: true,
//   smtpCheck: true,
//   catchAll: false,
//   role: false,
//   free: false
// }
```

#### Phone Validation API

Validate and get detailed information about phone numbers worldwide.

```typescript
import { PhoneApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const phoneApi = new PhoneApi(config);

const { data } = await phoneApi.v1GetPhoneDetails({
  phone: '+14155552671',
});

console.log(data);
// {
//   valid: true,
//   number: '14155552671',
//   localFormat: '(415) 555-2671',
//   internationalFormat: '+1 415-555-2671',
//   countryPrefix: '+1',
//   countryCode: 'US',
//   countryName: 'United States',
//   location: 'California',
//   carrier: 'AT&T',
//   lineType: 'mobile'
// }
```

#### IP Geolocation API

Get comprehensive IP address information including location, ISP, and security data.

```typescript
import { IPApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const ipApi = new IPApi(config);

const { data } = await ipApi.v1GetIpDetails({
  ip: '8.8.8.8',
});

console.log(data);
// {
//   ip: '8.8.8.8',
//   type: 'IPv4',
//   continent: 'North America',
//   continentCode: 'NA',
//   country: 'United States',
//   countryCode: 'US',
//   region: 'California',
//   city: {
//     name: 'Mountain View',
//     latitude: 37.4056,
//     longitude: -122.0775,
//     timeZone: 'America/Los_Angeles'
//   },
//   asn: 15169,
//   aso: 'Google LLC',
//   isp: 'Google',
//   proxy: false,
//   hosting: true
// }
```

### 2️⃣ Financial & Currency APIs

#### Currency Exchange API

Real-time currency conversion with live exchange rates.

```typescript
import { CurrencyApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const currencyApi = new CurrencyApi(config);

// Convert currency
const { data } = await currencyApi.v1ConvertCurrency({
  amount: 100,
  from: 'USD',
  to: 'EUR',
});

console.log(data);
// {
//   originalAmount: 100,
//   convertedAmount: 85.23,
//   from: 'USD',
//   to: 'EUR',
//   exchangeRate: 0.8523,
//   convertedText: '100 USD equals 85.23 EUR',
//   rateTime: '2024-01-20T10:30:00.000Z'
// }

// List available currencies
const currencies = await currencyApi.v1ListCurrencies({
  code: ['USD', 'EUR', 'GBP', 'JPY'],
});

console.log(currencies.data);
// {
//   list: [
//     { code: 'USD', name: 'US Dollar', symbol: '$' },
//     { code: 'EUR', name: 'Euro', symbol: '€' },
//     { code: 'GBP', name: 'British Pound', symbol: '£' },
//     { code: 'JPY', name: 'Japanese Yen', symbol: '¥' }
//   ]
// }
```

### 3️⃣ Domain & Security APIs

#### Domain Tools API

WHOIS lookup, DNS resolution, and domain availability checking.

```typescript
import { DomainToolsApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const domainApi = new DomainToolsApi(config);

// WHOIS lookup
const { data } = await domainApi.v1GetWhois({
  domain: 'example.com',
});

// DNS lookup
const dnsData = await domainApi.v1GetDnsRecords({
  domain: 'example.com',
  type: 'A',
});

// Check domain availability
const availability = await domainApi.v1CheckAvailability({
  domain: 'myawesomesite.com',
});
```

### 4️⃣ Content & Media APIs

#### QR Code Generator API

Generate customizable QR codes for various content types.

```typescript
import { QRCodeApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const qrApi = new QRCodeApi(config);

// Generate QR code
const { data } = await qrApi.v1CreateQRCode({
  data: 'https://dev.me',
  size: 300,
  format: 'png',
  errorCorrection: 'M',
  margin: 4,
  darkColor: '#000000',
  lightColor: '#FFFFFF',
});

// Returns base64 encoded image or download URL
console.log(data.qrCode);
```

### 5️⃣ URL & Web APIs

#### URL Shortener API

Create and manage short URLs with analytics.

```typescript
import { ShortURLApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const shortUrlApi = new ShortURLApi(config);

// Create short URL
const { data } = await shortUrlApi.v1CreateShortUrl({
  url: 'https://example.com/very-long-url-path',
  domain: 'short.link',
  customSuffix: 'mylink',
});

console.log(data);
// {
//   shortUrl: 'https://short.link/mylink',
//   originalUrl: 'https://example.com/very-long-url-path',
//   qrCode: 'base64-qr-code-image',
//   createdAt: '2024-01-20T10:30:00.000Z'
// }

// Bulk create short URLs
const bulkUrls = await shortUrlApi.v1CreateBulkShortUrls({
  urls: [{ url: 'https://example1.com' }, { url: 'https://example2.com' }, { url: 'https://example3.com' }],
});
```

#### URL Metadata API

Extract metadata, Open Graph tags, and content from any URL.

```typescript
import { URLMetadataApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const metadataApi = new URLMetadataApi(config);

const { data } = await metadataApi.v1GetMetadata({
  url: 'https://example.com',
});

console.log(data);
// {
//   title: 'Example Domain',
//   description: 'Example Domain for Documentation',
//   image: 'https://example.com/image.png',
//   favicon: 'https://example.com/favicon.ico',
//   author: 'John Doe',
//   keywords: ['example', 'documentation'],
//   openGraph: { ... },
//   twitter: { ... }
// }
```

#### One-Time URL API

Create secure, self-destructing URLs for sensitive content.

```typescript
import { OneTimeURLApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const oneTimeApi = new OneTimeURLApi(config);

const { data } = await oneTimeApi.v1CreateOneTimeUrl({
  content: 'This is sensitive information',
  expiresIn: 3600, // 1 hour
  maxViews: 1,
});

console.log(data);
// {
//   url: 'https://dev.me/ot/abc123xyz',
//   expiresAt: '2024-01-20T11:30:00.000Z',
//   maxViews: 1
// }
```

### 6️⃣ Global Data APIs

#### Country Data API

Get comprehensive information about countries worldwide.

```typescript
import { CountryApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const countryApi = new CountryApi(config);

// Get country by code
const { data } = await countryApi.v1GetCountryByCode({
  code: 'US',
});

// List all countries
const countries = await countryApi.v1ListCountries({
  limit: 10,
  page: 1,
});

console.log(data);
// {
//   name: 'United States',
//   code: 'US',
//   code3: 'USA',
//   capital: 'Washington, D.C.',
//   region: 'Americas',
//   subregion: 'North America',
//   population: 331002651,
//   area: 9833517,
//   languages: ['English'],
//   currencies: [{ code: 'USD', name: 'US Dollar', symbol: '$' }],
//   timezones: ['UTC-12:00', 'UTC-11:00', ...],
//   flag: 'https://flags.dev.me/us.svg'
// }
```

### 7️⃣ Management APIs

#### API Key Management

Manage your API keys programmatically.

```typescript
import { APIKeyApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'YOUR_MASTER_KEY' });
const apiKeyApi = new APIKeyApi(config);

// Create new API key
const { data } = await apiKeyApi.v1CreateApiKey({
  name: 'Production Key',
  permissions: ['read', 'write'],
  rateLimit: 10000,
});

// List API keys
const keys = await apiKeyApi.v1ListApiKeys();

// Revoke API key
await apiKeyApi.v1RevokeApiKey({ keyId: 'key-id' });
```

#### API Usage Analytics

Track and analyze your API usage.

```typescript
import { APIUsageApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'YOUR_API_KEY' });
const usageApi = new APIUsageApi(config);

// Get usage statistics
const { data } = await usageApi.v1GetUsageStats({
  startDate: '2024-01-01',
  endDate: '2024-01-31',
  service: 'email',
});

console.log(data);
// {
//   totalRequests: 5432,
//   successfulRequests: 5300,
//   failedRequests: 132,
//   usage: [
//     { date: '2024-01-01', count: 234, service: 'email' },
//     { date: '2024-01-02', count: 189, service: 'email' },
//     ...
//   ]
// }
```

## 🛠️ Advanced Configuration

### Custom Timeout

```typescript
const config = new Configuration({
  apiKey: 'YOUR_API_KEY',
  basePath: 'https://api.dev.me',
  timeout: 10000, // 10 seconds
});
```

### Custom Headers

```typescript
const config = new Configuration({
  apiKey: 'YOUR_API_KEY',
  baseOptions: {
    headers: {
      'X-Custom-Header': 'value',
    },
  },
});
```

### Proxy Configuration

```typescript
const config = new Configuration({
  apiKey: 'YOUR_API_KEY',
  baseOptions: {
    proxy: {
      host: 'proxy.example.com',
      port: 8080,
      auth: {
        username: 'user',
        password: 'pass',
      },
    },
  },
});
```

## 🧪 Testing

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch
```

## 📊 Rate Limits

| Plan         | Monthly Requests | Rate Limit  |
| ------------ | ---------------- | ----------- |
| Free         | 500              | 10/minute   |
| Essential    | 15,000           | 100/minute  |
| Standard     | 60,000           | 500/minute  |
| Professional | 1,000,000        | 2000/minute |
| Enterprise   | Unlimited        | Custom      |

View pricing details at [dev.me/pricing](https://dev.me/pricing)

## 🔧 Error Handling

```typescript
import { EmailApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'YOUR_API_KEY' });
const emailApi = new EmailApi(config);

try {
  const { data } = await emailApi.v1GetEmailDetails({
    email: 'invalid-email',
  });
} catch (error) {
  if (error.response) {
    // API error response
    console.error('API Error:', error.response.data);
    console.error('Status Code:', error.response.status);
  } else if (error.request) {
    // Network error
    console.error('Network Error:', error.message);
  } else {
    // Other errors
    console.error('Error:', error.message);
  }
}
```

## 🌐 Browser Usage

### Using CDN

```html
<script src="https://unpkg.com/@devmehq/sdk-js/dist/browser.min.js"></script>
<script>
  const config = new DevMe.Configuration({ apiKey: 'demo-key' });
  const currencyApi = new DevMe.CurrencyApi(config);

  currencyApi
    .v1ConvertCurrency({
      amount: 100,
      from: 'USD',
      to: 'EUR',
    })
    .then((response) => {
      console.log(response.data);
    });
</script>
```

### Using ES Modules

```javascript
import { CurrencyApi, Configuration } from '@devmehq/sdk-js';

const config = new Configuration({ apiKey: 'demo-key' });
const currencyApi = new CurrencyApi(config);

// Use in your React/Vue/Angular components
```

## 📝 TypeScript Support

Full TypeScript support with type definitions included:

```typescript
import { CurrencyApi, Configuration, V1ConvertCurrencyRequest, V1ConvertCurrencyResponse } from '@devmehq/sdk-js';

const config: Configuration = new Configuration({ apiKey: 'demo-key' });
const currencyApi: CurrencyApi = new CurrencyApi(config);

const request: V1ConvertCurrencyRequest = {
  amount: 100,
  from: 'USD',
  to: 'EUR',
};

const response: V1ConvertCurrencyResponse = await currencyApi.v1ConvertCurrency(request);
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/devmehq/devme-sdk-js/issues) with:

- SDK version
- Node.js/Browser version
- Code snippet to reproduce
- Error messages/stack traces

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🆘 Support

- 📧 Email: [support@dev.me](mailto:support@dev.me)
- 📚 Documentation: [dev.me/docs](https://dev.me/docs)
- 🐦 Twitter: [@devmedotme](https://twitter.com/devmedotme)

## 🔗 Links

- [API Documentation](https://dev.me/docs)
- [Pricing](https://dev.me/pricing)
- [Blog](https://dev.me/blog)
- [Changelog](CHANGELOG.md)

---

<div style="text-align: center;">
Made with ❤️ by <a href="https://dev.me">DEV.ME</a> Team
</div>
