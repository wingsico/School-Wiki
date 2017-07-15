<template>
  <div class="question-plate search-main">
    <div @click="setLocalStorage" v-for="(item,index) in result.data" :key="index">
      <router-link tag="div" :to="item.suffix" replace>
        <h4 class="question" v-html=" item.title "></h4>
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
    </div>
  
    <p class="tips" v-show="result.data.length === 0">什么也没找到呢，换一个搜一搜吧</p>
  </div>
</template>
<script>
export default {
  props: ['searchResult', 'searchValue'],
  data() {
    return {
      value: this.searchValue,
      result: this.searchResult,
    }
  },

  methods: {
    setLocalStorage() {
      let records = JSON.parse(window.localStorage.getItem('searchRecords'))
      let len = records.length
      if (this.value != '') {
        if (len === 0) {
          records.unshift(this.value)
        } else {
          for (let i = 0; i < len; i++) {
            if (this.value == records[i]) {
              return
            }
          }
          records.unshift(this.value)
        }
        localStorage.setItem('searchRecords', JSON.stringify(records))
      }

    }
  },

  watch: {
    searchResult() {
      // console.log(this.searchValue, this.searchResult)
      this.result = this.searchResult
      this.value = this.searchValue
    }
  },

  computed: {
    rebuildStr(str,keyword) {
      console.log(str)
      console.log(keyword)
      let arr = str.split(keyword)

      return arr.join('<span class="text-keywords">' + keyword + '</span>')
    }
  }
}

</script>

<style scoped>


.question-plate {
  margin-top: 0.5rem;
  text-align: left;
}

.question-plate>div {
  padding: 0.4rem 0.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  background-color: #fff;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .12);
  border-radius: 0.15rem;
}


.question-plate>div h4 {
  font-size: 0.5rem;
  /*height: 0.8rem;*/
  line-height: 0.7rem;
  font-weight: normal;
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  word-wrap: break-word;
  word-break: normal;
  /*white-space: nowrap;*/
  width: 79%;
  color: #404041;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.question-plate>div p {
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

.question-plate>div .pageviews {
  display: block;
  font-size: 0.4rem;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
}


.question-plate>div .pageviews span {
  color: #cdcdcd;
  position: relative;
  top: -0.08rem;
  right: 0;
}



.question-plate>div .homer {
  font-size: 0.3rem;
  width: 1.1rem;
  color: #cdcdcd;
  position: relative;
  top: 0.8rem;
  left: -0.1rem;
}

.question-plate>div .answer {
  position: relative;
  height: 1.4rem;
}

.question-plate .nav {
  height: 100%;
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
  width: 0.9rem;
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


.tips {
  color: #44ceff;
  font-size: 0.4rem;
  text-align: center;
}


.question-plate .loading .iconfont {
  font-size: 0.8rem;
  color: #44ceff;
}


.question-plate .loading {
  text-align: center;
  display: block;
  margin-top: 1rem;
  animation-iteration-count: infinite;
}



</style>
