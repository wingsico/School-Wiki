<template>
  <div class="container">
    <SearchInput></SearchInput>
    <transition name="custom-classes-transition" enter-active-class="bounceInRight" leave-active-class="bounceOutLeft" mode="out-in">
      <router-view class="animated container-plates"></router-view>
    </transition>
  
  </div>
</template>

<script>
import SearchInput from './search_input/SearchInput'
export default {
  name: 'Index',
  data() {
    return {

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

.container-plates {
  animation-duration: 0.5s;
  height: calc(100% - 1.2rem);
}
</style>
