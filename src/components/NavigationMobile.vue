<template>
<div class="navigationMobile" v-bind:class="[this.$parent.isActive ? 'active' : '']">
  <div class="navigationMobile--nav">
    <h2 class="white">MENU</h2>
    <a class="navigationMobile--close"  v-on:click="toggleNav()"></a>
  </div>
  <ul class="white">
    <li><a href="#" class="link link--navigation">Home</a></li>
    <li><a href="#" class="link link--navigation">About the Hub</a></li>
    <li><a href="#" class="link link--navigation">Food & Drinks</a></li>
    <li><a href="#" class="link link--navigation">Öffnungszeiten</a></li>
    <li><a href="#" class="link link--navigation">Kontakt</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'NavigationMobile',
  methods: {
    toggleNav() {
     this.$parent.isActive = !this.$parent.isActive;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/_globals.scss";
.navigationMobile {
  width: 100%;
  position:fixed;
  height: 100%;
  background:rgba(0,0,0,0.9);
  left:0;
  top:0;
  bottom:0;
  right:0;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  opacity: 0;
  visibility: hidden;
  clip-path: circle(0 at 0 0);
  transition: clip-path 0.5s ease,  opacity 1s ease 0.4s;

  &.active {
    opacity: 1;
    visibility: visible;
    clip-path: circle(140.9% at 0 0);
    z-index: 50;
    transition: clip-path 0.7s ease 0.3s;
  }

  h2 {
    @include font-size(2.2);
  }

  ul {
    margin-top:75px;
    li {
      height: 70px;
      a {
        @include font-size(1.7);
        vertical-align: middle;
      }
    }  
  }
  &--nav {
    width:100%;
    display:grid;
    grid-template-columns: 75% 25%;
  }
  &--close {
    width: 100%;
    position: relative;
    &::before {
      content: "";
      position:absolute;
      width:30px;
      height:2px;
      background: $color-white;
      transform: rotate(-45deg);
      top:15px;
      left: 25px;
    }
     &::after {
      content: "";
      position:absolute;
      width:30px;
      height:2px;
      background: $color-white;
      transform: rotate(45deg);
      top:15px;
      left: 25px;
    }
  }
}
</style>
