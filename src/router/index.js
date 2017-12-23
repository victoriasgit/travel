import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Task from '@/components/Task'
import Country from '@/components/Country'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/task/:city',
      name: 'Task',
      component: Task
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    }
  ]
})
