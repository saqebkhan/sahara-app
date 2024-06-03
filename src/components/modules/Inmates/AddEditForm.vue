<template>
  <div v-if="store.isLoading">Loading...</div>
  <form v-else>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Add Inmate
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="full-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Full name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.name"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="father-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Father name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.fatherName"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="email"
              :class="commonClassFuncs.commonLabelClasses()"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                v-model="inmate.email"
                type="email"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="email"
              :class="commonClassFuncs.commonLabelClasses()"
              >Contact number</label
            >
            <div class="mt-2">
              <input
                id="number"
                name="number"
                v-model="inmate.contactNumber"
                type="number"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="street-address"
              :class="commonClassFuncs.commonLabelClasses()"
              >Permanent address</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.permanentAddress"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label
              for="city"
              :class="commonClassFuncs.commonLabelClasses()"
              >Parent's contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.parentsContactNumber"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              :class="commonClassFuncs.commonLabelClasses()"
              >Emergency contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.emergencyContactNumber"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Sahara hostel branch</label
            >
            <div class="mt-2">
              <select
                name=""
                id=""
                v-model="inmate.saharaHostelNumber"
                :class="commonClassFuncs.commonSelectClasses()"
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
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Place of work/study</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.placeOfWorkOrStudy"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Date of joining</label
            >
            <div class="mt-2">
              <input
                type="date"
                v-model="inmate.dateOfJoining"
                :class="commonClassFuncs.commonClasses()"
                @click="openCalendar"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Aadhar number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.aadharNumber"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Expected date of vacating</label
            >
            <div class="mt-2">
              <input
                v-model="inmate.expectedDateOfLeaving"
                type="date"
                :class="commonClassFuncs.commonClasses()"
                @click="openCalendar"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Amount deposited</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.amountDeposited"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Monthly rent payment</label
            >
            <select
              v-model="selectedOption"
              name="selectRent"
              id=""
              :class="commonClassFuncs.commonSelectClasses()"
            >
              <option
                v-for="amount in options"
                :key="amount"
                :value="amount"
              >
                {{ amount }}
              </option>
            </select>
            <div
              class="sm:col-span-2"
              v-if="selectedOption === 'other'"
            >
              <div class="mt-2">
                <input
                  type="number"
                  placeholder="Enter rent amount"
                  v-model="choosenAmount"
                  :class="commonClassFuncs.commonClasses()"
                  class="no-spinner"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Room number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.roomNumber"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClassFuncs.commonLabelClasses()"
              >Bed number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.bedNumber"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="postal-code"
              :class="commonClassFuncs.commonLabelClasses()"
              >Permanent address pincode</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.permanentAddressPincode"
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Bike registration number</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.bikeRegistrationNumber"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Sharing room</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.sharingRoom"
                :class="commonClassFuncs.commonClasses()"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Paid days</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].paidDays
                "
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="full-name"
              :class="commonClassFuncs.commonLabelClasses()"
              >Paid Amount</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].payAmount
                "
                :class="commonClassFuncs.commonClasses()"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              for="pay-month"
              :class="commonClassFuncs.commonLabelClasses()"
              >Pay month</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].payMonth"
              id="pay-month"
              name="pay-month"
              :class="commonClassFuncs.commonSelectClasses()"
            >
              <option value="">Select Month</option>
              <option
                v-for="month in months"
                :key="month"
              >
                {{ month }}
              </option>
            </select>
          </div>
          <div>
            <label
              for="pay-month"
              :class="commonClassFuncs.commonLabelClasses()"
              >Payment mode</label
            >
            <select
              v-model="
                inmate.payHistory[inmate.payHistory.length - 1].paymentMode
              "
              id="pay-mode"
              name="pay-mode"
              :class="commonClassFuncs.commonSelectClasses()"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label
              for="pay-month"
              :class="commonClassFuncs.commonLabelClasses()"
              >Paid To</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].paidTo"
              id="pay-mode"
              name="pay-mode"
              :class="commonClassFuncs.commonSelectClasses()"
            >
              <option value="">Select Paid to</option>
              <option
                v-for="name in names"
                :key="name"
              >
                {{ name }}
              </option>
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
        :class="commonClassFuncs.commonSubmitButtonClasses()"
        @click="submitForm"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../../store";
import * as commonClassFuncs from "../../Common/commonClass";
import axios from "axios";
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
  switch (inmate.value.saharaHostelNumber) {
    case "Sahara 1":
      return [6500, 7500, 8000, 9500, "other"];
    case "Sahara 2":
      return [6000, 4500, "other"];
    case "Sahara 3":
      return [10000, 11000, 12500, 13500, "other"];
    case "Sahara 4":
      return [6000, 4500, "other"];
    case "Sahara 5":
      return [7500, 8500, "other"];
    case "Sahara 6":
      return [5500, "other"];
    default:
      return null;
  }
});

const route = useRoute();

const store = useStore();
const id = route.query.id;

const submitForm = (e) => {
  e.preventDefault();
  if (id) {
    try {
      store.isLoading = true;
      axios.put(
        `https://sahara-api-f8yp.vercel.app/inmates/${id}`,
        inmate.value,
      );
    } catch (e) {
      console.log(e);
    } finally {
      store.isLoading = false;
    }
  } else {
    try {
      store.isLoading = true;
      axios.post("https://sahara-api-f8yp.vercel.app/inmates", inmate.value);
    } catch (e) {
      console.log(e);
    } finally {
      store.isLoading = false;
    }
  }
};

const openCalendar = (event) => {
  event.target.showPicker();
};

onBeforeMount(async () => {
  if (id)
    try {
      store.isLoading = true;
      await axios
        .get("https://sahara-api-f8yp.vercel.app/allInmates")
        .then((res) => {
          inmate.value = res.data.find((i) => i._id === id);
        });
    } catch (e) {
      console.log(e);
    } finally {
      store.isLoading = false;
    }
});
</script>
