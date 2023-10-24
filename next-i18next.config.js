module.exports = {
    i18n: {
      defaultLocale: 'uk',
      locales: [
        'en',
        'uk',
      ],
    },
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/public/locales',
  }
  