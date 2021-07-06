module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    opacity: {
      '90': '0.9'
    },
    inset: {
      '0': 0,
      '10': '10rem'
    }
  }
}
