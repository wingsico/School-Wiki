<template>
<!--哇这是真的丑-->
<div class="hack"> 
  <div class="topics">
    <div class="layout">
      <router-link to="/topic/welcome" tag="div">
        <div>
          <p>#迎新专栏</p>
        </div>
      </router-link>
  
      <router-link to="/topic/fun" tag="div">
        <div>
          <p>#吃喝玩乐</p>
        </div>
      </router-link>
  
      <router-link to="/topic/query" tag="div">
        <div>
          <p>#地点时间查询</p>
        </div>
      </router-link>
    </div>
  
    <div class="layout">
      <router-link to="/topic/affairs" tag="div">
        <div>
          <p>#行政事务</p>
        </div>
      </router-link>
  
      <router-link to="/topic/navigation" tag="div">
        <div>
          <p>#网址导航</p>
        </div>
      </router-link>
  
      <router-link to="/topic/traffic" tag="div">
        <div>
          <p>#交通出行</p>
        </div>
      </router-link>
    </div>
  
    <div class="bottom layout">
      <router-link to="/topic/club" tag="div">
        <div>
          <p>#社团组织</p>
        </div>
      </router-link>
  
      <!--占位符-->
      <div>
        <div class="placeholder">
          <p></p>
        </div>
      </div>
  
      <div>
        <div class="placeholder">
          <p></p>
        </div>
      </div>
  
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getViewHeight() {

    }
  },
  mounted() {
    this.$root.eventHub.$emit('inputOnBlur')
  }
}
</script>

<style>

html, body {
  height: 100%;
}
.topics {
  height: calc(100% - 2.7rem);
  display: flex;
  flex-direction: column;
}

.topics .layout {
  flex: 1;
  display: flex;
}

.topics .layout>div {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
}


.topics .layout>div div {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
  position: relative;
  text-align: center;
}


.topics .layout>div  div p {
  line-height: 0.7rem;
  font-size: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.topics .bottom .placeholder {
  background: transparent;
}
</style>
