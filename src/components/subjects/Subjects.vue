<template>

  <div class="question-plate" ref="list">
    <transition-group tag="ul" name="custom-classes-transition" enter-active-class="zoomInLeft" class="fade-in-list">
      <li v-for="(item,index) in questions" :key="index" class="list animated">
        <router-link tag="div" to="/student/1">
          <h4 class="question">sssss</h4>
          <div class="answer">
            <span class="homer">小家园：</span>
            <p>哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
          </div>
          <div class="pageviews">
            <span>300</span>次浏览</div>
        </router-link>
      </li>
      


    </transition-group>
    
  <div class="isViewport" ref="load">loading...</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type,
      questions: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  },
  methods: {
    loadMore() {
      let isView = this.isViewport()
      if (isView) {
        this.questions.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      }
      console.log()
    },

    isViewport() {
      let scroll = document.body.scrollTop + window.innerHeight + this.$refs.load.offsetHeight
      if (scroll > this.$refs.list.offsetHeight) {
        return true
      }
    }
  },
  created(){
    // this.setTitle(this.type)
  },
  mounted() {
    window.addEventListener('scroll', this.loadMore)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.loadMore)
  }
}
</script>

<style scoped>


.question-plate .isViewport {
  text-align: center;
  font-size: 0.5rem;
}


.question-plate {
  margin-top: 0.55rem;
  text-align: left;
}

.question-plate .list {
  height: 2rem;
  padding: 0.4rem 0.5rem;
  position: relative;
  margin-bottom: 0.6rem;
  background-color: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 0.1rem;
  text-align: left;
}


.question-plate .list h4 {
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


.question-plate .list p {
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

.question-plate .list .pageviews {
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


.question-plate .list .homer {
  font-size: 0.4rem;
  width: 1rem;
  position: relative;
  top: 0.03rem;
  color: #737373;
}

.question-plate .list .answer {
  position: relative;
  height: 1.1rem;
}

</style>
