<template>
  <div class="container">
    <SearchInput></SearchInput>
    <transition :name="transType">
      <router-view class="child-view"></router-view>
    </transition>
  
  </div>
</template>

<script>
import SearchInput from './search_input/SearchInput'
export default {
  name: 'Index',
  data() {
    return {
      transType: 'slide-left'
    }
  },
  methods: {
    setLocalStorage() {
      
      if (!('searchRecords' in localStorage)) {
        localStorage.setItem('searchRecords', '[]')
      }
    }
  },
  components: {
    SearchInput
  },
  created() {
    this.setLocalStorage()
    
  },
  watch: {
    '$route'(to, from) {
      this.$root.eventHub.$emit('clearValue')
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transType = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
 
  height: 100%;
}



</style>
