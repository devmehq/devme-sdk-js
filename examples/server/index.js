require('isomorphic-fetch');
const { CurrencyApi, Configuration } = require('@devmehq/sdk-js');
const config = new Configuration({ apiKey: 'demo-key' });
const apiInstance = new CurrencyApi(config);

apiInstance
  .v1ConvertCurrency({ amount: 10, from: 'USD', to: 'EUR' })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('error', error instanceof Error ? error.message : error);
  });
