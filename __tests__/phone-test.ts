import { phoneApi } from './helper';

describe('phone', () => {
  it('should validate a valid US phone number', async () => {
    const { data } = await phoneApi.v1GetPhoneDetails({
      phone: '+14155552671',
    });

    expect(data).toBeDefined();
    expect(data.valid).toBe(true);
    expect(data.number).toBeDefined();
    expect(typeof data.number).toBe('string');
  });

  it('should validate a valid UK phone number', async () => {
    const { data } = await phoneApi.v1GetPhoneDetails({
      phone: '+442071234567',
    });

    expect(data).toBeDefined();
    expect(data.valid).toBe(true);
    expect(data.number).toBeDefined();
  });

  it('should validate a valid German phone number', async () => {
    const { data } = await phoneApi.v1GetPhoneDetails({
      phone: '+491701234567',
    });

    expect(data).toBeDefined();
    expect(data.valid).toBe(true);
    expect(data.number).toBeDefined();
  });

  it('should handle phone number with international format', async () => {
    const { data } = await phoneApi.v1GetPhoneDetails({
      phone: '+33123456789', // French number
    });

    expect(data).toBeDefined();
    expect(data.number).toBeDefined();
    expect(typeof data.valid).toBe('boolean');
  });

  it('should provide basic phone information', async () => {
    const { data } = await phoneApi.v1GetPhoneDetails({
      phone: '+12125551234',
    });

    expect(data).toBeDefined();
    expect(data.valid).toBe(true);
    expect(data.number).toBeDefined();

    // Optional fields that may or may not be present
    if (data.countryCode) {
      expect(typeof data.countryCode).toBe('string');
    }
    if (data.countryName) {
      expect(typeof data.countryName).toBe('string');
    }
    if (data.carrier) {
      expect(typeof data.carrier).toBe('string');
    }
    if (data.lineType) {
      expect(typeof data.lineType).toBe('string');
    }
  });
});
