<template>
  <div class="home_page page_">
    <div class="banner" >
        <div class="bg"><img loading="lazy" src="@/assets/bg.png"/></div>
        <img loading="lazy" src="@/assets/yun.png" data-value="9" class="yun object"/>
        <img loading="lazy" src="@/assets/text1.png" class="text1"/>
        <img loading="lazy" src="@/assets/cat.png" data-value="-11" class="cat object"/>
        <img loading="lazy" src="@/assets/text.jpg" class="text"/>
    </div>
    <div class="part2 fn-clear" ref="scrollAbout">
      <div class="left">
        <div class="title">About</div>
        <div class="text">The project started as a plan to give hand-painted tiger profile pictures on the blockchain to friends. The imaginative designs and whimsical traits that followed led to the creation of "Lucky Year Of Tiger NFT (LYOT)," the first project by PlanA-Art and the opening chapter of the digital zodiac art series.</div>
        <div class="title">PlanA-Art :</div>
        <div class="text">A web3-based visual solutions studio focused on developing unique visual systems for web3 brands and teams. We provide comprehensive solutions beyond VI/UI design with a combination of curiosity, creativity, love, and technology.</div>
        <div class="title">‘Better Art in Web2?’</div>
        <div class="text">PlanA-Art unites talented web3 artists and invites web2 art creators who want to explore the NFT world, showcasing their one-of-a-kind and captivating art styles on various creative themes.
Our goal is to introduce more physically-made, high-quality art into the cryptocurrency sphere.</div>
      </div>
      <div class="right">
        <img src="@/assets/zs1.png" class="zs1 zs"/>
        <img src="@/assets/zs2.png" class="zs2 zs"/>
        <img src="@/assets/zs3.png" class="zs3 zs"/>
      </div>
    </div>
    <div class="part3" ref="Q&A">
      <div class="title"><span>Q</span><span>&</span><span>A</span></div>
      <div class="line" style="margin:0rem 0 .2rem"><img src="@/assets/line3.jpg" style="width:100%"/></div>
      <div class="content fn-clear">
        <div class="left">
          <div class="box">
            <div class="q">
              <span>Q</span>:What benefits come with holding?
            </div>
            <div class="a">
              <span>A</span>:Just an art-driven project featuring adorable tigers and oriental 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elements, stay tuned on Twitter for future updates and plans.
<br>
              <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·Digital art airdrops from partner artists<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·A limited number of physical artefacts to redeem<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Further details will be announced soon after the MINT. -->
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:.19rem 0 .19rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:What's the mint price?
            </div>
            <div class="a">
              <span>A</span>:The public mint price is 0.022 ETH, and whitelist participants<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will receive a discounted price.<br>
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:.2rem 0 .2rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:Who is eligible to mint?
            </div>
            <div class="a">
              <span>A</span>:Only the winners of the whitelist raffle will be able to participate<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the first phase of mint.Everyone can participate in public sale.<br>
            </div>
          </div>
        </div>
        <div style="width:.022rem;float: left;margin-left: 4%;height:3rem"><img src="@/assets/line2.jpg" style="width:100%;height: 100%;"/></div>
        <div class="right">
          <div class="box">
            <div class="q">
              <span>Q</span>:How many traits are available in LYOT?
            </div>
            <div class="a">
              <span>A</span>:750+
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:0rem 0 .01rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:What’s the size of the collection?
            </div>
            <div class="a">
              <span>A</span>:2022
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:0rem 0 .01rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:What's the time for minting?
            </div>
            <div class="a">
              <span>A</span>:Following us on <a href="https://twitter.com/LYOTNFT" style="color:#00528A">Twitter</a> for the latest 
              announcements.<br>
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:0rem 0 .01rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:When is the reveal date?
            </div>
            <div class="a">
              <span>A</span>:48 hours after sold out.
            </div>
            <div class="line"><img src="@/assets/line1.jpg" style="width:100%;margin:0rem 0 .01rem;"/></div>
          </div>
          <div class="box">
            <div class="q">
              <span>Q</span>:Is it on Ethereum Mainnet?
            </div>
            <div class="a">
              <span>A</span>:Yes.
            </div>
          </div>
        </div>
        <div class="line" style="margin:.05rem 0 .07rem"><img src="@/assets/line3.jpg" style="width:100%;margin:.1rem 0"/></div>
        <!-- <div class="box">
            <div class="q">
              <span>Q</span>:How many artists are signed?
            </div>
            <div class="a">
              <span>A</span>:We have signed three artists so far. One is experienced in serving game industry clients and the other two are highly stylized tattoo artists,who<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have licensed their pre-existing series of artworks for use.<br>
            </div>
          </div> -->
          <div class="tip">If you are an artist interested in East Asian cultural themes such as the "Classic of Mountains and Seas", please send a cooperation email with a link to your work to <a>business@luckyyear.club</a></div>
          <!-- <div class="message">*If you are an artist interested in East Asian cultural themes such as the "Classic of Mountains and Seas," please send a cooperation email with a link to your work to <a style="color:#00528A">iris@planagroup.com</a></div> -->
          <!-- <div class="message" style="color:#00528A">If you are an artist interested in East Asian cultural themes such as the "Classic of Mountains and Seas," please send a cooperation email with a link to your work to <a>iris@planagroup.com</a></div> -->
      </div>
    </div>
  </div>
</template>

<script>

 export default {
   components: {
     
   },
  /**
  * 数据部分
  */
   data() {
     return {
      show:false
     }
   },
   computed: {},
   watch: {},
   created() {
     
   },
   mounted() {
     document.addEventListener("mousemove",parallax);
     function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX("+ x +"px) translateY(" + y +"px)"
      })
     }
   },
   methods: {
  
   },
 }
</script>

<style lang='scss' scoped>
.home_page{
  .banner{
    background-color: #00528A;
    width:100%;
    height: 4.585rem;
    position: relative;
    &:hover{
      // .bg{
      //   transform: translateY(8px);

      // }
    }
    .bg{
        // background-image: url('../../assets/bg.png');
        width:7rem;
        margin: auto;
        position: absolute;
        left:calc((100% - 7rem) / 2);
        height: 2.8rem;
        top:calc(calc(4.585rem - 3.5rem) / 2);
        img{
            width:100%;
        }
    }
    .yun{
        position: absolute;
        width:7rem;
        bottom: calc(calc(4.585rem - 2.3rem) / 2);
        left:calc((100% - 7rem) / 2);
    }
    .text1{
        width:7rem;
        position: absolute;
        bottom: calc(calc(4.585rem - 3.45rem) / 2);
        left:calc((100% - 7rem) / 2);
    }
    .cat{
        position: absolute;
        width:3rem;
        top:calc(calc(4.585rem - 2.35rem) / 2);
        left:calc((100% - 3rem) / 2);
    }
    .text{
        width:.95rem;
        position: absolute;
        top:calc(calc(4.585rem - 2.25rem) / 2);
        right:1.43rem;
        -webkit-animation:spin 50s linear infinite;
        animation: spin 50s linear infinite;
    }

    @keyframes spin{
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
        transition: all 5s;
      }
    }
  }
  .part2{
    background-color: #E7DBCD;
    padding:.3rem .25rem 0;
    .left{
      float: left;
      width:6.5rem;
      .title{
        color: #00528A;
        font-size: .27rem;
        font-family: 'BSBSC';
        margin-bottom: .1rem;
        margin-top:.3rem;
        &:first-child{
          padding-top: .5rem;
          margin-top: 0;
        }
      }
      .text{
        color:#000;
        font-family: 'oppoB';
        font-size: .12rem;
      }
    }
    // .slide-fade-enter-active {
    //   transition: all 3s ease-out;
    // }

    // .slide-fade-leave-active {
    //   transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
    // }

    // .slide-fade-enter-from,
    // .slide-fade-leave-to {
    //   transform: translateX(-50px);
    //   opacity: 0;
    // }
    .right{
      float: right;
      width:calc(100% - 6.5rem);
      position: relative;
      .zs{
        width:1.85rem;
        position: absolute;
      }
      .zs1{
        top:.25rem;
        left:.3rem;
        animation: fade-one ease 2s;
	      animation-fill-mode: forwards;
      }
      .zs2{
        top:1.58rem;
        right: 0;
        animation: fade-two ease 2s;
	      animation-fill-mode: forwards;
      }
      .zs3{
        top:2.9rem;
        left:.45rem;
        animation: fade-three ease 2s;
	      animation-fill-mode: forwards;
      }
    }
    @keyframes fade-one {
      from {
        opacity: 0;
        transform: translate(-150px,-50px);
      }
      to {
        opacity: 1;
        transform: translate(0,0);
      }
    }
    @keyframes fade-two {
      from {
        opacity: 0;
        transform: translate(150px,50px);
      }
      to {
        opacity: 1;
        transform: translate(0,0);
      }
    }
    @keyframes fade-three {
      from {
        opacity: 0;
        transform: translate(-150px,50px);
      }
      to {
        opacity: 1;
        transform: translate(0,0);
      }
    }
  }
  .part3{
    background: #E7DBCD;
    padding:0 .25rem;
    .title{
      color: #00528A;
      font-size: .5rem;
      font-family: 'BSBSC';
      padding-top: .7rem;
      span{
        animation: bounce 1s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
        display: inline-block;
        &:nth-child(1){
          animation-delay: 0s;
        }
        &:nth-child(2){
          animation-delay: 0.5s;
        }
        &:nth-child(3){
          animation-delay: 1.3s;
        }
      }
    }
    @keyframes bounce {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(0, -.05rem, 0);
      }
    }
    .content{
      .left{
        float: left;
        width:46%;
      }
      .right{
        float: right;
        width:46%;
        .box{
          .a{
            margin-bottom: 0;
          }
        }
      }
      .box{
        div{
          color:#000;
          font-family: 'oppoB';
          font-size: .115rem;
          margin-bottom: .05rem;
          line-height: .18rem;
          &.line{
            margin-bottom: .01rem;
          }

        }
        span{
          color: #fff;
          font-size: .1rem;
          font-family: 'BSBSC';
          background:#00528A;
          width:.18rem;
          height: .18rem;
          text-align: center;
          line-height: .18rem;
          display: inline-block;
          border-radius: .3rem;
          margin-right: .04rem;
        }
      }
    }
    .tip{
      background:#00528A;
      font-family: 'oppoB';
      font-size: .175rem;
      padding:.08rem .2rem;
      text-align: center;
      color:rgba(255,255,255,.5);
      border-radius: 3px;
      margin:.2rem 0 .8rem;
    }
    .message{
      color:#000;
      font-family: 'oppoB';
      font-size: .11rem;
      // padding-left: .2rem;
      padding-bottom: 1rem;
    }
  }
}
</style>