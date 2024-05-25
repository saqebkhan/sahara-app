<template>
  <div class="grid grid-cols-3 gap-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ card.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ card.description }}
      </p>
      <button
        @click="goToHostel(card.hostel)"
        class="flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Open table
        <ArrowRight class="ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
import ArrowRight from "../assets/ArrowRight.vue";
// import inmates  from "./inmates.js";
import { useRouter } from "vue-router";
import { useStore } from "../store.js";

const store = useStore();

const router = useRouter();

const cards = [
  {
    title: "Sahara Boys Hostel 1",
    hostel: "Sahara 1",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Sahara Boys Hostel 2",
    hostel: "Sahara 2",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Sahara Luxury",
    hostel: "Sahara 3",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Sahara Boys Hostel 4",
    hostel: "Sahara 4",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Sahara Boys Hostel 5",
    hostel: "Sahara 5",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Sahara Hall",
    hostel: "Sahara 6",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

const goToHostel = (hostel) => {
  store.selectedHostel = hostel;
  router.push("/inmates");
};
</script>
