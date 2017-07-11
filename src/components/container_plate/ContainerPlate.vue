<template>
  <div class="plates">
    <div class="topic-plate">
      <router-link to="/topic/welcome"  tag="div">
        <div>#迎新专栏</div>
      </router-link>
  
      <router-link to="/topic/life" tag="div" class="middle">
        <div >#校园生活</div>
      </router-link>
  
      <router-link to="/topic" tag="div" class="more">
        <div>#更多</div>
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
  margin-top: 0.85rem;
}

.topic-plate>div {
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

.topic-plate .more {
  color: #ffac3f;
}

.topic-plate .middle {
  margin: 0 0.4rem;
}


</style>

