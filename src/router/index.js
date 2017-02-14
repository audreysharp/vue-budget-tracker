import Vue from 'vue'
import Router from 'vue-router'
//import Hello from 'components/Hello'
import Transaction from 'components/Transaction'
import Navigation from 'components/Navigation'
import Tab from 'components/Tab'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Test',
    //component: Transaction
  }]
})
