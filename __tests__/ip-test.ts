import { ipApi } from './helper';

describe('ip', () => {
  it('should get the correct data', async () => {
    const { data } = await ipApi.v1GetIpDetails({ ip: '52.45.23.11' });

    expect(data).toMatchObject({
      asn: 14618,
      aso: 'AMAZON-AES',
      countryCode: 'US',
      ip: '52.45.23.11',
      registeredCountryCode: 'US',
    });

    expect(data?.city?.name).toBe('Ashburn');
    expect(data?.city?.latitude).toBe(39.0469);
    expect(data?.city?.longitude).toBe(-77.4903);
  });
});
