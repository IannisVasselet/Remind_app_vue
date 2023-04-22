import { createRouter, createWebHistory } from 'vue-router';
import Category from '../components/Category.vue';
import Theme from '../components/Theme.vue';
import Card from '../components/Card.vue';
import Revision from '../components/Revision.vue';
import Home from "../components/Home.vue";

const routes = [
    {path: '/', component: Home},
    { path: '/categories', component: Category },
    { path: '/themes', component: Theme },
    { path: '/cards', component: Card },
    { path: '/revision', component: Revision },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
