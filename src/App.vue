<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .fn-clear {
    zoom: 1; /* for IE6 IE7 */
  }
  #app{
    background:#00528A
  }
  .fn-clear:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  li{
    list-style: none;
  }
  .page_{margin-top:.5rem}
</style>
