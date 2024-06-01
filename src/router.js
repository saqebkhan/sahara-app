import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "./store";

import Dashboard from "./components/modules/Inmates/Dashboard.vue";
import InmatesList from "./components/modules/Inmates/InmatesList.vue";
import ViewInmate from "./components/modules/Inmates/ViewInmate.vue";
import PrintRent from "./components/modules/Inmates/PrintRent.vue";
import AddEditForm from "./components/modules/Inmates/AddEditForm.vue";
import AddRent from "./components/modules/Inmates/AddRent.vue";
import Login from "./components/Common/Login.vue";
import Home from "./components/modules/WebTemplate/Home.vue";
import NotFound from "./components/Common/NotFound.vue"; // Import your NotFound component
import NoAccess from "./components/Common/NoAccess.vue";

const RouteNames = {
  DASHBOARD: "Dashboard",
  INMATES: "InmatesList",
  VIEW_INMATE: "ViewInmate",
  PRINT_RENT: "PrintRent",
  ADD_EDIT_FORM: "AddEditForm",
  ADD_RENT: "AddRent",
  LOGIN: "Login",
  HOME: "Home",
  NO_ACCESS: "NoAccess",
};

const myGuard = async (to, from, next) => {
  const store = useStore();
  if (store.isAuthenticated) {
    next();
  } else if (
    (!store.isAuthenticated && to.name !== RouteNames.LOGIN) ||
    to.name !== RouteNames.HOME
  ) {
    next({ name: RouteNames.NO_ACCESS });
  }
};

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: myGuard,
    name: RouteNames.DASHBOARD,
  },
  {
    path: "/inmates",
    component: InmatesList,
    beforeEnter: myGuard,
    name: RouteNames.INMATES,
  },
  {
    path: "/viewInmate",
    component: ViewInmate,
    beforeEnter: myGuard,
    name: RouteNames.VIEW_INMATE,
  },
  {
    path: "/printRent",
    component: PrintRent,
    beforeEnter: myGuard,
    name: RouteNames.PRINT_RENT,
  },
  {
    path: "/addEditForm",
    component: AddEditForm,
    beforeEnter: myGuard,
    name: RouteNames.ADD_EDIT_FORM,
  },
  {
    path: "/addRent",
    component: AddRent,
    beforeEnter: myGuard,
    name: RouteNames.ADD_RENT,
  },
  { path: "/login", component: Login, name: RouteNames.LOGIN },
  { path: "/", component: Home, name: RouteNames.HOME },
  { path: "/noAccess", component: NoAccess, name: RouteNames.NO_ACCESS },
  // Catch-all route for undefined routes
  { path: "/:pathMatch(.*)", component: NotFound }, // Redirect to your NotFound component
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { RouteNames };
export default router;
