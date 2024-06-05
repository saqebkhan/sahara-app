<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"> 
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "
        >
          {{ card.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 ">
        {{ card.description }}
      </p>
      <button
        @click="goToHostel(card.hostel)"
        :class="commonClasses.buttonClasses"
        class="flex"
      >
        Open table
        <component :is="ArrowRightIcon" class="ml-2 w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";
import { useStore } from "../../../store.js";
import { RouteNames } from "../../../router.js";
import { commonClasses } from "../../Common/commonClass.js";
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
  router.push({ name: RouteNames.INMATES });
};
</script>
