import { createApp } from "vue";
import "./assets/style/index.css";
import App from "./App.vue";
import Router from "./router";
import { createPinia } from "pinia";

createApp(App).use(Router).use(createPinia()).mount("#app");
