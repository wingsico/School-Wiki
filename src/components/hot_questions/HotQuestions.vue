<template>
  <div class="question-plate">
    <div v-for="(item,index) in hotQuestions" :key="index">
      <router-link tag="div" to="/student/1">
        <h4 class="question">{{}}</h4>
        <div class="answer">
          <span class="homer">小家园：</span>
          <p>{{}}</p>
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
  margin-top: 0.7rem;
  text-align: left;
}

.question-plate>div {
  height: 2.4rem;
  padding: 0.3rem 1rem;
  position: relative;
  margin-bottom: 0.6rem;
  background-color: #fff;
}


.question-plate>div h4 {
  font-size: 0.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-weight: normal;
}


.question-plate>div p {
  height: 1.4rem;
  position: absolute;
  vertical-align: top;
  font-size: 0.4rem;
  line-height: 0.7rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  top: 0rem;
  left: 1.8rem;
}

.question-plate>div .pageviews {
  display: block;
  font-size: 0.4rem;
  color: #ccc;
  position: absolute;
  right: 1rem;
  top: 0.27rem;
  height: 0.8rem;
  line-height: 0.8rem;
}


.question-plate>div .homer {
  font-size: 0.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  width: 1.1rem;
}

.question-plate>div .answer {
  margin-top: 0.2rem;
  position: relative;
}

</style>

