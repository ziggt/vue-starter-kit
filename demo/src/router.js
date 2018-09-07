import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/autocompleteview',
      name: 'autocompleteview',
      component: () => import('./views/AutocompleteView.vue')
    },
    {
      path: '/datatableview',
      name: 'datatableview',
      component: () => import('./views/DatatableView.vue')
    },
    {      
      path: '/vuetifydatatableview',
      name: 'vuetifydatatableview',
      component: () => import('./views/VuetifyDatatableView.vue')
    },
     {      
      path: '/kalenteriview',
      name: 'kalenteriview',
      component: () => import('./views/KalenteriView.vue')
    },{      
      path: '/vuetifyautocomplete',
      name: 'vuetifyautocomplete',
      component: () => import('./views/VuetifyAutocomplete.vue')
    },{      
      path: '/vuedraggableview',
      name: 'vuedraggableview',
      component: () => import('./views/VueDraggableView.vue')
    }
  ]
})
