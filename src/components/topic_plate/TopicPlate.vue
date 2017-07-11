<template>
  <!--哇这是真的丑-->
    <div class="topics" ref="topics">
      <div class="layout">
        <router-link to="/topic/welcome" tag="div">
          <div>
            #迎新专栏
          </div>
        </router-link>
  
        <router-link to="/topic/life" tag="div" class="middle">
          <div>
            #校园生活
          </div>
        </router-link>
  
        <router-link to="/topic/affairs" tag="div">
          <div>
            #行政事务
          </div>
        </router-link>
      </div>
  
      <div class="layout">
        <router-link to="/topic/organization" tag="div">
          <div>
            #社团组织
          </div>
        </router-link>
  
        <router-link to="/topic/study" tag="div" class="middle">
          <div>
            #学习
          </div>
        </router-link>
  
        <router-link to="/topic/query" tag="div">
          <div>
            #快速查询
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
    // setViewHeight() {
    //   this.$refs.topics.style.height = window.innerHeight - this.$root.eventHub.$refs.input.offsetHeight + 'px'
    // }
  },
  created() {
    // this.setTitle('百事通')

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
  margin-top: 0.85rem;
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
  border: 1px solid #cdcdcd;
  
}




.topics .middle {
  margin: 0 0.4rem;
}


</style>
