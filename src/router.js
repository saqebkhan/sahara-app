import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./components/modules/Inmates/Dashboard.vue";
import InmatesList from "./components/modules/Inmates/InmatesList.vue";
import ViewInmate from "./components/modules/Inmates/ViewInmate.vue";
import PrintRent from "./components/modules/Inmates/PrintRent.vue";
import AddEditForm from "./components/modules/Inmates/AddEditForm.vue";
import AddRent from "./components/modules/Inmates/AddRent.vue";

const routes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/inmates", component: InmatesList },
  { path: "/viewInmate", component: ViewInmate },
  { path: "/printRent", component: PrintRent },
  { path: "/addEditForm", component: AddEditForm },
  { path: "/addRent", component: AddRent },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
