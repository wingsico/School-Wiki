<template>
  <div class="answer-page" ref="page">
    <div class="answer-container" ref="container">
    <h3 class="question">的点点滴滴多</h3>
    <div class="container">
      <span class="homer">小家园：</span>
      <p class="answer">
        
  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
    </div>
    <div class="btns" ref="btns">
      
      <router-link to="/topic" tag="div" class="prev" replace>
        上一篇： <span>男男女女女女</span>
      </router-link>
      <router-link to="/" tag="div" class="next" replace>
        下一篇：
        <span>的点点滴滴多多</span>
      </router-link>
  
    </div>

    
  <i class="iconfont icon-xinxiaoxixiangxiajiantou" v-show="state.isShow"></i>

  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        isShow: false,
      }
    }
  },
  methods: {
    setPageHeight(){
      this.$refs.page.style.height = window.innerHeight - this.$refs.page.offsetTop - this.$refs.btns.offsetHeight + 'px';
    },
    isAnswerShowAll(){
      let viewHeight = this.$refs.page.offsetHeight,
        answerHeight = this.$refs.container.offsetHeight
        // console.log(viewHeight,answerHeight)
      this.state.isShow = answerHeight > viewHeight? true: false
    }
  },
  created(){
    
  },
  mounted(){
    this.setPageHeight()
    this.isAnswerShowAll()
  }
}
</script>

<style scoped>
@keyframes floatBounce {
  0% {
    bottom: 2.9rem;
  }
  50% {
    bottom: 3.2rem;
  }
  100% {
    bottom: 2.9rem;
  }
}
.answer-page {
  text-align: left;
  box-sizing: border-box;
  position: relative;
  background-color:#fff;
  height: 100%;
}
.answer-page .answer-container {
  margin-top: 0.5rem;
  border-top: 1px solid #cdcdcd;
  background-color: #fff;
  padding: 0.4rem;
}
.answer-page .question {
  font-size: 0.5rem;
  color: #404041;
  font-weight: normal;
  
}

.answer-page .container {
  margin-top: 0.5rem;
  color: #404041;
}

.answer-page .container .homer {
  font-size: 0.4rem;
}

.answer-page .container .answer {
  text-indent: 2em;
  line-height: 0.9rem;
  margin-top: 0.3rem;
  font-size: 0.4rem;
  letter-spacing: 0.02rem;
  text-align: justify;
}

.answer-page .btns {
  position: fixed;
  bottom: 0;
  height: 2rem;
  background-color: #fbfbfb;
  border-top: 1px solid #cdcdcd;
  width: calc(100% - 0.8rem);
  padding: 0.4rem;
  color: #737373;
}


.answer-page .btns div {
  height: 0.8rem;
  line-height: 0.8rem;
  width: 100%;
  color: #737373;
  font-size: 0.4rem;
}

.answer-page .btns div span {
  color: #737373;
}

.iconfont {
  position: fixed;
  bottom: 2.9rem;
  font-size: 0.7rem;
  left: 50%;
  transform: translateX(-50%);
  color: #707071;
  animation-name: floatBounce;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
</style>