<template>
  <!--哇这是真的丑-->
    <div class="topics" ref="topics">
      <div class="layout">
        <router-link to="/api/life/lifecatalog" tag="div">
          <div>
            #校园生活
          </div>
        </router-link>
  
        <router-link to="/api/study/studycatalog" tag="div" class="middle">
          <div>
            #学习
          </div>
        </router-link>
  
        <router-link to="/api/administrativeaffairs/administrativeaffairscatalog" tag="div">
          <div>
            #行政事务
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
   
  },
  created() {
    this.setTitle('更多热门')

  },
  mounted() {
    this.$root.eventHub.$emit('inputOnBlur')
  }
}
</script>

<style>
.topics {
  display: flex;
  flex-direction: column;
}

.topics .layout {
  display: flex;
  margin-top: 0.5rem;
}

.topics .layout>div {
  display: flex;
  flex: 1;
  display: inline-block;
  font-size: 0.4rem;
  background-color: #fff;
  border-radius: 0.1rem;
  height: 3.5rem;
  line-height: 3.5rem;
  justify-content: center;
  align-items: center;
  color: #4fb2ff;
  box-shadow: 0 3px 20px 0 rgba(0,0,0,.12);
}




.topics .middle {
  margin: 0 0.4rem;
}


</style>
