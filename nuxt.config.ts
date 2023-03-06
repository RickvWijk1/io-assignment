// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({

    target: 'static',
    router: {
        base: '/io-assignment/',
    },

    components: true,
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
