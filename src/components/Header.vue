<template>
<div class="header">
  <div class="header-button" v-on:click="toggleNav()">
      <div class="header-button--icon" ></div><p>MENU</p>
  </div>
  <div class="logo"></div>
  <div class="header-navigation">
    <ul>
      <li><a href="">HOME</a></li>
      <li><a href="">THE HUB</a></li>
      <li><a href="">SPEISEKARTE</a></li>
      <li><a href="">FIND US</a></li>
      <li><a href="">KONTAKT</a></li>
    </ul>
  </div>
  <div class="header--open">
    <div class="header--open-now"></div>
    <div class="header--open-menu"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    toggleNav() {
     this.$parent.isActive = !this.$parent.isActive;
    },
    scrollable() {
      var headerHeight = parseInt(document.querySelector('.header').offsetHeight);
      var contentHeaderHeight = parseInt(document.querySelector('.content .content--header').clientHeight);
      var correctHeight = contentHeaderHeight;
      window.addEventListener('scroll', function(e) {
        if(window.scrollY >= contentHeaderHeight ) {
          document.querySelector('.header').classList.add('scrolled');
        } else {
          document.querySelector('.header').classList.remove('scrolled');
        }

      });

    }
  },
  mounted() {
      this.scrollable();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/_globals.scss";
.header {
  width: 100%;
  display: grid;
  grid-template-columns: 18% 82% 10%;
  height: 70px;
  border: 0px solid #000;
  position: fixed;
  top: 0;
  z-index: 20;
  transition: all 0.1s ease-out;
  max-width: 2200px;
  margin: 0 auto;
  
  &-navigation {
    display:none;
    @include desktop-small {
      display:block;
      margin-top: 2rem;
      text-align: right;
    }
     @include desktop-big {
      display:block;
      margin-top: 2rem;
      text-align: right;
    }
    ul {
      li {
        display: inline-block;
        position:relative;
        margin-left: 25px;
        a {
          color: $color-white;
          @include font-size(0.9);
          padding: 1rem;
          overflow:hidden;
          &:after {
              content:"";
              position:absolute;
              height:100%;
              left:0;
              width:0;
              border-bottom:1px solid $color-white-75;
              transition: all 1s ease;
            }
           &:hover {
            &:after {
              content:"";
              position:absolute;
              height:100%;
              width:100%;
              border-bottom:1px solid $color-white-75;
              color: $color-black;
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
  }

  &-button {
    width:100%;
    height: 70px;
    display:grid;

    &:hover {
      cursor:pointer;
    }

      @include desktop-small {
            height: 100px;
            display:none;
      }
        @include desktop-big {
            height: 100px;
            display:none;
      }

    &--icon {
      width: 25px;
      height: 1px;
      background:$color-white;
      align-self: center;
      justify-self: center;
      margin-left: 0;
      transform:rotate(0deg);
      transition:  transform  0.3s ease;
      &::before {
      content: "";
      position: absolute;
      background:$color-white;
      width: 30px;
      height: 1px;
      margin-top: -7px;
      }
      &:after {
        content: "";
        position: absolute;
        background:$color-white;
        width: 30px;
        height: 1px;
        margin-top: 7px;
      }
    }
    p {
      position:absolute;
      padding:0;
      color: $color-black;
      align-self: center;
      opacity:0;
      left: 50%;
      visibility: hidden;

      @include desktop-small {
        margin-top:30px;
      }
      @include desktop-big {
        margin-top:30px;
      }
    }
  }

  &.scrolled {
    background: $color-white-75;
    transition: all 0.3s ease-in;
    position:fixed;

    .header-button {
      position:relative;
    }

    p {
      opacity: 1;
      visibility: visible;
      transition: all 0.5s;
      transition-delay: 0.6s;
    }
    .header-button--icon {
      background: $color-black;
      transform:rotate(90deg);
      width: 25px;
      height: 1px;
      margin-left: -20px;
      transition:  transform 0.3s ease, margin-left 0.3s ease 0.3s;


      &::before,
      &::after {
        background: $color-black;
        width: 25px;
        transition:  all 0.3s ease;
    }
         
      &::before{
        margin-top: 0;
      }
      &::after {
          margin-top: 0;
      }
  }
  }

  @include tablet {
    height: 60px;
    grid-template-columns: 10% 65% 35%;
  }
  @include desktop-small {
    height: 75px;
    grid-template-columns: 25% 65% 10%;
    align-self: center;
    justify-self: center;
  }
  @include desktop-big {
    height: 75px;
    grid-template-columns: 25% 65% 10%;
    align-self: center;
    justify-self: center;
  }
  &--open {
    display:grid;
    grid-template-columns: 50% 50%;

    &-now {
      align-self: center;
      justify-self: center;
    }

    &-menu {
      align-self: center;
      justify-self: center;
    }

  }

}
</style>
