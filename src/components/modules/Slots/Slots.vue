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
    <div
      class="py-8 max-sm:px-0 px-4 max-w-screen-xl text-center lg:py-16 lg:px-6"
    >
      <div
        class="grid gap-8 max-sm:grid-cols-3 lg:gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <div v-if="store.selectedHostel !== 'SAHARA GROUP OF HOSTELS'">
          <h2 class="font-extrabold text-2xl max-sm:text-xl">
            {{ store.selectedHostel }}
          </h2>
          <div
            v-for="(room, roomIndex) in store.selectedHostel"
          >
            <div
              v-for="(bed, bedIndex) in room.beds"
              :key="`room_${roomIndex}_bed_${bedIndex}`"
            >
              <div class="text-center text-gray-500">
                <div
                  class="w-10 h-20 max-sm:w-10 max-sm:h-15 mx-auto bg-gray-300 rounded-lg"
                ></div>
                <h3
                  class="mb-1 text-2xl max-sm:text-lg font-bold tracking-tight text-gray-900"
                >
                  <a href="#">{{
                    bed.status === "occupied" ? "Occupied" : "Vacant"
                  }}</a>
                </h3>
                <p>Bed - {{ bed.bedNumber }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-for="hostel in hostels">
            <h2 class="font-extrabold text-2xl max-sm:text-xl">
              {{ hostel.name }}
            </h2>
            <div
              v-for="(room, roomIndex) in hostel.rooms"
              :key="`room_${roomIndex}_bed_${bedIndex}`"
            >
              <div
                v-for="(bed, bedIndex) in room.beds"
                :key="`room_${roomIndex}_bed_${bedIndex}`"
              >
                <div class="text-center text-gray-500">
                  <div
                    class="w-10 h-20 max-sm:w-10 max-sm:h-15 mx-auto bg-gray-300 rounded-lg"
                  ></div>
                  <h3
                    class="mb-1 text-2xl max-sm:text-lg font-bold tracking-tight text-gray-900"
                  >
                    <a href="#">{{
                      bed.status === "occupied" ? "Occupied" : "Vacant"
                    }}</a>
                  </h3>
                  <p>Bed - {{ bed.bedNumber }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { commonClasses } from "../../Common/commonClass";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { RouteNames } from "@/router";
import { hostels } from "@/components/modules/Slots/temporaryData.js";
import { useStore } from "@/store";

const store = useStore();
const search = ref("");
</script>
