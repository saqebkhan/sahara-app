<template>
  <div v-if="!inmate" class="m-auto top-0 bottom-0 left-0 right-0 text-2xl">
    Loading...
  </div>
  <div v-if="inmate" class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="flex">
      <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          Created At
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <dl class="divide-y divide-gray-200">
        <div class="grid grid-cols-4 gap-4">
          <template v-for="(section, index) in sections" :key="section.label">
            <div v-if="index % 4 === 0" class="px-4 py-4">
              <dt class="text-sm font-medium text-gray-900">
                {{ sections[index].label }}
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700">
                {{ sections[index].value }}
              </dd>
            </div>
          </template>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <template v-for="(section, index) in sections" :key="section.label">
            <div v-if="index % 4 === 1" class="px-4 py-4">
              <dt class="text-sm font-medium text-gray-900">
                {{ sections[index].label }}
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700">
                {{ sections[index].value }}
              </dd>
            </div>
          </template>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <template v-for="(section, index) in sections" :key="section.label">
            <div v-if="index % 4 === 2" class="px-4 py-4">
              <dt class="text-sm font-medium text-gray-900">
                {{ sections[index].label }}
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700">
                {{ sections[index].value }}
              </dd>
            </div>
          </template>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <template v-for="(section, index) in sections" :key="section.label">
            <div v-if="index % 4 === 3" class="px-4 py-4">
              <dt class="text-sm font-medium text-gray-900">
                {{ sections[index].label }}
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700">
                {{ sections[index].value }}
              </dd>
            </div>
          </template>
        </div>
        <div class="flex">
          <div class="px-4 py-4">
            <dt class="text-sm font-medium text-gray-900">Sharing Room</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700">
              {{ inmate.sharingRoom }}
            </dd>
          </div>
          <div class="p-4 ml-36">
            <dt class="text-sm font-medium text-gray-900">History</dt>
            <div class="flex">
              <div
                v-for="history in inmate.payHistory"
                :key="inmate.email"
                class="mx-2 first:ml-0"
              >
                <div
                  class="flex flex-col items-center justify-center bg-green-200 rounded-lg h-12 w-12 p-2 my-2"
                >
                  <span class="text-xs text-gray-600">{{
                    history.payMonth
                  }}</span>
                  <span class="text-md font-semibold text-green-800">{{
                    history.payAmount
                  }}</span>
                  <span class="text-md font-semibold text-green-800">{{
                    history.paidYear
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            Attachments
          </dt>
          <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              class="divide-y divide-gray-100 rounded-md border border-gray-300"
            >
              <li
                class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
              >
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">Payslip deposit</span>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a
                    @click="$router.push('/printRent')"
                    class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                    >Print</a
                  >
                </div>
              </li>
              <li
                class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
              >
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">Payslip rent</span>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a
                    @click="$router.push('/printRent')"
                    class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                    >Print</a
                  >
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup>
import { PaperClipIcon } from "@heroicons/vue/20/solid";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// Inside your component setup block
const route = useRoute();

// Access the query parameters using route.query
const paramValue = route.query.param;
const idValue = route.query.id;

const inmate = ref(null);
const sections = ref([]);

onMounted(() => {
  // const id = route.query.id;
  // Define the API endpoint
  const endpoint = "https://sahara-api-f8yp.vercel.app/allInmates"; // Change 'your-endpoint' to the actual endpoint you want to call

  // Fetch data from the API
  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log(idValue);
      inmate.value = data.find((item) => item._id === idValue);
      console.log(inmate.value); // Log the retrieved data

      // Populate the sections array
      sections.value = [
        { label: "Full name", value: inmate.value.name },
        { label: "Father Name", value: inmate.value.fatherName },
        { label: "Permanent Address", value: inmate.value.permanentAddress },
        { label: "Place of work/job", value: inmate.value.placeOfWorkOrStudy },
        { label: "Contact number", value: inmate.value.contactNumber },
        {
          label: "Parents Contact Number",
          value: inmate.value.parentsContactNumber,
        },
        {
          label: "Expected date of leaving",
          value: inmate.value.expectedDateOfLeaving,
        },
        { label: "Date of Joining", value: inmate.value.dateOfJoining },
        { label: "Aadhar number", value: inmate.value.aadharNumber },
        {
          label: "Emergency Contact Number",
          value: inmate.value.emergencyContactNumber,
        },
        { label: "Deposit Amount", value: inmate.value.amountDeposited },
        {
          label: "Monthly Rent",
          value: inmate.value.monthlySubscriptionAmount,
        },
        { label: "Branch number", value: inmate.value.saharaHostelBranch },
        { label: "Room number", value: inmate.value.roomNumber },
        { label: "Bed number", value: inmate.value.bedNumber },
        {
          label: "Bike registration number",
          value: inmate.value.bikeRegistrationNumber,
        },
      ];
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
</script>
