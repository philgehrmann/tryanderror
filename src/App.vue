<template>
  <div id="app">
      <div class="head-container">
        <picture>
          <source srcset="https://picsum.photos/id/272/3000/1500" media="(min-width: 1300px)">
          <source srcset="https://picsum.photos/id/272/1250/600" media="(min-width: 1024px)">
          <source srcset="https://picsum.photos/id/272/1024/450" media="(min-width: 768px)">
          <source srcset="https://picsum.photos/id/272/768/768" media="(max-width: 768px)">
        <img src="https://picsum.photos/300/1000" alt="MDN" v-parallax="0.2">
      </picture>
  </div>
  <div class="content">
      <NavigationMobile></NavigationMobile>
      <Header></Header>
      <Home msg="Welcome to Your Vue.js App"/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NavigationMobile from './components/NavigationMobile.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Footer,
    NavigationMobile
  },
  data () {
        return {
            isActive: false
        }
    }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
