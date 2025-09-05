import { emailApi } from './helper';

describe('email', () => {
  it('should validate a valid email address', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'test@gmail.com',
      verifyMx: true,
      verifySmtp: false,
      detectName: true,
    });

    expect(data.email).toBe('test@gmail.com');
    expect(data.validMx).toBeDefined();
    expect(data.validSmtp).toBeDefined();
    expect(data.isDisposable).toBeDefined();
    expect(data.isFree).toBeDefined();
  });

  it('should detect disposable email', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'test@mailinator.com',
      verifyMx: false,
      verifySmtp: false,
    });

    expect(data.email).toBe('test@mailinator.com');
    expect(data.isDisposable).toBe(true);
  });

  it('should validate email with domain check', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'test@example.com',
      verifyMx: true,
      verifySmtp: false,
    });

    expect(data.email).toBe('test@example.com');
    expect(data.validFormat).toBeDefined();
    expect(typeof data.validFormat).toBe('boolean');
    expect(data.validMx).toBeDefined();
  });

  it('should check free email provider', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'user@gmail.com',
      verifyMx: false,
      verifySmtp: false,
    });

    expect(data.email).toBe('user@gmail.com');
    expect(data.isFree).toBe(true);
    expect(data.isDisposable).toBe(false);
  });

  it('should provide comprehensive email validation', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'john.doe@gmail.com',
      verifyMx: true,
      verifySmtp: false,
      detectName: true,
    });

    expect(data.email).toBe('john.doe@gmail.com');
    expect(data.validFormat).toBeDefined();
    expect(typeof data.validFormat).toBe('boolean');

    // Check basic validation fields
    expect(data.isDisposable).toBeDefined();
    expect(data.isFree).toBeDefined();
    expect(data.validMx).toBeDefined();

    // Check for scoring if available
    if (data.score) {
      expect(typeof data.score).toBe('number');
      expect(data.score).toBeGreaterThanOrEqual(0);
      expect(data.score).toBeLessThanOrEqual(100);
    }
  });

  it('should validate business email', async () => {
    const { data } = await emailApi.v1GetEmailDetails({
      email: 'contact@microsoft.com',
      verifyMx: true,
      verifySmtp: false,
    });

    expect(data.email).toBe('contact@microsoft.com');
    expect(data.isFree).toBe(false);
    expect(data.validFormat).toBe(true);
    expect(data.validMx).toBeDefined();
  });
});
