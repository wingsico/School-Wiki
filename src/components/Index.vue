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
    this.setTitle('百事通')
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

p {
  text-align: justify;
  text-justify: inter-ideograph
}

.container {
  padding: 0.4rem;
}

.container-plates {
  animation-duration: 0.5s;
}
</style>
