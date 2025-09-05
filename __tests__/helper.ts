import { Configuration, CurrencyApi, EmailApi, IPApi, PhoneApi } from '../src';

const config = new Configuration({ apiKey: 'demo-key' });
export const currencyApi = new CurrencyApi(config);
export const ipApi = new IPApi(config);
export const emailApi = new EmailApi(config);
export const phoneApi = new PhoneApi(config);
