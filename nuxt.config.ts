// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({

  target: 'static',

  router: {
    base: '/io-assignment/',
  },

  head: {
    title: 'Rick van Wijk - Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: "test"
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Rick van Wijk'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/io-assignment/favicon.ico'
    }],
  },

  components: true,

  buildModules: [
    '@nuxtjs/pwa',
  ],

  modules: [
    '@vite-pwa/nuxt',
  ],

  pwa: {
    manifest: {
      name: 'UserList',
      short_name: 'UserList',
      description: 'A list of users',
      display: 'standalone',
      start_url: '/io-assignment/',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [{
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: '/io-assignment/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },



})