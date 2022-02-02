import { currencyApi } from './helper';
import { expect } from 'chai';

describe('currency', async function () {
  it('should convert currency USD - EUR', async function () {
    const { data } = await currencyApi.v1ConvertCurrency({
      amount: 10,
      from: 'USD',
      to: 'EUR',
    });

    expect(data.from).to.be.eql('USD');
    expect(data.to).to.be.eql('EUR');

    expect(data.convertedAmount).to.be.lessThan(9);
    expect(data.convertedAmount).to.be.greaterThan(8);

    expect(data.exchangeRate).to.be.lessThan(0.9);
    expect(data.exchangeRate).to.be.greaterThan(0.8);

    expect(data.originalAmount).to.be.eql(10);

    expect(data.convertedText.startsWith('10 USD equal to')).to.be.eql(true);
    expect(data.rateTime.startsWith('2022-')).to.be.eql(true);

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
    const { data } = await currencyApi.v1ListCurrencies({ code: ['EUR', 'USD'] });
    expect(data.list.length).to.be.eql(2);
    expect(data.list[1].code).to.be.eql('USD');
  });
});
