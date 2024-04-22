<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
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
          Created By
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {{ inmate.createdBy }}, at {{ inmate.createdAt }}
        </p>
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

const inmate = {
  name: "Saqeb Khan",
  fatherName: "Abdul Samad Khan",
  email: "dsds",
  permanentAddress: "Aurangabad",
  contactNumber: "8788566695",
  parentsContactNumber: "9765755151",
  emergencyContactNumber: "8421297867",
  placeOfWorkOrStudy: "Gachibowli",
  dateOfJoining: "01/02/2024",
  aadharNumber: "714197273551",
  expectedDateOfLeaving: "31/03/2024",
  amountDeposited: "2000",
  monthlySubscriptionAmount: "6500",
  roomNumber: "9",
  bedNumber: "4",
  saharaHostelNumber: "Sahara 1",
  bikeRegistrationNumber: "No",
  permanentAddressPincode: "we",
  sharingRoom: "4",
  payHistory: [
    {
      payMonth: "Jan",
      payAmount: 6500,
    },
    {
      payMonth: "Feb",
      payAmount: 6500,
    },
    {
      payMonth: "Mar",
      payAmount: 6500,
    },
    {
      payMonth: "Apr",
      payAmount: 6500,
    },
  ],
  createdBy: "Sohel Khan",
  createdAt: new Date(),
};

const sections = [
  { label: "Full name", value: inmate.name },
  { label: "Father Name", value: inmate.fatherName },
  { label: "Permanent Address", value: inmate.permanentAddress },
  { label: "Place of work/job", value: inmate.placeOfWorkOrStudy },
  { label: "Contact number", value: inmate.contactNumber },
  { label: "Parents Contact Number", value: inmate.parentsContactNumber },
  { label: "Expected date of leaving", value: inmate.expectedDateOfLeaving },
  { label: "Date of Joining", value: inmate.dateOfJoining },
  { label: "Aadhar number", value: inmate.aadharNumber },
  { label: "Emergency Contact Number", value: inmate.emergencyContactNumber },
  { label: "Deposit Amount", value: inmate.amountDeposited },
  { label: "Monthly Rent", value: inmate.monthlySubscriptionAmount },
  { label: "Branch number", value: inmate.saharaHostelNumber },
  { label: "Room number", value: inmate.roomNumber },
  { label: "Bed number", value: inmate.bedNumber },
  { label: "Bike registration number", value: inmate.bikeRegistrationNumber },
];
</script>
