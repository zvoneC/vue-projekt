import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import ProductForm from '@/pages/ProductForm.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/products/new', name: 'product-new', component: ProductForm },
  { path: '/products/:id/edit', name: 'product-edit', component: ProductForm, props: true },
  { path: '/about', name: 'about', component: About },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFound.vue') },


]

export default createRouter({ history: createWebHistory(), routes })