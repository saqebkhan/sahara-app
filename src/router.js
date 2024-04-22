import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./components/Dashboard.vue";
import InmatesList from "./components/InmatesList.vue";
import ViewInmate from "./components/ViewInmate.vue";
import PrintRent from "./components/PrintRent.vue";
import AddForm from "./components/AddForm.vue";
import AddRent from "./components/AddRent.vue";
const routes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/inmates", component: InmatesList },
  { path: "/viewInmate", component: ViewInmate },
  { path: "/printRent", component: PrintRent },
  { path: "/addForm", component: AddForm },
  { path: "/addRent", component: AddRent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
