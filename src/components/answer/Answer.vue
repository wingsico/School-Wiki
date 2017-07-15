<template>
  <div class="answer-page" ref="page">
    <div class="answer-container" ref="container">
      <h3 class="question">{{ container.data.title }}</h3>
      <div class="container">
        <span class="homer">小家园：</span>
        <p class="answer">{{container.data.content}}</p>
      </div>
    </div>
    <div class="btns" ref="btns">
  
      <router-link :to="container.data.front_suffix" tag="div" class="prev" replace>
        上一篇：
        <span>{{container.data.front_title}}</span>
      </router-link>
      <router-link :to="container.data.back_suffix" tag="div" class="next" replace>
        下一篇：
        <span>{{container.data.back_title}}</span>
      </router-link>
  
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        isShow: false,
      },
      id: this.$route.params.id,
      type: this.$route.params.type + '/' + this.$route.params.typecatalog,
      container: {
        data: {
          title: '加载中..',
          content: '不要心急哦~',
          front_suffix: '阿上一篇是什么？',
          back_suffix: '下一篇又是什么?'
        }
      },
      // plates: ['life', 'study', 'administrativeaffairs'],
      // index: 0,
      // prevURI: '',
      // nextURI: ''
    }
  },
  methods: {
    setPageHeight() {
      if (this.$refs.page) {
        console.log(this.$refs.page.offsetTop)
        this.$refs.container.style.height = window.innerHeight - 2.65*this.$refs.page.offsetTop  +'px';
      }
    },


    getBriefContainer() {
      this.$http({
        method: 'get',
        url: 'https://wiki.ncuos.com/api/' + this.type + '/' + this.id,
      })
        .then((res) => {
          this.container = res.data
          this.container.data.content = this.container.data.content.trim()
          // this.index = this.plates.indexOf(this.$route.params.type)
          // console.log(this.container, this.index)
          // this.setURI('prev', 'front_suffix')
          // this.setURI('next', 'back_suffix')
          this.setPageHeight()
        })
    },

    // setURI(type, typename) {
    //   if (!!this.container.data[typename]) {
    //     this[type + 'URI'] = '/api/' + this.type + '/' + this.container.data[typename]
    //   } else {
    //     type === 'next' ? this.index = this.index === this.plates.length - 1 ? 0 : this.index + 1 : this.index = this.index === 0 ? this.plates.length - 1 : this.index - 1
    //     this[type + 'URI'] = '/api/' + this.plates[this.index] + '/' + this.plates[this.index] + 'catalog/1'
    //   }
    // }
  },

  created() {
    this.getBriefContainer()
    this.setTitle('NCU问答')
  },
  watch: {
    '$route'(to, from) {
      // console.log(to, from)
      this.id = to.params.id
      this.type = to.params.type + '/' + to.params.typecatalog
      this.getBriefContainer()
    }
  }
}

</script>

<style scoped>
.answer-page {
  text-align: left;
  box-sizing: border-box;
  position: relative;
  background-color: #fbfbfb;
}

.answer-page .answer-container {
  margin-top: 0.5rem;
  border-top: 1px solid #cdcdcd;
  background-color: #fff;
  padding: 0.4rem;
  ;
}

.answer-page .question {
  font-size: 0.55rem;
  color: #404041;
  font-weight: 700;
}

.answer-page .container {
  margin-top: 0.5rem;
  color: #404041;
  padding-bottom: 0.5rem;
}

.answer-page .container .homer {
  font-size: 0.45rem;
}

.answer-page .container .answer {
  text-indent: 2em;
  line-height: 0.9rem;
  margin-top: 0.3rem;
  font-size: 0.45rem;
  letter-spacing: 0.02rem;
  word-break: break-all;
  white-space: pre-line;
  padding-bottom: 2.8rem;
}

.answer-page .btns {
  background-color: #fbfbfb;
  border-top: 1px solid #cdcdcd;
  width: calc(100% - 0.8rem);
  padding: 0.4rem;
  color: #737373;
  position: fixed;
  bottom: 0;
}

.answer-page .btns div {
  margin-top: 0.2rem;
  line-height: 0.6rem;
  width: 100%;
  color: #737373;
  font-size: 0.45rem;
  word-break: break-all;
}

.answer-page .btns div span {
  color: #737373;
}
</style>
