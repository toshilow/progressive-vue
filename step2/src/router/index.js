import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../views/App/App'
import Login from '../views/Login/Login'
import List from '../components/List/List'
import Detail from '../components/Detail/Detail'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/app', component: App ,
      children: [
        { path: '/', component: List },
        { path: ':id', component: Detail },
        ]
    },
    // { path: '/user/:id', component: UserView },
    { path: '*', redirect: '/login' }
  ]
})