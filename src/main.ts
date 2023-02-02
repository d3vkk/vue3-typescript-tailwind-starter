import { createApp } from "vue";
import router from "./router/index";
import stores from "./stores/index";
import App from "./App.vue";
import "./assets/css/index.css";

const app = createApp(App);
app.use(router);
app.use(stores);
app.mount("#app");
