require('isomorphic-fetch');
const { CurrencyApi, Configuration } = require('@devmehq/sdk-js');
const config = new Configuration({ apiKey: 'demo-key' });
const currencyApi = new CurrencyApi(config);

// promises without async/await
currencyApi
  .v1ConvertCurrency({ amount: 10, from: 'USD', to: 'EUR' })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('error', error instanceof Error ? error.message : error);
  });

currencyApi
  .v1ListCurrencies({ code: ['USD'] })
  .then((result) => {
    console.log(result);
  })
  .catch(async (error) => {
    console.error('error', error.status);
    console.error('error', error.statusText);
    return error.json();
  })
  .then((error) => {
    console.error('error message from body', error?.message);
  });

async function main() {
  try {
    const result = await currencyApi.v1ConvertCurrency({
      amount: 10,
      from: 'USD',
      to: 'EUR',
    });
    console.log(result);
  } catch (error) {
    console.error('error', error instanceof Error ? error.message : error);
  }
}

main().then(() => {
  console.log('main done');
});
