import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants
import Category from './components/Category.vue';
import Theme from './components/Theme.vue';
import Card from './components/Card.vue';
import Revision from './components/Revision.vue';

// Création du router
const routes = [
    { path: '/categories', component: Category },
    { path: '/themes', component: Theme },
    { path: '/cards', component: Card },
    { path: '/revision', component: Revision },
];

// Exportation du router
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
