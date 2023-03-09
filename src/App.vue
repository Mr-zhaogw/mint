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
  .swal2-popup{
    width:3rem !important;
  }
  .page_{margin-top:.5rem}
  .swal2-title{
    font-size: .12rem !important;
    padding:.2rem 1em 0 !important;
  }
  .swal2-actions{
    margin:.3rem auto 0 !important;
  }
  .swal2-styled{
    padding:.12rem .35rem !important;
    outline: none !important;
  }
  .swal2-styled.swal2-confirm{
    font-size: .15rem !important;
    background-color: #00528A !important;
  }
  .swal2-popup{
    padding:0 0 .2rem !important;
  }
  .swal2-styled.swal2-confirm:focus{
    box-shadow: none !important;
  }
</style>
