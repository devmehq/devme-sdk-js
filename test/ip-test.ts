import { ipApi } from './helper';
import { expect } from 'chai';

describe('ip', async function () {
  it('should get the correct data', async function () {
    const { data } = await ipApi.v1GetIpDetails({ ip: '52.45.23.11' });
    expect(data).to.be.contain({
      asn: 14618,
      aso: 'AMAZON-AES',
      city: {
        areaCode: '0',
        accuracyRadius: 1000,
        latitude: 39.0469,
        longitude: -77.4903,
        name: 'Ashburn',
        region: 'Virginia',
        timeZone: 'America/New_York',
      },
      countryCode: 'US',
      ip: '52.45.23.11',
      registeredCountryCode: 'US',
    });
  });
});
