export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '淡然-博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '个人博客网站，用于记录个人学习笔记，发表个人学习感悟' },
      { hid: 'keywords', name: 'keywords', content: '个人博客,淡然,前端,Vue,React,Node,Ajax,ElementUI,微信小程序' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/live2dw/lib/L2Dwidget.min.js", type: 'text/javascript', charset: 'utf-8' },
      { src: "/js/flexible.js", type: 'text/javascript', charset: 'utf-8' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/click.js', ssr: false },
    { src: '~plugins/filter.js', ssr: true },
    { src: '~plugins/calender.js', ssr: false },
    { src: '@/plugins/mavonEditor', ssr: false },
    { src: '@/plugins/player', ssr: false },
    { src: '@/plugins/lazy', ssr: false },
    { src: '@/plugins/hljs', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  loading: '~/components/Loading.vue',

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
