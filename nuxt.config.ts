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
        // href: '/io-assignment/favicon.ico'
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
        background_color: '#fff',
        theme_color: '#fff',
        icons: [{
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png',
        }],
      },
      workbox: {
        navigateFallback: '/',
      },
      devOptions: {
        enabled: true,
        type: 'module',
      }
    },
    

    
})
