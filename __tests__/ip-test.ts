import { ipApi } from './helper';
import { expect } from 'chai';

describe('ip', async function () {
  it('should get the correct data', async function () {
    const { data } = await ipApi.v1GetIpDetails({ ip: '52.45.23.11' });
    expect(data).to.be.contain({
      asn: 14618,
      aso: 'AMAZON-AES',
      countryCode: 'US',
      ip: '52.45.23.11',
      registeredCountryCode: 'US',
    });
    expect(data?.city).to.be.contain({
      name: 'Ashburn',
      region: 'Virginia',
      latitude: 39.0469,
      longitude: -77.4903,
      accuracyRadius: 1000,
      timeZone: 'America/New_York',
      areaCode: '0',
    });
  });
});
