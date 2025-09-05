import { currencyApi } from './helper';

describe('currency', () => {
  it('should convert currency USD - EUR', async () => {
    const { data } = await currencyApi.v1ConvertCurrency({
      amount: 10,
      from: 'USD',
      to: 'EUR',
    });

    expect(data.from).toBe('USD');
    expect(data.to).toBe('EUR');

    expect(data.convertedAmount).toBeGreaterThanOrEqual(7);
    expect(data.convertedAmount).toBeGreaterThan(5);

    expect(data.exchangeRate).toBeGreaterThanOrEqual(0.7);
    expect(data.exchangeRate).toBeGreaterThan(0.5);

    expect(data.originalAmount).toBe(10);

    expect(data.convertedText.startsWith('10 USD equal to')).toBe(true);
    expect(typeof data.rateTime).toBe('string');
    expect(data.rateTime.length).toBeGreaterThan(0);

    // expect(result).toEqual({
    //   convertedAmount: 8.819,
    //   convertedText: '10 USD equal to 8.819 EUR',
    //   exchangeRate: 0.8819,
    //   from: 'USD',
    //   originalAmount: 10,
    //   rateTime: '2022-01-20T14:49:28.046Z',
    //   to: 'EUR',
    // });
  });

  it('should list currencies', async () => {
    const { data } = await currencyApi.v1ListCurrencies({ code: ['EUR', 'USD'] });
    expect(data.list.length).toBe(2);
    expect(data.list[1].code).toBe('USD');
  });
});
