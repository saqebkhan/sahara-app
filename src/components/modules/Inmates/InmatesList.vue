<template>
  <div v-if="store.isLoading">loading...</div>
  <div v-else>
    <Dialog
      v-if="openDeleteDialog"
      actionButton="Delete"
      closeButton="Cancel"
      description="Are you sure you want to delete this member?"
      title="Delete Inmate"
      @closeDialog="close"
      @action="deleteInmate"
    />
    <Dialog
      v-if="openRefundDialog"
      actionButton="Refund"
      closeButton="Cancel"
      description="Are you sure you want to Refund this member?"
      title="Refund Inmate"
      :amount="refundingItem.amountDeposited"
      @closeDialog="close"
      @action="refundInmate"
    />
    <h1 class="text-base font-semibold leading-6 px-4 sm:px-6 lg:px-8 mb-1">
      Name, Number, Rent.
    </h1>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex sm:items-center sticky top-20">
        <div class="sm:flex-auto">
          <MagnifyingGlassIcon
            class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            class="block h-full w-full py-2 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 focus:border-indigo-400 sm:text-sm border rounded-md border-gray-200"
            placeholder="Search..."
            v-model="search"
          />
        </div>
        <div class="lg:ml-16 ml-5">
          <button
            class="whitespace-nowrap"
            type="button"
            @click="$router.push({ name: RouteNames.ADD_EDIT_FORM })"
            :class="commonClasses.buttonClasses"
          >
            Add user
          </button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-1 align-middle">
            <div class="overflow-hidden">
              <div class="overflow-y-auto max-h-[70vh]">
                <table
                  class="min-w-full divide-y divide-gray-300 overflow-y-auto"
                >
                  <thead class="sticky top-0">
                    <tr class="bg-indigo-600 pr-4 divide-x">
                      <!-- Header columns -->
                      <th scope="col" :class="commonHeaderClasses">
                        <a
                          href="#"
                          :class="[commonAnchorClasses, 'text-nowrap']"
                          >SR. NO.</a
                        >
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses">NAME</a>
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses">NUMBER</a>
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses">DEPOSIT</a>
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a
                          href="#"
                          :class="[commonAnchorClasses, 'text-nowrap']"
                          >ROOM NO.</a
                        >
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses"
                          >DATE OF JOINING</a
                        >
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses">RENT</a>
                      </th>
                      <th
                        scope="col"
                        @click="toggleSort"
                        :class="commonHeaderClasses"
                      >
                        <a
                          href="#"
                          :class="[commonAnchorClasses, 'text-nowrap']"
                          >REMAINING DAYS</a
                        >
                      </th>
                      <th scope="col" :class="commonHeaderClasses">
                        <a href="#" :class="commonAnchorClasses">ACTIONS</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <!-- Table rows -->
                    <tr
                      v-for="(person, index) in filteredItems"
                      :key="person._id"
                      class="hover:bg-indigo-50 divide-x"
                    >
                      <td
                        class="whitespace-nowrap bg-indigo-50 py-5 text-sm font-medium sm:pl-0 flex"
                      >
                        <span class="ml-8">{{ index + 1 }}</span>
                      </td>
                      <td
                        @click="viewInmate(person)"
                        :class="[
                          commonTableDataClasses,
                          'uppercase font-medium text-gray-900 cursor-pointer',
                        ]"
                      >
                        <div class="flex">
                          <component
                            :is="EyeIcon"
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
                        <component
                          class="ml-1 h-3.5 w-3.5 mt-0.5"
                          :is="ArrowUturnUpIcon"
                        />
                      </td>
                      <td :class="commonTableDataClasses">
                        {{ person.roomNumber }}
                      </td>
                      <td :class="commonTableDataClasses">
                        {{ formatDate(person.dateOfJoining) }}
                      </td>
                      <td
                        :class="[commonTableDataClasses, 'flex cursor-pointer']"
                        @click="addRent(person)"
                      >
                        <span>{{ person.monthlySubscriptionAmount }}</span>
                        <component
                          :is="BanknotesIcon"
                          class="w-4 h-4 ml-1 mt-1"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm"
                        :class="
                          person.payHistory[person.payHistory.length - 1]
                            .paidDays < 4
                            ? 'bg-red-600 text-white'
                            : ''
                        "
                      >
                        {{
                          person.payHistory[person.payHistory.length - 1]
                            .paidDays
                        }}
                      </td>
                      <td :class="[commonTableDataClasses, 'flex']">
                        <component
                          :is="PencilSquareIcon"
                          @click="editItem(person)"
                          class="w-4 h-4 cursor-pointer"
                        />
                        <component
                          :is="TrashIcon"
                          @click="deleteItem(person)"
                          class="w-4 h-4 ml-3 cursor-pointer"
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
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount, watch } from "vue";
import Dialog from "../../Common/Dialog.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import axios from "axios";
import { commonClasses } from "../../Common/commonClass";
import {
  PencilSquareIcon,
  TrashIcon,
  BanknotesIcon,
  EyeIcon,
  ArrowUturnUpIcon,
} from "@heroicons/vue/24/outline";
import { useStore } from "../../../store";
import { RouteNames } from "../../../router";
import { formatDate } from "../../Common/commonFunctions";

const selectedHostelItems = ref([]);
const inmates = ref([]);

const router = useRouter();

const store = useStore();

onBeforeMount(async () => {
  try {
    store.isLoading = true;
    const response = await axios.get(
      "https://sahara-api-f8yp.vercel.app/allInmates"
    );
    inmates.value = response.data;
  } catch (error) {
    console.error("Error fetching inmates:", error);
  } finally {
    store.isLoading = false;
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

const openDeleteDialog = ref(false);
const openRefundDialog = ref(false);
const refundingItem = ref(null);
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

  // Sorting logic based on sortDirection and paidDays
  if (sortDirection.value === "asc") {
    return filtered.sort(
      (a, b) =>
        Number(a.payHistory[a.payHistory.length - 1].paidDays) -
        Number(b.payHistory[a.payHistory.length - 1].paidDays)
    );
  } else {
    return filtered.sort(
      (a, b) =>
        Number(b.payHistory[a.payHistory.length - 1].paidDays) -
        Number(a.payHistory[a.payHistory.length - 1].paidDays)
    );
  }
});

const toggleSort = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};

const deleteItem = (item) => {
  openDeleteDialog.value = true;
  deletingItem.value = item;
};

const deleteInmate = () => {
  openDeleteDialog.value = false;
  deletingItem.value = null;
};

const refund = (item) => {
  openRefundDialog.value = true;
  refundingItem.value = item;
};

const refundInmate = (amount) => {
  console.log(refundingItem, amount, "amount");
  openRefundDialog.value = false;
  refundingItem.value = null;
};

const close = (val) => {
  if (!val) {
    openDeleteDialog.value = false;
    openRefundDialog.value = false;
  }
  refundingItem.value = null;
  deletingItem.value = null;
};

const editItem = (person) => {
  router.push({
    name: RouteNames.ADD_EDIT_FORM,
    query: { param: "edit", id: person._id },
  });
};

const viewInmate = (person) => {
  router.push({
    name: RouteNames.VIEW_INMATE,
    query: {
      param: "view",
      id: person._id,
    },
  });
};

const addRent = (person) => {
  router.push({
    name: RouteNames.ADD_RENT,
    query: { param: "addRent", id: person._id },
  });
};
</script>
