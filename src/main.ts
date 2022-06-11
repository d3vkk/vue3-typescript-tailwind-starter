import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import LandingPage from "./views/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: LandingPage }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
