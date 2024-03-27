import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CartView from '../views/CartView.vue'
// import FavoritesView from '../views/FavoritesView.vue'
// import ProductDetailsView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: CartView
    // },
    // {
    //   path: '/favorites',
    //   name: 'favorites',
    //   component: FavoritesView
    // },
    // {
    //   path: '/product/:id',
    //   name: 'productDetails',
    //   component: ProductDetailsView
    // }
  ]
})

export default router
