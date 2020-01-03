<template>
<div class="footer">
  <div class="footer-item"></div>
  <div class="footer-item"></div>
  <div class="footer-item"></div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/_globals.scss";
.footer {
  padding: $global-padding;
  background: $color-main;
  display: grid;
  grid-template-columns: 1fr;

  @include tablet {
  grid-template-columns: 1fr;
  }
  @include desktop-small {
  grid-template-columns: 1fr 1fr 1fr;
  }
  @include desktop-big {
  grid-template-columns: 1fr 1fr 1fr; 
  }
}
</style>
