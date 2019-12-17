import pkg from './package'

export default{
  mode: 'universal',
env:{
    BASE_URL:process.env.BASE_URL
},
  /*
  ** Headers of the page
  */
  head: {
    title: '合丰网',
    meta: [{charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '合丰网'},
      {hid: 'keyWords', name: 'keyWords', content: '合丰网'},
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    ],
    script: [],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  router: {
    base:"/",
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    linkExactActiveClass: 'nuxt-link-active',
    middleware:'intercept'
  },
  /*
  ** Global CSS
  */
  css: [
    './assets/main.css',
    './element-ui/lib/theme-chalk/index.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/global/ElementUI', ssr: true,},
    {src: '~/plugins/global/get.js'},
    {src: '~/plugins/global/axios.js',ssr: false},
    {src: '~/plugins/global/persist', ssr: false },
    {src: '~/plugins/global/format'},
    {src: '~/plugins/global/echarts'},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  //服务器上做代理
  proxy: [
    ['/api', { target: 'http://47.100.235.158:8006/' }],
  ],
}
