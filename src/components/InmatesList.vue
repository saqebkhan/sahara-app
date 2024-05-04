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
          <h1 class="text-base font-semibold leading-6 text-gray-900 pb-3">
            Search by - Name, Number, Rent
          </h1>
          <form class="relative flex flex-1 mt-2" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              class="block h-full w-full py-2 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-gray-400 sm:text-sm border rounded-md border-gray-200"
              placeholder="Search..."
              v-model="search"
            />
          </form>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            @click="$router.push('addForm')"
            class="block rounded-md bg-indigo-600 px-3 py-2 mt-11 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    <a href="#" class="group inline-flex font-bold text-white">
                      <span class="ml-4 caret-teal-100">SR. NO.</span>
                      <span
                        class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      ></span>
                    </a>
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-6 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    <a
                      href="#"
                      class="group ml-2 inline-flex font-bold text-white"
                      >NAME</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >NUMBER</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >DEPOSIT</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >ROOM NO.</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >DATE OF JOINING</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >RENT</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    @click="toggleSort"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >DAYS LEFT</a
                    >
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" class="group inline-flex font-bold text-white"
                      >ACTIONS</a
                    >
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
                    class="whitespace-nowrap bg-gray-300 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 flex"
                  >
                    <span class="ml-8">{{ index + 1 }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap uppercase py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                  >
                    <div class="flex">
                      <img
                        @click="viewInmate(person)"
                        src="../assets/eye.svg"
                        alt=""
                        class="w-4 h-4 mr-2 mt-0.5 ml-2 cursor-pointer"
                      />
                      <span>{{ person.name }}</span>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.contactNumber }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex cursor-pointer"
                    @click="refund(person)"
                  >
                    {{ person.amountDeposited }}
                    <img
                      class="ml-1 h-3.5 w-3.5 mt-0.5"
                      src="../assets/refund.svg"
                      alt=""
                    />
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.roomNumber }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.dateOfJoining }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex cursor-pointer"
                    @click="addRent(person)"
                  >
                    <span>{{ person.monthlySubscriptionAmount }}</span>
                    <img
                      class="w-4 h-4 ml-1 mt-1"
                      src="../assets/pay.svg"
                      alt=""
                    />
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
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
                  <td
                    class="flex relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0"
                  >
                    <img
                      @click="editItem(person)"
                      class="w-4 h-4 cursor-pointer"
                      src="../assets/edit.svg"
                      alt=""
                    />
                    <img
                      @click="deleteItem(person)"
                      class="w-4 h-4 ml-3 cursor-pointer"
                      src="../assets/delete.svg"
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
import { computed, ref, onMounted } from "vue";
import RefundDialog from "./RefundDialog.vue";
import DeleteDialog from "./DeleteDialog.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "../store";

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
    console.log(inmates.value);
  } catch (error) {
    console.error("Error fetching inmates:", error);
  }
  await selectedHostelInmates();
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

const reduceDay = async () => {
  try {
    // Step 1: Fetch all users from the database
    const response = await axios.get(
      "https://sahara-api-f8yp.vercel.app/allInmates"
    );
    const users = response.data;

    // Step 2: Iterate through each user and update paidDays
    for (const user of users) {
      // Ensure the user has payHistory and at least one entry
      if (user.payHistory && user.payHistory.length > 0) {
        const lastPayment = user.payHistory[user.payHistory.length - 1];
        // Subtract 1 from paidDays
        lastPayment.paidDays -= 1;
      }
    }

    // Step 3: Make PUT requests to update each user
    for (const user of users) {
      await axios.put(
        `https://sahara-api-f8yp.vercel.app/inmates/${user._id}`,
        user
      );
    }

    console.log("Successfully reduced paidDays for all users.");
  } catch (error) {
    console.error("Error reducing paidDays:", error);
  }
};

// Step 4: Schedule reduceDay function to run every 24 hours
setInterval(reduceDay, 24 * 60 * 60 * 1000);

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
    return filtered.sort((a, b) => Number(a.bedNumber) - Number(b.bedNumber));
  } else {
    return filtered.sort((a, b) => Number(b.bedNumber) - Number(a.bedNumber));
  }
});

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
  router.push({ path: "/editForm", query: { param: "edit", id: person._id } });
};

const viewInmate = (person) => {
  console.log(person);
  router.push({
    path: "/viewInmate",
    query: {
      param: "view",
      id: person._id,
    },
  });
};

const addRent = (person) => {
  router.push("/addRent");
};
</script>
