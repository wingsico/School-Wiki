<template>
  <div class="related-area">
    <transition name="custom-classes-transition" enter-active-class="zoomInRight" leave-active-class="zoomOutRight">
      <div class="records animated" v-if="!state.isValueExist" key="histroy">
        <ul>
          <li v-for="(item,index) in historyRecords" :key="index">
            <span class="record" @click="addToInput(index)">{{ item }}</span>
            <i class="iconfont icon-fangdajing"></i>
          </li>
        </ul>
      </div>
      <SearchResult v-else :result="searchResult" key="result" class="animated result"></SearchResult>
    </transition>
  </div>
</template>

<script>
import SearchResult from '../search_result/SearchResult'
export default {
  data() {
    return {
      state: {
        isValueExist: false,
      },
      searchResult: '',
      historyRecords: []
    }
  },
  methods: {
    addToInput(index) {
      this.$root.eventHub.$emit('addValue', this.historyRecords[index])
    },
    getLocalStorage() {
      let records = JSON.parse(localStorage.getItem('searchRecords'))
      this.historyRecords = records
    }
  },
  components: {
    SearchResult
  }
  ,
  created() {
    // this.$root.eventHub.$on('getRecords',() => {
    this.$root.eventHub.$on('hasValue', (val) => {
      this.state.isValueExist = true
      // axios()
      this.searchResult = val
    })

    this.$root.eventHub.$on('noValue', () => {
      this.state.isValueExist = false
    })

    this.getLocalStorage()
    // this.setTitle('搜你所想')
  }
}

</script>

<style scoped>
.related-area {
  width: 100%;
  text-align: center;
  padding-top: 0.1rem;
  z-index: 0;
  height: 100%;
  box-sizing: border-box;
}

.related-area .records {
  display: block;
  animation-duration: 0.5s;
  /*height: calc(100% - 1.9rem);*/
  box-sizing: border-box;
}

.related-area .records>span {
  color: #ccc;
}

.related-area li {
  position: relative;
  display: block;
  text-align: left; 
  padding-left: 1rem;
  font-size: 0.4rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #cdcdcd;
  letter-spacing: 0.01rem;
}

.related-area li span {
  display: block;
}

.related-area .result {
  animation-duration: 0.5s;
}


.iconfont {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.25rem;
  font-size: 0.5rem;
  color: #737373;
}


</style>