<template>
  <Login v-if="!store.isAuthenticated" />
  <Sidebar v-if="store.isAuthenticated" />
</template>
<script setup>
import Login from "./modules/Inmates/Login.vue";
import { useStore } from "../store";
import Sidebar from "./modules/Inmates/Sidebar.vue";
const store = useStore();
</script>
