<template>
<div>
  <div class="content">
    <div class="content--header">
      <div class="content--headline">
        <h1>
          Lorem Ipsum
        </h1>
        <h3>
          Lorem ipsum dolor sit amet, 
        </h3>
        <a class="button white nomargin">Lorem Ipsum</a>
      </div>
    </div>
    <div class="content--item">
      <div class="content--item--text">
        <h1>Lorem Ipsum </h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </picture>
         <div class="button--container"> 
          <a class="button button--center marginbottom lighter">We love Food</a>
        </div>
      </div>
    </div>
    <div class="content--item--imagecontent">
      <div class="content--item--imagecontent background">
         <picture>
          <source srcset="https://picsum.photos/id/241/900/600" media="(min-width: 1300px)">
          <source srcset="https://picsum.photos/id/241/1250/600" media="(min-width: 1024px)">
          <source srcset="https://picsum.photos/id/241/1024/450" media="(min-width: 768px)">
          <source srcset="https://picsum.photos/id/241/768/768" media="(max-width: 768px)">
        <img src="https://picsum.photos/id/1015/1300/1000" alt="MDN" v-parallax="0.2">
      </picture>
      </div>
      <div class="content--item--imagecontent text">
        <h1 class="white nomargin margintop">The Hub</h1>
        <p class="white">Welcome to the Jungle!</p>
        <p class="white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <a class="button button--center marginbottom lighter-reverse">Zur Speisekarte</a>
      </div>
    </div>
    <div>
       <div class="content--item">
      <div class="content--item--text">
        <h1>Lorem Ipsum </h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </picture>
         <div class="button--container"> 
          <a class="button button--center marginbottom lighter">We love Food</a>
        </div>
      </div>
    </div>
      <ImageSlider></ImageSlider>
    </div>
  </div>
  </div>
</template>
<script>
import ImageSlider from './text-blocks/_imageSlider.vue';
export default {
  name: 'Home',
  components: {
    ImageSlider
  },
  props: {
    msg: String
  },
  data: {
  },
  metaInfo: {
      title:" this.pageTitle",
      titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'de',
        amp: true
      }
    },
    methods: {
      getData() {
          this.$contentful
            .getEntries()
            .then((res) => {
              console.log(res.items);
            })
            .catch((error) => {
              console.log(error);
          });
      }
  },
    created() {
      this.getData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_variables.scss";
  @import "../scss/_globals.scss";
  @import "../scss/_buttons.scss";
  h1 {
      color: $font-text;
  }
  .head-container {
    width: 100%;
    height:100vh;
    overflow: hidden;
    position: absolute;

     @include tablet {
        height: 600px;
      }
    picture {
    height: 100vh;
    width: 100%;

    img {
        width: 100%;
        height:100%;
      }
    }
  }
  .content {
    max-width: 2200px;
    margin: 0 auto;
    z-index:1;
  &--header {
    width: 100%;
    height:100vh;
    overflow: hidden;
    position: relative;

     @include tablet {
        height: 600px;
      }
    picture {
    height: 100vh;
    width: 100%;

    img {
        width: 100%;
        height:100%;
      }
    }
  }
  &--headline {
    position: absolute;
    z-index: 1;
    top: 60%;
    text-align: right;
    width: 100%;
    padding-right: 20px;
      @include tablet {
        padding-right: 150px;
        top: 50%;
      }
      @include desktop-small {
        padding-right: 180px;
        top: 50%;
      } 
      @include desktop-big {
        padding-right: 200px;
        top: 50%;
      }
    h1 {
      color: $color-white;
      @include font-size(3);
      text-align: right;
      font-style: italic;
      text-shadow: 2px 2px 2px #000000;
      @include tablet {
         @include font-size(8);
      }
      @include desktop-small {
        @include font-size(10);
      } 
      @include desktop-big {
        @include font-size(10);
      }
    }
    h3 {
      text-transform: uppercase;
      color: $color-white;
      font-weight:300;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  &--item {
    display:grid;
    grid-template-columns: 1fr;
    position: relative;

    &::before {
      content:"";
      position: absolute;
      width:100%;
      top:0;
      margin-top:-29px;
      height:45px;
      background:$color-white;
      transform:skew(0, -4deg);
    }
    &:after {
      content:"";
      position: absolute;
      width:100%;
      bottom:0;
      margin-bottom:-10px;
      height:20px;
      background:$color-white;
      transform:skew(0, 2deg);
    }

    @include tablet {
          grid-template-columns: 1fr ;
    }
    @include desktop-small {
          grid-template-columns: 1fr 1fr;
    }
    @include desktop-big {
          grid-template-columns: 1fr 1fr;
    }
    &--text {
        padding-left: 2rem;
        padding-right: 2rem;

      @include tablet {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @include desktop-small {
        padding-left: 3em;
        padding-right: 3rem;
        padding-top: 3rem;
    }
    @include desktop-big {
        padding-left: 3rem;
        padding-top: 3rem;
        padding-right: 3rem;
    }
    }
    &--imagecontent {
        height: 400px;
        overflow: hidden;
      &.background {
         height: 400px;
          z-index:-1;
         position:absolute;
          picture,
          img {
            height: 400px;
          }
      }
      &.text {
        padding:2rem;
        padding-top: 1rem;
      }
    }
  }
}
</style>
