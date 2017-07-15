<template>
  <div class="plates">
    <div class="topic-plate">
      <router-link to="/api/life/lifecatalog" tag="div">
        <div>#校园生活</div>
      </router-link>
  
      <router-link to="/api/study/studycatalog" tag="div" class="middle">
        <div>#学习</div>
      </router-link>
  
      <router-link to="/topic" tag="div" class="more">
        <div>#更多热门</div>
      </router-link>
    </div>
    <HotQuestions></HotQuestions>
  </div>
</template>
<script>
import HotQuestions from '../hot_questions/HotQuestions'
export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    HotQuestions,
  },
  created() {
    // this.setTitle('百事通')
  },
  mounted() {
    this.$root.eventHub.$emit('inputOnBlur')
  }
}
</script>

<style scoped>
.topic-plate {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
}

.topic-plate>div {
  display: flex;
  flex: 1;
  display: inline-block;
  font-size: 0.4rem;
  background-color: #fff;
  border-radius: 0.15rem;
  height: 3.5rem;
  line-height: 3.5rem;
  justify-content: center;
  align-items: center;
  color: #4fb2ff;
  box-shadow: 0 3px 20px 0 rgba(0,0,0,.12);
}

.topic-plate .more {
  color: #ffac3f;
}

.topic-plate .middle {
  margin: 0 0.4rem;
}
</style>

