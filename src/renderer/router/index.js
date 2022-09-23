import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: HomePage
        },
        {
            path: '/about',
            name: "About",
            component: () => import('../views/AboutPage')
        },
        {
            path: '/trade',
            name: "Trade",
            component: () => import('../views/TradePage')
        }
    ],
});

export default router;