// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
import { useVisitStore } from './stores/visitations';
import './assets/main.css';

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(pinia);
const visitStore = useVisitStore(pinia);
visitStore.loadVisits();
visitStore.incrementVisits();
app.use(router);
app.mount('#app');


