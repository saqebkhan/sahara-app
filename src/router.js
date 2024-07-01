import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "./store";

import Dashboard from "@/components/modules/Dashboard/Dashboard.vue";
import InmatesList from "@/components/modules/Inmates/InmatesList.vue";
import ViewInmate from "@/components/modules/Inmates/ViewInmate.vue";
import PrintRent from "@/components/modules/Inmates/PrintRent.vue";
import AddEditForm from "@/components/modules/Inmates/AddEditForm.vue";
import AddRent from "@/components/modules/Inmates/AddRent.vue";
import Login from "@/components/Authentication/Login.vue";
import Home from "@/components/WebTemplate/Home.vue";
import NotFound from "@/components/Common/NotFound.vue";
import NoAccess from "@/components/Common/NoAccess.vue";
import Slots from "@/components/modules/Slots/Slots.vue";
import History from "@/components/modules/History/History.vue";
import Expenses from "@/components/modules/Expenses/Expenses.vue";
import Deleted from "@/components/modules/Deleted/Deleted.vue";
import AddSlot from "@/components/modules/Slots/AddSlot.vue";
import DeleteSlot from "@/components/modules/Slots/DeleteSlot.vue";

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
  EXPENSES: "Expenses",
  HISTORY: "History",
  SLOTS: "Slots",
  DELETED: "Deleted",
  ADD_SLOT: "AddSlot",
  DELETE_SLOT: "DeleteSlot",
};

const accessGuard = async (to, from, next) => {
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
    beforeEnter: accessGuard,
    name: RouteNames.DASHBOARD,
  },
  {
    path: "/inmates",
    component: InmatesList,
    beforeEnter: accessGuard,
    name: RouteNames.INMATES,
  },
  {
    path: "/viewInmate",
    component: ViewInmate,
    beforeEnter: accessGuard,
    name: RouteNames.VIEW_INMATE,
  },
  {
    path: "/printRent",
    component: PrintRent,
    beforeEnter: accessGuard,
    name: RouteNames.PRINT_RENT,
  },
  {
    path: "/addEditForm",
    component: AddEditForm,
    beforeEnter: accessGuard,
    name: RouteNames.ADD_EDIT_FORM,
  },
  {
    path: "/addRent",
    component: AddRent,
    beforeEnter: accessGuard,
    name: RouteNames.ADD_RENT,
  },
  {
    path: "/expenses",
    component: Expenses,
    beforeEnter: accessGuard,
    name: RouteNames.EXPENSES,
  },
  {
    path: "/history",
    component: History,
    beforeEnter: accessGuard,
    name: RouteNames.HISTORY,
  },
  {
    path: "/slots",
    component: Slots,
    beforeEnter: accessGuard,
    name: RouteNames.SLOTS,
  },
  {
    path: "/deleted",
    component: Deleted,
    beforeEnter: accessGuard,
    name: RouteNames.DELETED,
  },
  {
    path: "/addSlot",
    component: AddSlot,
    beforeEnter: accessGuard,
    name: RouteNames.ADD_SLOT,
  },
  {
    path: "/deleteSlot",
    component: DeleteSlot,
    beforeEnter: accessGuard,
    name: RouteNames.DELETE_SLOT,
  },
  { path: "/login", component: Login, name: RouteNames.LOGIN },
  { path: "/", component: Home, name: RouteNames.HOME },
  { path: "/noAccess", component: NoAccess, name: RouteNames.NO_ACCESS },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { RouteNames };
export default router;
