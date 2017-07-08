<template>
  <div class="answer-page">
    <h3 class="question">的点点滴滴多</h3>
    <div class="container">
      <span class="homer">小家园：</span>
      <p class="answer">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
    <div class="btns">
  
      <router-link to="/type/id" tag="div" class="prev" replace="">
        上一条： <span>男男女女女女</span>
      </router-link>
      <router-link to="/type/id" tag="div" class="next" replace="">
        下一条：
        <span>的点点滴滴多多</span>
      </router-link>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>
.answer-page {
  text-align: left;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  position: relative;
  background-color: #fff;
}

.answer-page .question {
  font-size: 0.5rem;
}

.answer-page .container {
  margin-top: 0.7rem;
}

.answer-page .container .homer {
  font-size: 0.4rem;
}

.answer-page .container .answer {
  text-indent: 2em;
  line-height: 0.6rem;
  margin-top: 0.6rem;
  font-size: 0.4rem;
}

.answer-page .btns {
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 2rem);
}


.answer-page .btns div {
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  color: #ff8080;
}
</style>