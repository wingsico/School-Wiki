<template>
  <div class="search-box">
    <router-link to="/search">
      <input @focus="addBorderBottom"  placeholder="输入问题关键字搜索" ref="input" v-model="value">
    </router-link>
    <div class="back" @click="backToPrevPage" v-show="state.isFocus">×</div>
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
      value: ''
    }
  },
  methods: {
    backToPrevPage() {
      window.history.go(-1)
      this.removeBorderBottom()
    },

    addBorderBottom(){
      this.state.isFocus = true
      this.$refs.input.style.borderBottom = "1px solid #ff8080"
    },

    removeBorderBottom(){   
      this.state.isFocus = false
      this.$refs.input.style.borderBottom = "none" 
      this.$refs.input.blur()
    },
    shareState(){
      this.$root.eventHub.$refs = this.$refs
      console.log(this.$refs)
      console.log(this.$refs.input)
    }
  },

  created() {
    this.$root.eventHub.$on('clearValue',()=>{
      this.value = ''
    })

    this.$root.eventHub.$on('addValue',(val)=>{
      this.value = val
    })

    this.$root.eventHub.$on('inputOnBlur',()=>{
      this.removeBorderBottom()
    })   

    this.shareState()
  },

  watch: {
    value() {
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
.search-box {
  width: 100%;
  position: relative;
  background-color: #fff;
  z-index: 1;
}

input {
  display: block;
  border: none;
  width: 90%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.5rem;
  margin: 0 auto;
  outline: none;
}




.related-area {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 1.2rem;
  background-color: rgba(255, 255, 255, .5);
  height: 100%;
}

.back {
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  position: absolute;
  right: 0.5rem;
  top: 0.27rem;
  color: #fff;
  font-size: 0.6rem;
  background-color: #ff8080;
  border-radius: 50%;
}
</style>

