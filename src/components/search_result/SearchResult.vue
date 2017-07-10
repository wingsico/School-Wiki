<template>
  <div class="question-plate">
    <div @click="setLocalStorage">
      <router-link tag="div" to="/student/1" replace>
        <h4 class="question">{{ searchResult }}</h4>
        <div class="answer">
          <span class="homer">小家园：</span>
          <p>哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
        </div>
        <div class="pageviews">
          <span>300</span>次浏览</div>
      </router-link>
    </div>
  
    <div>
      <router-link tag="div" to="/student/1">
        <h4 class="question">怎么办理学生卡？</h4>
        <div class="answer">
          <span class="homer">小家园：</span>
          <p>哈哈哈哈好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
        </div>
        <div class="pageviews">
          <span>300</span>次浏览</div>
      </router-link>
    </div>
  
  </div>
</template>
<script>
export default {
  props: ['result'],
  data() {
    return {
      inputValue: '',
      searchResult: this.result
    }
  },
  methods: {
    setLocalStorage() {
      let records = JSON.parse(window.localStorage.getItem('searchRecords'))
      let len = records.length
      if (this.inputValue != '') {
        if (len === 0) {
          records.unshift(this.inputValue)
        } else {
          for (let i = 0; i < len; i++) {
            if (this.inputValue == records[i]) {
              return
            }
          }
          records.unshift(this.inputValue)
        }
        localStorage.setItem('searchRecords', JSON.stringify(records))
      }
    }
  },
  watch: {
    result() {
      this.searchResult = this.result
    }
  },

  created() {
    this.$root.eventHub.$on('hasValue', (val) => {
      this.inputValue = val
    })
  }
}
</script>

<style scoped>

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



