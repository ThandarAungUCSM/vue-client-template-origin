import Vue from 'vue'
import Router from 'vue-router'
import Sample1 from '@/components/center/Sample1'
import Sample2 from '@/components/center/Sample2'
import Default from '@/components/center/Default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sample1',
      component: Sample1
    },
    {
      path: '/sample2',
      component: Sample2
    },
    {
      path: '*',
      component: Default
    }
  ]
})
