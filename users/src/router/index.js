import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '../views/homepage'
import Classify from '../views/classify'
import ShoppingCar from '../views/shoppingCar'
import PersonalCenter from '../views/personalCenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },{
      path: '/shoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },{
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/*',
      redirect:"/homepage"
    }

  ]
})
