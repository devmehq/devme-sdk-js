// @ts-ignore
import('isomorphic-fetch');
import { CurrencyApi, IPApi, Configuration } from '../src';
const config = new Configuration({ apiKey: 'demo-key' });
export const currencyApi = new CurrencyApi(config);
export const ipApi = new IPApi(config);
