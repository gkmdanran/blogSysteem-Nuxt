import Vue from 'vue'
import Vuelazyload from 'vue-lazyload'
console.log(1)
Vue.use(Vuelazyload, {
       error: require('../static/img/timg.jpg'),

       loading: require('../static/img/timg.jpg'),

})