import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { store } from "./store/index";
import App from "./App.vue";
import LandingPage from "./views/LandingPage.vue";
import "./assets/css/index.css";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: LandingPage }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
