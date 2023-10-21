import "./assets/main.css";

import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "flowbite";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
