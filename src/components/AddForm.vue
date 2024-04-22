<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          {{ isEdit ? "Edit Information" : "Add Inmate" }}
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="full-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Full name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.name"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="father-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Father name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.fatherName"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                v-model="inmate.email"
                type="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Contact number</label
            >
            <div class="mt-2">
              <input
                id="number"
                name="number"
                v-model="inmate.contactNumber"
                type="number"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="street-address"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Permanent address</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.permanentAddress"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label
              for="city"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Parent's contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.parentsContactNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Emergency contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.emergencyContactNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Sahara hostel branch</label
            >
            <div class="mt-2">
              <select
                name=""
                id=""
                v-model="inmate.saharaHostelNumber"
                class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Sahara 1">Sahara 1</option>
                <option value="Sahara 2">Sahara 2</option>
                <option value="Sahara 3">Sahara 3</option>
                <option value="Sahara 4">Sahara 4</option>
                <option value="Sahara 5">Sahara 5</option>
                <option value="Sahara 6">Sahara 6</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Place of work/study</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.placeOfWorkOrStudy"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Date of joining</label
            >
            <div class="mt-2">
              <input
                type="date"
                v-model="inmate.dateOfJoining"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Aadhar number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.aadharNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Expected date of vacating</label
            >
            <div class="mt-2">
              <input
                v-model="inmate.expectedDateOfLeaving"
                type="date"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Amount deposited</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.amountDeposited"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Monthly rent payment</label
            >
            <select
              v-model="selectedOption"
              name="selectRent"
              id=""
              class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option v-for="amount in options" :key="amount" :value="amount">
                {{ amount }}
              </option>
            </select>
            <div class="sm:col-span-2" v-if="selectedOption === 'other'">
              <div class="mt-2">
                <input
                  type="number"
                  placeholder="Enter rent amount"
                  v-model="choosenAmount"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Room number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.roomNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Bed number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.bedNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Permanent address pincode</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.permanentAddressPincode"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Bike registration number</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.bikeRegistrationNumber"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Sharing room</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.sharingRoom"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Paid days</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.payHistory[inmate.payHistory.length - 1].paidDays"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              for="pay-month"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Pay month</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].payMonth"
              id="pay-month"
              name="pay-month"
              class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select Month</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
          </div>
          <div>
            <label
              for="pay-month"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Payment mode</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].paymentMode"
              id="pay-mode"
              name="pay-mode"
              class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label
              for="pay-month"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Paid To</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].paidTo"
              id="pay-mode"
              name="pay-mode"
              class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select Payee</option>
              <option>Faizullah Khan</option>
              <option>Noorullah Khan</option>
              <option>Sohel Khan</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
        @click="$router.go(-1)"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="submitForm"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";

const subscriptionAmount = ref("");
const selectedOption = ref("");
const choosenAmount = ref("");

watch(selectedOption, (val) => {
  if (val !== "other") {
    inmate.value.monthlySubscriptionAmount = val;
    console.log(subscriptionAmount.value);
  }
});

watch(choosenAmount, (val) => {
  inmate.value.monthlySubscriptionAmount = val;
});

const options = computed(() => {
  if (inmate.value.saharaHostelNumber === "Sahara 1") {
    return [6500, 7500, 8000, 9500, "other"];
  } else if (inmate.value.saharaHostelNumber === "Sahara 2") {
    return [6000, 4500, "other"];
  } else if (inmate.value.saharaHostelNumber === "Sahara 3") {
    return [10000, 11000, 12500, 13500, "other"];
  } else if (inmate.value.saharaHostelNumber === "Sahara 4") {
    return [6000, 4500, "other"];
  } else if (inmate.value.saharaHostelNumber === "Sahara 5") {
    return [7500, 8500, "other"];
  } else if (inmate.value.saharaHostelNumber === "Sahara 6") {
    return [5500, "other"];
  }
  return null;
});

const route = useRoute();
const queryParams = route.query;
const isEdit = queryParams.param === "edit";

const submitForm = (e) => {
  e.preventDefault();
  if (isEdit) {
    console.log("edited", inmate.value);
  } else {
    console.log("added", inmate.value);
  }
};

const inmate = ref({
  name: subscriptionAmount.value,
  fatherName: "",
  email: "",
  permanentAddress: "",
  contactNumber: "",
  parentsContactNumber: "",
  emergencyContactNumber: "",
  placeOfWorkOrStudy: "",
  dateOfJoining: "",
  aadharNumber: "",
  expectedDateOfLeaving: "",
  amountDeposited: "",
  monthlySubscriptionAmount: subscriptionAmount.value,
  roomNumber: "",
  bedNumber: "",
  saharaHostelNumber: "",
  bikeRegistrationNumber: "",
  permanentAddressPincode: "",
  sharingRoom: "",
  createdBy: "",
  createdAt: null,
  payHistory: [
    {
      payMonth: "",
      payAmount: "",
      paidDays: "",
      paymentMode: "",
      paidTo: "",
    },
  ],
});

onMounted(() => {
  if (isEdit) {
    inmate.value = {
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
      amountDeposited: "Yes",
      monthlySubscriptionAmount: "Yes",
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
          paidDays: 12,
          paymentMode: "Cash",
          paidTo: "Noorullah Khan",
        },
        {
          payMonth: "Feb",
          payAmount: 6500,
          paidDays: 12,
          paymentMode: "Cash",
          paidTo: "Noorullah Khan",
        },
        {
          payMonth: "Mar",
          payAmount: 6500,
          paidDays: 12,
          paymentMode: "Cash",
          paidTo: "Noorullah Khan",
        },
        {
          payMonth: "Apr",
          payAmount: 6500,
          paidDays: 12,
          paymentMode: "Cash",
          paidTo: "Noorullah Khan",
        },
      ],
    };
  }
});
</script>
