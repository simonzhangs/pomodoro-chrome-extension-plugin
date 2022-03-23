import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'home',
        component: () => import('../popup/components/App.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../components/Settings.vue')
    },
    {
        path: '/history',
        name: 'history',
        component: () => import('../components/History.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import('../components/Feedback.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;