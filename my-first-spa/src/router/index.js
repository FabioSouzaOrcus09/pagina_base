import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/Home.vue'; 
import SobreNos from '../components/pages/SobreNos.vue';
import Contato from '../components/pages/Contato.vue';
import Login from '../components/pages/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage }, 
  { path: '/sobre', name: 'Sobre', component: SobreNos },
  { path: '/contato', name: 'Contato', component: Contato },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
