import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import ContainerPlate from '../components/container_plate/ContainerPlate.vue'
import TopicPlate from '../components/topic_plate/TopicPlate.vue'
import SearchRecord from '../components/history_record/SearchRecord.vue'
import SearchResult from '../components/search_result/SearchResult.vue'
import Answer from '../components/answer/Answer.vue'
import Subjects from '../components/subjects/Subjects.vue'
Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          meta: {
            title: '百事通'
          },
          component: ContainerPlate
        }, {
          path: '/search',
          meta: {
            title: '搜你所想'
          },
          component: SearchRecord
        }, {
          path: '/topic',
          meta: {
            title: '百事通'
          },
          component: TopicPlate
        }, {
          path: '/topic/:type',
          meta: {
            title: '专栏'
          },
          component: Subjects
        }
      ]
    }, {
      path: '/:type/:id',
      meta: {
        title: '百事通'
      },
      component: Answer
    }
  ],
})
