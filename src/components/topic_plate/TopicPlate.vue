<template>
  <div class="topics">
  
    <router-link to="/topic/welcome">
      <div>
        <span>#迎新专栏</span>
      </div>
    </router-link>
  
    <router-link to="/topic/fun">
      <div>
        <span>#吃喝玩乐</span>
      </div>
    </router-link>
  
    <router-link to="/topic/query">
      <div>
        <span>#地点时间查询</span>
      </div>
    </router-link>
  
    <router-link to="/topic/affairs"> 
      <div>
        <span>#行政事务</span>
      </div>
    </router-link>
  
    <router-link to="/topic/navigation">
      <div>
        <span>#网址导航</span>
      </div>
    </router-link>
  
    <router-link to="/topic/traffic">
      <div>
        <span>#交通出行</span>
      </div>
    </router-link>
  
    <router-link to="/topic/club">
      <div>
        <span>#社团组织</span>
      </div>
    </router-link>
  
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {

  },
  mounted() {
    this.$root.eventHub.$emit('inputOnBlur')
  }
}
</script>

<style scoped>
.topics {
  height: calc(100% - 2.7rem);
  width: 100%;
  margin-top: 1.5rem;
  text-align: center
}

.topics div {
  width: 3rem;
  height: 3rem;
  text-align: center;
  position: relative;
  text-align: left;
  
display: inline-block;

}

.topics div span {
  position: absolute;
  
  
  width: 3rem;
  background-color: #fff;
  text-align: center;
  font-size: 0.5rem;
  left: 0;
  top: 50%;
  margin-top: -1.5rem;
  left: 50%;
  margin-left: -1.5rem;
}
</style>
