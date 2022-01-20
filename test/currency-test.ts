import { currencyApi } from './helper';
import { expect } from 'chai';

describe('currency', async function () {
  it('should convert currency USD - EUR', async function () {
    const result = await currencyApi.v1ConvertCurrency({
      amount: 10,
      from: 'USD',
      to: 'EUR',
    });

    expect(result.from).to.be.eql('USD');
    expect(result.to).to.be.eql('EUR');

    expect(result.convertedAmount).to.be.lessThan(9);
    expect(result.convertedAmount).to.be.greaterThan(8);

    expect(result.exchangeRate).to.be.lessThan(0.9);
    expect(result.exchangeRate).to.be.greaterThan(0.8);

    expect(result.originalAmount).to.be.eql(10);

    expect(result.convertedText.startsWith('10 USD equal to')).to.be.eql(true);
    expect(result.rateTime.startsWith('2022-')).to.be.eql(true);

    // expect(result).to.be.eql({
    //   convertedAmount: 8.819,
    //   convertedText: '10 USD equal to 8.819 EUR',
    //   exchangeRate: 0.8819,
    //   from: 'USD',
    //   originalAmount: 10,
    //   rateTime: '2022-01-20T14:49:28.046Z',
    //   to: 'EUR',
    // });
  });
  it('should list currencies', async function () {
    const result = await currencyApi.v1ListCurrencies({ code: ['EUR', 'USD'] });
    expect(result.list.length).to.be.eql(2);
    expect(result.list[1].code).to.be.eql('USD');
  });
});
