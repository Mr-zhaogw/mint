<template>
  <div class="GW-home">
    <div class="contentheight" ref="testref">
      <div>这是第一行</div>
    </div>
    <div
      class="contentheight"
      :class="{ boxtranslateY: true, testenter: testShow }"
      ref="testref"
    >
      这是第二行
      <div :class="{ boxleftTo20: true, boxtestenterX: testShow }">
        这个文字是从左边飞入
      </div>
    </div>
    <div
      class="contentheight"
      :class="{ boxtranslateY: true, testenter: testShow2 }"
      ref="test2ref"
    >
      这是第三行
      <div :class="{ boxtranslateXright: true, boxtestenterX: testShow2 }">
        这个文字是从右边飞入
      </div>
    </div>
    <div
      class="contentheight"
      :class="{ boxtranslateY: true, testenter: testShow3 }"
      ref="test3ref"
    >
      这是向上划入
    </div>
    <div
      class="contentheight"
      :class="{ boxtranslateY: true, testenter: testShow4 }"
      ref="test4ref"
    >
      这是向上划入
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      current: 1,
      currentScroll: 0,
      testShow: false,
      testShow2: false,
      testShow3: false,
      testShow4: false,
      testShow5: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollbox, true)
  },
  methods: {
    handleScrollbox() {
      this.currentScroll = window.pageYOffset //表示当前滚动的位置

      if (this.currentScroll >= this.$refs.testref.offsetTop - 600) {
        //当前滚动位置到达testref的时候，显示div（100作为调整用）
        this.testShow = true
      }
      if (this.currentScroll >= this.$refs.test2ref.offsetTop - 440) {
        this.testShow2 = true
      }
      if (this.currentScroll >= this.$refs.test3ref.offsetTop - 440) {
        this.testShow3 = true
      }

      if (this.currentScroll >= this.$refs.test4ref.offsetTop - 440) {
        this.testShow4 = true
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollbox, true)
  },
}
</script>
<style>
.contentheight {
  width: 100%;
  height: 500px;
  padding: 200px;
  font-size: 32px;
  color: #fff;
}
.contentheight:nth-child(odd) {
  background-color: rgb(20, 8, 77);
}

.contentheight:nth-child(even) {
  background-color: rgb(49, 24, 175);
}
.boxUp {
  transform: translateY(0%) !important; 
  opacity: 1 !important; 
  transition: all .5s ease;
}

.boxUpTo10 {
  transform: translateY(10%); 
  opacity: 0; 
}

.boxleftTo20 {
  transform: translateX(-20%); 
  opacity: 0; 
}

.boxtranslateXright {
  transform: translateX(120%); 
  opacity: 0; 
}


.boxtestenterX {
  transform: translateX(0%) !important; 
  opacity: 1 !important; 
  transition: all 1s ease;
}
</style>

