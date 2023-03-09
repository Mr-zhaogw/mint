<template>
  <div class="header fn-clear">
    <img src="@/assets/logo.png" class="logo" @click="goHome"/>
    <ul class="nav">
      <li v-for="(item, index) in navList" @click="goNav(index)">{{item}}</li>
    </ul>
    <div class="icon_box">
      <img src="@/assets/logo1.png" class="icon1 icon"/>
      <img src="@/assets/logo2.png" class="icon2 icon"/>
      <a href="https://twitter.com/LYOTNFT"><img src="@/assets/logo3.png" class="icon3 icon"/></a>
    </div>
  </div>
</template>

<script>

 export default {
   name:'header',
   components: {
     
   },

  /**
  * 数据部分
  */
   data() {
     return {
       navList:['MINT','ABOUT','Q&A']
      //  navList:[,'ABOUT','Q&A']
     }
   },
   computed: {},
   watch: {},
   created() {
     
   },
   mounted() {
     
   },
   methods: {
    goHome(){
      this.$router.push({path:'/'});
    },
    goNav(index){
      const pathName = this.$route.name;
      let path =''
      if(pathName == 'mint'){
        if(index == 0){
          this.$router.push({path:'/mint'});
        }else if(index == 1){
          this.$router.push({path:'/'},() => {});
          this.$nextTick(() =>{
            document.querySelector(".part2").scrollIntoView({
              behavior: "smooth",
              block:"start" ,
            });
          })
        }else if(index == 2){
          this.$router.push({path:'/'},() => {});
          this.$nextTick(() =>{
            document.querySelector(".part3").scrollIntoView({
              behavior: "smooth",
              block:"start" ,
            });
          })
        }
      }else{
        if(index == 0){
          path = '/mint'
        }else if(index == 1){
          document.querySelector(".part2").scrollIntoView({
            behavior: "smooth",
            block:"start" ,
          });
        }else if(index == 2){
          document.querySelector(".part3").scrollIntoView({
            behavior: "smooth",
            block:"start" ,
          });
        }
        this.$router.push({path:path},() => {});
      }
    }
   },
 }
</script>

<style lang='scss' scoped>
// @import url('@/assets/font/font.css');
.header{
    width:100%;
    background-color: #F4C7CB;
    position: fixed;
    top:0;
    padding:0 .25rem;
    height: .5rem;
    box-sizing: border-box;
    z-index: 100;
    left:0;
    .logo{
      width:.45rem;
      margin:.08rem .5rem .1rem 0;
      float: left;
      cursor: pointer;
    }
    .nav{
      li{
        float: left;
        cursor: pointer;
        font-family: 'BSBSC';
        height: .5rem;
        font-size: .27rem;
        line-height: .5rem;
        margin-right: .5rem;
        color: #00528A;
      }
    }
    .icon_box{
      float: right;
      .icon{
        width:.25rem;
        margin:.125rem 0;
        cursor: pointer;
        &.icon2{
          // width:.29rem;
          margin:.15rem .3rem;
        }
        &.icon3{
          margin:.15rem 0;
        }
      }
    }
  }
</style>