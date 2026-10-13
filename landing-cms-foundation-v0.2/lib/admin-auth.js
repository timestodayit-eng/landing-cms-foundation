import crypto from 'crypto';

function safeEqual(a = '', b = '') {
  const aBuffer = Buffer.from(String(a));
  const bBuffer = Buffer.from(String(b));

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

export function checkAdminCredentials(email, password) {
  const adminEmail = process.env.ADMIN_EMAIL || '';
  const adminPassword = process.env.ADMIN_PASSWORD || '';

  return (
    safeEqual(email, adminEmail) &&
    safeEqual(password, adminPassword)
  );
}

export function createSessionToken() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is missing');
  }

  const expiresAt = Date.now() + 8 * 60 * 60 * 1000;

  const signature = crypto
    .createHmac('sha256', secret)
    .update(String(expiresAt))
    .digest('hex');

  return `${expiresAt}.${signature}`;
}

export function verifySessionToken(token) {
  try {
    if (!token) return false;

    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) return false;

    const [expiresAt, signature] = token.split('.');

    if (!expiresAt || !signature) return false;

    if (Date.now() > Number(expiresAt)) {
      return false;
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(String(expiresAt))
      .digest('hex');

    return safeEqual(signature, expectedSignature);
  } catch {
    return false;
  }
}
