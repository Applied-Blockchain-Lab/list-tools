import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import directives from "./plugins/directives";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(directives);

app.mount("#app");
