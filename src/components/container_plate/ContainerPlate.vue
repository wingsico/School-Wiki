<template>
  <div class="plates">
    <div class="topic-plate">
      <router-link to="/topic/welcome">
        <div>#迎新专栏</div>
      </router-link>
  
      <router-link to="/topic/life">
        <div class="middle">#生活</div>
      </router-link>
  
      <router-link to="/topic">
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
    this.$root.eventHub.$emit('inputOnBlur')
  }
}
</script>

<style scoped>
.topic-plate {
  height: 4rem;
}

.topic-plate div {
  margin-top: 0.8rem;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 0.5rem;
  background-color: #fff;
  border-radius: 0.3rem;
}


.topic-plate .middle {
  margin: 0 0.1rem;
}

</style>

