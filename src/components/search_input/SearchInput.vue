<template>
  <div class="search-box">
    <router-link to="/search">
      <input @focus="addBorderBottom" placeholder="输入问题关键字搜索" ref="input" v-model="value">
    </router-link>
    <i class="iconfont icon-fangdajing"></i>
    <div class="back">
    <i class="iconfont icon-cha" @click="backToPrevPage" v-show="state.isFocus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      state: {
        isFocus: false,
      },
      value: '',
    }
  },
 
  methods: {
    backToPrevPage() {
      window.history.go(-1)
      this.removeBorderBottom()
    },

    addBorderBottom(){
      this.state.isFocus = true
    },

    removeBorderBottom(){   
      this.value = ''
      this.state.isFocus = false
      this.$root.eventHub.$refs.input.blur()
    },

    shareDom(){
      // 全局保存节点，防止重新渲染的时候节点不存在，解决报错问题
      this.$root.eventHub.$refs.input = this.$refs.input
    }
  },

  mounted() {
    this.$root.eventHub.$on('clearValue',()=>{
      this.value = ''
    })

    this.$root.eventHub.$on('addValue',(val)=>{
      this.value = val
    })

    this.$root.eventHub.$on('inputOnBlur',()=>{
      this.removeBorderBottom()
    })   

    this.shareDom()
  },

  watch: {
    value() {
      this.value = this.value.trim()
      if (this.value === '') {
        this.$root.eventHub.$emit('noValue')
      } else {
        this.$root.eventHub.$emit('hasValue', this.value)
      }
    }
  },

}

</script>

<style scoped>


.iconfont {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.25rem;
  font-size: 0.5rem;
  color: #737373;
}

.search-box {
  position: relative;
  background-color: #fff;
  z-index: 1;
  height: 1.1rem;
  border: 1px solid #a0a0a0;
  border-radius: 0.1rem;
  line-height: 1.1rem;
}

input {
  display: block;
  border: none;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.4rem;
  outline: none;
  margin-left: 1rem;
  background-color: transparent;
  width: 7rem;
}

.related-area {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 1.2rem;
  background-color: rgba(255, 255, 255, .5);
  height: 100%;
}

.search-box .back {
  height: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.2rem;
}

.search-box .icon-cha {
  font-size: 0.65rem;
}

</style>

