<template>
  <div v-if="inmates && inmates.length">
    <RefundDialog
      v-if="refundDialog"
      @closeDialog="close"
      :item="refundingItem"
    />
    <DeleteDialog
      v-if="deleteDialog"
      @closeDialog="close"
      :item="deletingItem"
    />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 pb-3">
            Search by - Name, Number, Rent.
          </h1>
          <form class="relative flex flex-1 mt-2">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              class="block h-full w-full py-2 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 focus:border-gray-400 sm:text-sm border rounded-md border-gray-200"
              placeholder="Search..."
              v-model="search"
            />
          </form>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            @click="$router.push('/addEditForm')"
            :class="commonHeaderClasses"
            class="block rounded-md bg-indigo-600 px-3 py-2 mt-11 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-1 align-middle">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr class="bg-gray-800 pr-4 divide-x">
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="[commonAnchorClasses, 'text-nowrap']"
                      >SR. NO.</a
                    >
                  </th>

                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">NAME</a>
                  </th>
                  <th scope="col" ::class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">NUMBER</a>
                  </th>
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">DEPOSIT</a>
                  </th>
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="[commonAnchorClasses, 'text-nowrap']"
                      >ROOM NO.</a
                    >
                  </th>
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">DATE OF JOINING</a>
                  </th>
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">RENT</a>
                  </th>
                  <th
                    scope="col"
                    :class="commonHeaderClasses"
                    @click="toggleSort"
                  >
                    <a href="#" :class="[commonAnchorClasses, 'text-nowrap']"
                      >DAYS LEFT</a
                    >
                  </th>
                  <th scope="col" :class="commonHeaderClasses">
                    <a href="#" :class="commonAnchorClasses">ACTIONS</a>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="(person, index) in filteredItems"
                  :key="person.email"
                  class="hover:bg-gray-100 divide-x"
                >
                  <td
                    class="whitespace-nowrap bg-gray-200 py-5 text-sm font-medium sm:pl-0 flex"
                  >
                    <span class="ml-8">{{ index + 1 }}</span>
                  </td>
                  <td
                    :class="[
                      commonTableDataClasses,
                      'uppercase font-medium text-gray-900',
                    ]"
                  >
                    <div class="flex">
                      <img
                        @click="viewInmate(person)"
                        :src="eyeIcon"
                        alt=""
                        class="w-4 h-4 mr-2 mt-0.5 ml-2 cursor-pointer"
                      />
                      <span>{{ person.name }}</span>
                    </div>
                  </td>
                  <td :class="commonTableDataClasses">
                    {{ person.contactNumber }}
                  </td>
                  <td
                    :class="[commonTableDataClasses, 'flex cursor-pointer']"
                    @click="refund(person)"
                  >
                    {{ person.amountDeposited }}
                    <img
                      class="ml-1 h-3.5 w-3.5 mt-0.5"
                      :src="refundIcon"
                      alt=""
                    />
                  </td>
                  <td :class="commonTableDataClasses">
                    {{ person.roomNumber }}
                  </td>
                  <td :class="commonTableDataClasses">
                    {{ person.dateOfJoining }}
                  </td>
                  <td
                    :class="[commonTableDataClasses, 'flex cursor-pointer']"
                    @click="addRent(person)"
                  >
                    <span>{{ person.monthlySubscriptionAmount }}</span>
                    <img class="w-4 h-4 ml-1 mt-1" :src="cashIcon" alt="" />
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm"
                    :class="
                      person.payHistory[person.payHistory.length - 1].paidDays <
                      4
                        ? 'bg-red-400 text-white'
                        : ''
                    "
                  >
                    {{
                      person.payHistory[person.payHistory.length - 1].paidDays
                    }}
                  </td>
                  <td :class="[commonTableDataClasses, 'flex relative']">
                    <img
                      @click="editItem(person)"
                      class="w-4 h-4 cursor-pointer"
                      :src="editIcon"
                      alt=""
                    />
                    <img
                      @click="deleteItem(person)"
                      class="w-4 h-4 ml-3 cursor-pointer"
                      :src="deleteIcon"
                      alt=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>loading...</div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import RefundDialog from "./RefundDialog.vue";
import DeleteDialog from "./DeleteDialog.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "../../../store";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import cashIcon from "../../../assets/pay.svg";
import eyeIcon from "../../../assets/eye.svg";
import refundIcon from "../../../assets/refund.svg";

const selectedHostelItems = ref([]);
const inmates = ref([]);

const router = useRouter();

const store = useStore();

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://sahara-api-f8yp.vercel.app/allInmates"
    );
    inmates.value = response.data;
  } catch (error) {
    console.error("Error fetching inmates:", error);
  }
  selectedHostelInmates();
});

watch(
  () => store.selectedHostel,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      selectedHostelInmates();
    }
  }
);

const commonHeaderClasses = computed(() => {
  return "p-3 text-center text-sm font-semibold";
});

const commonAnchorClasses = computed(() => {
  return "group inline-flex font-bold text-white";
});

const commonTableDataClasses = computed(() => {
  return " whitespace-nowrap py-4 px-3 text-sm text-gray-600";
});

const selectedHostelInmates = () => {
  selectedHostelItems.value = inmates.value.filter((element) => {
    if (!store.selectedHostel.includes("GROUP")) {
      return element.saharaHostelNumber === store.selectedHostel;
    } else {
      return true;
    }
  });
};

const refundDialog = ref(false);
const refundingItem = ref(null);
const deleteDialog = ref(false);
const deletingItem = ref(null);
const search = ref("");
const sortDirection = ref("asc"); // Track sorting direction

const filteredItems = computed(() => {
  let filtered = selectedHostelItems.value;
  if (search.value) {
    const searchTerm = search.value.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.contactNumber.includes(searchTerm) ||
        item.amountDeposited.toString().includes(searchTerm)
    );
  }

  // Sorting logic based on sortDirection
  if (sortDirection.value === "asc") {
    return filtered.sort((a, b) => Number(a.paidDays) - Number(b.paidDays));
  } else {
    return filtered.sort((a, b) => Number(b.paidDays) - Number(a.paidDays));
  }
});

const toggleSort = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};

const refund = (item) => {
  refundDialog.value = true;
  refundingItem.value = item;
};

const deleteItem = (item) => {
  deleteDialog.value = true;
  deletingItem.value = item;
};

const close = (val) => {
  if (!val) {
    refundDialog.value = false;
    deleteDialog.value = false;
  }
  refundingItem.value = null;
  deletingItem.value = null;
};

const editItem = (person) => {
  router.push({
    path: "/addEditForm",
    query: { param: "edit", id: person._id },
  });
};

const viewInmate = (person) => {
  router.push({
    path: "/viewInmate",
    query: {
      param: "view",
      id: person._id,
    },
  });
};

const addRent = (person) => {
  router.push({
    path: "/addRent",
    query: { param: "addRent", id: person._id },
  });
};
</script>