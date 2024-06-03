import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import './assets/tailwind.css'
import './assets/tailwind.css'
// import tailwindConfig from "./components/modules/Inmates/tailwind.config";

const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia).mount("#app")
