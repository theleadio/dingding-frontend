require('dotenv').config();

console.log(process.env.BASE_URL);


export default {
  mode: 'universal',
  generate: {
    fallback: true
  },
  server: {
    port:8000,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "DingDing - Keeps track of your customers easily" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/axios.js'},
    '~/plugins/vue-moment.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-165416269-1'
    }],
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/axios', {"baseURL": process.env.BASE_URL}],
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  auth: {
    redirect: {
      login: '/owner/login',
      logout: '/owner/logout',
      home: '/owner/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/owner/login', method: 'post', propertyName: 'token' },
          logout: { url: '/owner/logout', method: 'post' },
          user: { url: '/owner', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        tokenType: 'bearer',
        // autoFetchUser: true        
      }
    }
  }
}
