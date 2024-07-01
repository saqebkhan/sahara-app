<template>
  <section class="bg-white">
    <div class="flex sm:items-center sticky top-20">
      <div class="sm:flex-auto">
        <MagnifyingGlassIcon
          class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
        <input
          class="block h-full w-full py-2 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 focus:border-indigo-400 text-sm border rounded-md border-gray-200"
          placeholder="Search..."
          v-model="search"
        />
      </div>
      <div class="lg:ml-16 ml-6">
        <button
          class="whitespace-nowrap"
          type="button"
          @click="$router.push({ name: RouteNames.ADD_SLOT })"
          :class="commonClasses.buttonClasses"
        >
          Add
        </button>
        <button
          class="whitespace-nowrap mx-2 bg-red-600 hover:bg-red-700"
          type="button"
          @click="$router.push({ name: RouteNames.DELETE_SLOT })"
          :class="commonClasses.buttonClasses"
        >
          Delete
        </button>
      </div>
    </div>
    <table class="min-w-full divide-y divide-gray-300 overflow-y-auto mt-12">
      <thead class="sticky top-0">
        <tr class="bg-indigo-600 pr-4 divide-x">
          <!-- Header columns -->
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="[commonAnchorClasses, 'text-nowrap']"
              >SR. NO.</a
            >
          </th>
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="commonAnchorClasses"
              >HOSTEL</a
            >
          </th>
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="commonAnchorClasses"
              >ROOM NUMBER</a
            >
          </th>
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="commonAnchorClasses"
              >BED</a
            >
          </th>
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="commonAnchorClasses"
              >SHARING BED</a
            >
          </th>
          <th
            scope="col"
            :class="commonHeaderClasses"
          >
            <a
              href="#"
              :class="commonAnchorClasses"
              >VACANT FILTER</a
            >
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <!-- Table rows -->
        <tr
          v-for="(slot, index) in filteredSlotsData"
          :key="slot._id"
          class="hover:bg-indigo-50 divide-x"
        >
          <td
            class="whitespace-nowrap bg-indigo-50 py-5 text-sm font-medium sm:pl-0 flex"
          >
            <span class="ml-8">{{ index + 1 }}</span>
          </td>
          <td
            :class="[
              commonTableDataClasses,
              'uppercase font-medium text-gray-900 cursor-pointer',
            ]"
          >
            <span>{{ slot.saharaHostelNumber }}</span>
          </td>
          <td :class="commonTableDataClasses">
            {{ slot.roomNumber }}
          </td>
          <td :class="commonTableDataClasses">
            {{ slot.bedNumber }}
          </td>
          <td :class="commonTableDataClasses">
            {{ slot.sharingRoom }}
          </td>
          <td :class="[commonTableDataClasses, 'bg-red-600 text-white']">
            Under Construction
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { commonClasses } from "../../Common/commonClass";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { ref, onBeforeMount, computed } from "vue";
import { RouteNames } from "@/router";
import { useStore } from "@/store";
import axios from "axios";

const store = useStore();
const search = ref("");
const slots = ref([]);

onBeforeMount(async () => {
  try {
    store.isLoading = true;
    const response = await axios.get(
      "https://sahara-api-f8yp.vercel.app/allInmates",
    );
    console.log(response.data);
    slots.value = response.data;
  } catch (error) {
    console.error("Error fetching inmates:", error);
  } finally {
    store.isLoading = false;
  }
});

console.log(store.selectedHostel);

const commonHeaderClasses = computed(() => {
  return "p-3 text-center text-sm font-semibold";
});

const commonAnchorClasses = computed(() => {
  return "group inline-flex font-bold text-white";
});

const commonTableDataClasses = computed(() => {
  return " whitespace-nowrap py-4 px-3 text-sm text-gray-600";
});

const filteredSlotsData = computed(() => {
  let filtered = slots.value;
  if (search.value) {
    const searchTerm = search.value.toLowerCase();
    filtered = slots.value.filter(
      (item) =>
        item.saharaHostelNumber.toLowerCase().includes(searchTerm) ||
        item.roomNumber.includes(searchTerm) ||
        item.bedNumber.toString().includes(searchTerm) ||
        item.sharingRoom.toString().includes(searchTerm),
    );
  }
  return filtered;
});
</script>
