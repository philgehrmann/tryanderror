import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
import VueMeta from 'vue-meta'
import App from './App.vue'
import ContentfulVue from 'contentful-vue';
import JQuery from 'jquery'
let $ = JQuery

Vue.config.productionTip = false
Vue.use(VueParallaxJs)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
Vue.use(ContentfulVue, {
  space: "sh1bz8u452nt",
  accessToken: "JtbZN0WNLV8jH1PY_D7h6Y-f7QczgJoAysqG9TbtTcY"
});

new Vue({
  render: h => h(App),
}).$mount('#app')
