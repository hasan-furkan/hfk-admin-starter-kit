/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'tr'],
  },
  detection: {
    order: ['cookie', 'navigator'],
    lookupCookie: 'i18next',
    caches: ['cookie'],
    cookieOptions: { path: '/', sameSite: 'strict' }
  }
}