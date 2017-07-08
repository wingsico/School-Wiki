<template>
  <div class="question-plate" ref="list">
    <div v-for="item in questions">
      <router-link tag="div" to="/student/1">
        <h4 class="question">sssss</h4>
        <div class="answer">
          <span class="homer">小家园：</span>
          <p>哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
        </div>
        <div class="pageviews">
          <span>300</span>次浏览</div>
      </router-link>
    </div>

    <div class="isViewport" ref="load"></div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type,
      questions: [1,1,1,1,1,1,1,1,1,1]
    }
  },
  methods: {
    loadMore() {
      let isView = this.isViewport()
      if (isView) {
        this.questions.push(1,1,1,1,1,1,1,1,1,1)
      }
    },

    isViewport() {
      let scroll = document.body.scrollTop + window.innerHeight
      if (scroll > this.$refs.list.offsetHeight) {
        return true
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.loadMore)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.loadMore)
  }
}
</script>

<style scoped>
.question-plate .isViewport {
  width: 100%;
  height: 1rem;
  background-color: #44ceff;
}


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
