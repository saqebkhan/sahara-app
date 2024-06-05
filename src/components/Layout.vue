<template>
  <LoadingSpinner class="lg:ml-48" />
  <Sidebar v-if="store.isAuthenticated && !webTemplate" />
  <main :class="[!webTemplate ? 'lg:pl-48 py-8' : '']">
    <div :class="!webTemplate && 'px-4 sm:px-6 lg:px-8'">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { RouteNames } from "../router";
import { useStore } from "../store";
import Sidebar from "./Sidebar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import LoadingSpinner from "./Common/LoadingSpinner.vue";

const store = useStore();
const route = useRoute();

const webTemplate = computed(() => {
  return route.name === RouteNames.HOME || route.name === RouteNames.LOGIN;
});
</script>
