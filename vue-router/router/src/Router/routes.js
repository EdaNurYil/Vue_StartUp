import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/Home/HomePage.vue';
import Contact from '@/components/Home/Contact.vue';
import ProductList from '@/components/Product/ProductList.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import Login from '@/components/Authentication/Login.vue';
import NoAccess from '@/components/Layout/NoAccess.vue';
import NotFound from '@/components/Layout/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    // redirect example: /contact-us -> /contact
    { path: '/contact-us', redirect: { name: 'contact' } },
    { path: '/contact', name: 'contact', component: Contact },

    { path: '/productList', name: 'product.list', component: ProductList },
    // dynamic param + named route
    { path: '/product/:id', name: 'product.detail', component: ProductDetail, props: true, meta: { requiresAuth: true } },

    { path: '/login', name: 'login', component: Login },
    { path: '/no-access', name: 'noaccess', component: NoAccess },

    // catch-all 404
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

// --- GLOBAL NAV GUARD (demo)
router.beforeEach((to, from, next) => {
  const authed = !!localStorage.getItem('token');   // very simple demo auth
  if (to.meta.requiresAuth && !authed) {
    // send to login & remember where to come back
    next({ name: 'login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
