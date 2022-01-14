import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './pages/profile.vue';
import Contact from './pages/contact.vue';

const routes = [
  { path: '/', alias: '/profile', name: 'profile', component: Profile },
  { path: '/contact', name: 'contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
