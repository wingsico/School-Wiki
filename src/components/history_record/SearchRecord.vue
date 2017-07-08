<template>
  <div class="related-area">
    <div class="records" v-show="!state.isValueExist">
      <span>搜索记录</span>
      <ul>
        <li v-for="(item,index) in historyRecords" :key="index">
          <span class="record" @click="addToInput(index)">{{ item }}</span>
        </li>
      </ul>
    </div>
    <transition name="fade">
    <SearchResult v-show="state.isValueExist" :result="searchResult"></SearchResult>
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

  }
}

</script>

<style scoped>
.related-area {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 1.2rem;
  padding-top: 0.3rem;
  background-color: rgb(255, 255, 255);
  z-index: 0;
  height: calc(100% - 1.2rem);
  box-sizing: border-box;
}

.related-area .records>span {
  color: #ccc;
}

.related-area li {
  font-size: 0.5rem;
  line-height: 0.75rem;
}
</style>