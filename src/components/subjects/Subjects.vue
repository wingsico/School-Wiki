<template>
  <div class="question-plate" ref="list">
    <transition-group tag="ul" name="custom-classes-transition" enter-active-class="zoomInLeft" class="fade-in-list">
      <li v-for="(item,index) in questions.data" :key="index" class="list animated">
        <router-link tag="div" :to=" $route.params.typecatalog + '/' + item.suffix">
          <h4 class="question">{{item.title}}</h4>
          <div class="answer">
  
            <div class="homer-items">
              <span class="homer">小家园</span>
              <img class="homerIcon" src="../../assets/images/homer.png"></img>
            </div>
  
            <p>{{ item.content }}</p>
          </div>
          <div class="pageviews">
            <i class="iconfont icon-liulan"></i>
            <span>{{ item.page_view }}</span>
          </div>
        </router-link>
      </li>
  
    </transition-group>
  
    <span class="loading animated bounce" ref="load" v-show="!isGetAll">
      <i class="iconfont icon-jiayuanlianxi"></i>
    </span>
  
    <span class="void-result" v-show="isGetAll">
      已经到达最底部了~
    </span>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type + '/' + this.$route.params.typecatalog,
      questions: {},
      isGetAll: false,
      currentPage: 1,
      isAnimation: false,
      titleHash: {
        life: '校园生活',
        study: '学习',
        administrativeaffairs: '行政事务'
      }
    }
  },
  methods: {
    loadMore() {
      let isView = this.isViewport()
      if (isView) {
        if (!!this.questions.next) {
          if (!this.isAnimation) {
            this.currentPage++
            this.isAnimation = true
            this.getMoreQuestions()
          }
        } else {
          this.isGetAll = true
          window.removeEventListener('scroll', this.loadMore)
        }
      }
    },

    isViewport() {
      let scroll = document.body.scrollTop + window.innerHeight + this.$refs.load.offsetHeight
      if (scroll > this.$refs.list.offsetHeight) {
        return true
      }
    },

    getTopicQuestions() {
      this.$http({
        method: 'post',
        url: 'https://wiki.ncuos.com/api/' + this.type + '?page=' + this.currentPage,
      })
        .then(res => {
          this.questions = res.data
        })
    },


    getMoreQuestions() {
      this.$http({
        method: 'post',
        url: 'https://wiki.ncuos.com/api/' + this.type + '?page=' + this.currentPage,
      })
        .then(res => {
          this.questions.data = this.questions.data.concat(res.data.data)
          this.questions.next = res.data.next
          this.isAnimation = false
        })
    }
  },


  created() {
    this.getTopicQuestions()
    this.setTitle(this.titleHash[this.$route.params.type])
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
.question-plate .loading {
  text-align: center;
  display: block;
  margin-top: 1rem;
  animation-iteration-count: infinite;
}

.question-plate .void-result {
  text-align: center;
  display: block;
  margin-top: 0.5rem;
  font-size: 0.4rem;
  color: #44ceff;
}


.question-plate .loading .iconfont {
  font-size: 0.8rem;
  color: #44ceff;
}



.question-plate {
  margin-top: 0.5rem;
  text-align: left;
}

.question-plate .list {
  padding: 0.4rem 0.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  background-color: #fff;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .12);
  border-radius: 0.15rem;
}


.question-plate .list h4 {
  font-size: 0.5rem;
  line-height: 0.7rem;
  font-weight: normal;
  word-wrap: break-word;
  word-break: normal;
  width: 79%;
  color: #404041;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.question-plate .list p {
  height: 1.1rem;
  position: absolute;
  vertical-align: middle;
  font-size: 0.4rem;
  line-height: 0.58rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  top: 0.2rem;
  left: 1.5rem;
  color: #737373;
}

.question-plate .list .pageviews {
  display: block;
  font-size: 0.4rem;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
}

.question-plate .list .pageviews span {
  color: #cdcdcd;
  position: relative;
  top: -0.08rem;
  right: 0;
}


.question-plate .list .homer {

  font-size: 0.3rem;
  width: 1.1rem;
  color: #cdcdcd;
  position: relative;
  top: 0.8rem;
  left: -0.1rem;
}

.question-plate .list .answer {
  position: relative;
  height: 1.4rem;
}


.homer-items {
  position: relative;
  display: inline-block;
  height: 100%;
  top: 0.1rem;
  left: 0.2rem;
}

.homerIcon {
  height: 0.8rem;
  width: .9rem;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -0.45rem;
}


.icon-liulan {
  font-size: 0.6rem;
  color: #cdcdcd;
  position: relative;
  top: 0rem;
}
</style>
