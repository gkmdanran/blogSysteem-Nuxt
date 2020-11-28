import Vue from 'vue'
import Vuelazyload from 'vue-lazyload'

Vue.use(Vuelazyload, {
       error: require('../static/img/timg.jpg'),

       loading: require('../static/img/timg.jpg'),

})