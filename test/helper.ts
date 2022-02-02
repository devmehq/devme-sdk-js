import { Configuration, CurrencyApi, IPApi } from '../src';

const config = new Configuration({ apiKey: 'demo-key' });
export const currencyApi = new CurrencyApi(config);
export const ipApi = new IPApi(config);
