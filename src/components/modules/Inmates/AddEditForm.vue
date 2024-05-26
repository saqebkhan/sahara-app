<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Add Inmate
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="full-name" :class="commonLabelClasses">Full name</label>
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.name"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                :class="commonClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="father-name" :class="commonLabelClasses"
              >Father name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.fatherName"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                :class="commonClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" :class="commonLabelClasses">Email address</label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                v-model="inmate.email"
                type="email"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="email" :class="commonLabelClasses"
              >Contact number</label
            >
            <div class="mt-2">
              <input
                id="number"
                name="string"
                v-model="inmate.contactNumber"
                type="string"
                :class="commonClasses"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" :class="commonLabelClasses"
              >Permanent address</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.permanentAddress"
                :class="commonClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" :class="commonLabelClasses"
              >Parent's contact number</label
            >
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.parentsContactNumber"
                :class="commonClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" :class="commonLabelClasses"
              >Emergency contact number</label
            >
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.emergencyContactNumber"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonLabelClasses">Sahara hostel branch</label>
            <div class="mt-2">
              <select
                name=""
                id=""
                v-model="inmate.saharaHostelNumber"
                :class="commonSelectClasses"
              >
                <option
                  v-for="sahara in saharaOptions"
                  :key="sahara.value"
                  :value="sahara.value"
                >
                  {{ sahara.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Place of work/study</label>
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.placeOfWorkOrStudy"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Date of joining</label>
            <div class="mt-2">
              <input
                type="date"
                v-model="inmate.dateOfJoining"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Aadhar number</label>
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.aadharNumber"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Expected date of vacating</label>
            <div class="mt-2">
              <input
                v-model="inmate.expectedDateOfLeaving"
                type="date"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Amount deposited</label>
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.amountDeposited"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonLabelClasses">Monthly rent payment</label>
            <select
              v-model="selectedOption"
              name="selectRent"
              id=""
              :class="commonSelectClasses"
            >
              <option v-for="amount in options" :key="amount" :value="amount">
                {{ amount }}
              </option>
            </select>
            <div class="sm:col-span-2" v-if="selectedOption === 'other'">
              <div class="mt-2">
                <input
                  type="string"
                  placeholder="Enter rent amount"
                  v-model="choosenAmount"
                  :class="commonClasses"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonLabelClasses">Room number</label>
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.roomNumber"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonLabelClasses">Bed number</label>
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.bedNumber"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="postal-code" :class="commonLabelClasses"
              >Permanent address pincode</label
            >
            <div class="mt-2">
              <input
                type="string"
                v-model="inmate.permanentAddressPincode"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonLabelClasses"
              >Bike registration number</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.bikeRegistrationNumber"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonLabelClasses"
              >Sharing room</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.sharingRoom"
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonLabelClasses">Paid days</label>
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].paidDays
                "
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonLabelClasses"
              >Paid Amount</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].payAmount
                "
                :class="commonClasses"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="pay-month" :class="commonLabelClasses">Pay month</label>
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].payMonth"
              id="pay-month"
              name="pay-month"
              :class="commonSelectClasses"
            >
              <option value="">Select Month</option>
              <option v-for="month in months" :key="month">{{ month }}</option>
            </select>
          </div>
          <div>
            <label for="pay-month" :class="commonLabelClasses"
              >Payment mode</label
            >
            <select
              v-model="
                inmate.payHistory[inmate.payHistory.length - 1].paymentMode
              "
              id="pay-mode"
              name="pay-mode"
              :class="commonSelectClasses"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label for="pay-month" :class="commonLabelClasses">Paid To</label>
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].paidTo"
              id="pay-mode"
              name="pay-mode"
              :class="commonSelectClasses"
            >
              <option value="">Select Paid to</option>
              <option v-for="name in names" :key="name">{{ name }}</option>
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
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const subscriptionAmount = ref("");
const selectedOption = ref("");
const choosenAmount = ref("");

const inmate = ref({
  name: "",
  fatherName: "",
  email: "",
  permanentAddress: "",
  contactNumber: "",
  parentsContactNumber: "",
  emergencyContactNumber: "",
  saharaHostelNumber: "",
  placeOfWorkOrStudy: "",
  dateOfJoining: "",
  aadharNumber: "",
  expectedDateOfLeaving: "",
  amountDeposited: "",
  monthlyRentPayment: "",
  roomNumber: "",
  bedNumber: "",
  permanentAddressPincode: "",
  bikeRegistrationNumber: "",
  sharingRoom: "",
  payHistory: [
    {
      paidDays: 0,
      payMonth: "",
      payAmount: 0,
      paymentMode: "",
      paidTo: "",
      paidYear: new Date().getFullYear().toString(),
    },
  ],
});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const names = ["Faizullah Khan", "Noorullah Khan", "Sohel Khan"];

const saharaOptions = [
  { label: "Sahara 1", value: "Sahara 1" },
  { label: "Sahara 2", value: "Sahara 2" },
  { label: "Sahara Luxury", value: "Sahara 3" },
  { label: "Sahara 4", value: "Sahara 4" },
  { label: "Sahara 5", value: "Sahara 5" },
  { label: "Sahara Hall", value: "Sahara 6" },
];

watch(selectedOption, (val) => {
  if (val !== "other") {
    inmate.value.monthlyRentPayment = val.toString();
  }
});

watch(choosenAmount, (val) => {
  inmate.value.monthlyRentPayment = val.toString();
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

const commonClasses = computed(() => {
  return "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
});

const commonSelectClasses = computed(() => {
  return "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6";
});

const commonLabelClasses = computed(() => {
  return "block text-sm font-medium leading-6 text-gray-900";
});

const route = useRoute();
const id = route.query.id;

const submitForm = (e) => {
  e.preventDefault();
  if (id)
    axios.put(`https://sahara-api-f8yp.vercel.app/inmates/${id}`, inmate.value);
  else axios.post("https://sahara-api-f8yp.vercel.app/inmates", inmate.value);
};

onMounted(async () => {
  if (id)
    await axios
      .get("https://sahara-api-f8yp.vercel.app/allInmates")
      .then((res) => {
        inmate.value = res.data.find((i) => i._id === id);
      });
});
</script>
