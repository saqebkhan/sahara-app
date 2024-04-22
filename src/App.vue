<template>
  <Login v-if="!store.isAuthenticated" />
  <Sidebar v-if="store.isAuthenticated" />
</template>
<script setup>
import Sidebar from "./components/Sidebar.vue";
import Login from "./components/Login.vue";
import { useStore } from "./store.js";
const store = useStore();
</script>
