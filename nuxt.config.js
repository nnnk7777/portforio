export default {
  mode: 'universal',
  head: {
    titleTemplate: `%s - Kosuke Nonaka `,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.11.0/css/all.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/css/common.css'],
  postcss: {
    plugins: {
      tailwindcss: './tailwind.config.js'
    }
  },
  plugins: [],
  devModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  axios: {},
  webfontloader: {
    google: {
      families: ['Jockey+One', 'Ubuntu']
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
