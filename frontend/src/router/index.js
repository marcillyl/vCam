import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import product from '../views/product.vue';
import cart from '../views/cart.vue';
import checkout from '../views/checkout.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: home,
    props: true,
  },
  {
    name: 'product',
    path: '/product/:id',
    component: product,
    props: true,
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart,
    props: true,
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: checkout,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
