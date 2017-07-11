<template>
  <div class="question-plate">
    <div v-for="(item,index) in hotQuestions" :key="index">
      <router-link tag="div" to="/student/1" class="nav">
        <h4 class="question">哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或</h4>
        <div class="answer">
          <span class="homer">小家园：</span>
          <p>哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或ddddd</p>
        </div>
        <div class="pageviews">
          <span>{{}}</span>次浏览</div>
      </router-link>
    </div>
    

  </div>
</template>
<script>
  export default {
    data(){
      return{
        hotQuestions: {}
      }
    },
    methods: {
      getMostPopular(){
        this.$http({
          method: 'get',
          url: ''
        }).then((res)=>{
          this.hotQuestions = res
        })
      },

    },
   

    created(){
      this.getMostPopular()
    }
  }
</script>

<style>

.question-plate {
  margin-top: 0.85rem;
  text-align: left;
}

.question-plate>div {
  height: 2rem;
  padding: 0.4rem 0.5rem;
  position: relative;
  margin-bottom: 0.6rem;
  background-color: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 0.1rem;
}


.question-plate>div h4 {
  font-size: 0.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 5.5rem;
  color: #404041;
}


.question-plate>div p {
  height: 1.1rem;
  position: absolute;
  vertical-align: top;
  font-size: 0.4rem;
  line-height: 0.55rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  top: 0;
  left: 1.5rem;
  color: #737373;
}

.question-plate>div .pageviews {
  display: block;
  font-size: 0.3rem;
  color: #ccc;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #737373;
}


.question-plate>div .homer {
  font-size: 0.4rem;
  width: 1.1rem;
  color: #737373;
  position: relative;
  top: 0.03rem;
}

.question-plate>div .answer {
  position: relative;
  height: 1.1rem;
}

.question-plate .nav {
  height: 100%;
}


</style>

