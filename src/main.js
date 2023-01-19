import { createApp } from "vue";
import { createPinia } from "pinia";
import vSelect from "vue-select";

import App from "./App.vue";
import router from "./router";
// import directives from "./plugins/directives";

import "./assets/main.css";

const app = createApp(App);

app.component("v-select", vSelect);

app.use(createPinia());
app.use(router);
// app.use(directives);

app.mount("#app");
