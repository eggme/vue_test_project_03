import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingStringView.vue')
  },
  {
    path: '/dataBinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingHtmlView.vue')
  },
  {
    path: '/dataBinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingInputView.vue')
  },
  {
    path: '/dataBinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingSelectView.vue')
  },
  {
    path: '/dataBinding/checkBox',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingCheckboxView.vue')
  },
  {
    path: '/dataBinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingRadioView.vue')
  },
  {
    path: '/dataBinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingAttributeView.vue')
  },
  {
    path: '/dataBinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingListView.vue')
  },
  {
    path: '/dataBinding/class',
    name: 'DataBindingClassView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingClassView.vue')
  },
  {
    path: '/dataBinding/style',
    name: 'DataBindingStyleView',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/1_data_binding/DataBindingStyleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
