// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({

    target: 'static',
    ssr: false,
    
    router: {
        base: '/io-assignment/',
    },

    components: true,

    buildModules: [
      '@nuxtjs/pwa',
    ],

    pwa: {
        icon: {
        },
        meta: {
          /* meta options */
  
        },
        manifest:{
          name: 'List of users',
          short_name: 'Userlist',
          description: 'List of users',
          background_color: '#fff',
          theme_color: '#fff'
        }
      },
    
})
