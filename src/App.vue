<template>
  <div id="app">
    <!--主路由出口，淡入淡出动画，点击进入具体回答切换主路由-->
    <transition name="custom-classes-transition"   enter-active-class="fadeInRight" leave-active-class="fadeOutRight" mode="out-in">
      <router-view class="animated index"></router-view>
    </transition>
  
  </div>
</template>

<script> 

export default {
  name: 'app',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}



html,
body {
  width: 100%;
  overflow-x: hidden;
  background-color: #f4f4f4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

span {
  color: #2c3e50;
}

/*.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.child-view {
  position: absolute;
  top: 1.2rem;
  width: 100%;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}


.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}*/

.index {
  animation-duration: 0.3s;  
}
</style>
