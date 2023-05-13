import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
	{ path: '/login', name: 'login', component: Login },
	{ path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
	{ path: '/', redirect: '/login' }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !localStorage.getItem('token')) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
