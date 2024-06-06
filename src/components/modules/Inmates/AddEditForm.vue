<template>
  <form v-if="!store.isLoading">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Add Inmate
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="full-name" :class="commonClasses.labelClasses"
              >Full name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.name"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="father-name" :class="commonClasses.labelClasses"
              >Father name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.fatherName"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" :class="commonClasses.labelClasses"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                v-model="inmate.email"
                type="email"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="email" :class="commonClasses.labelClasses"
              >Contact number</label
            >
            <div class="mt-2">
              <input
                id="number"
                name="number"
                v-model="inmate.contactNumber"
                type="number"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" :class="commonClasses.labelClasses"
              >Permanent address</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.permanentAddress"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" :class="commonClasses.labelClasses"
              >Parent's contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.parentsContactNumber"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" :class="commonClasses.labelClasses"
              >Emergency contact number</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.emergencyContactNumber"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClasses.labelClasses"
              >Sahara hostel branch</label
            >
            <div class="mt-2">
              <select
                name=""
                id=""
                v-model="inmate.saharaHostelNumber"
                :class="commonClasses.selectClasses"
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
            <label :class="commonClasses.labelClasses"
              >Place of work/study</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.placeOfWorkOrStudy"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClasses.labelClasses">Date of joining</label>
            <div class="mt-2">
              <input
                type="date"
                v-model="inmate.dateOfJoining"
                :class="commonClasses.inputClasses"
                @click="openCalendar"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClasses.labelClasses">Aadhar number</label>
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.aadharNumber"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClasses.labelClasses"
              >Expected date of vacating</label
            >
            <div class="mt-2">
              <input
                v-model="inmate.expectedDateOfLeaving"
                type="date"
                :class="commonClasses.inputClasses"
                @click="openCalendar"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClasses.labelClasses">Amount deposited</label>
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.amountDeposited"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label :class="commonClasses.labelClasses"
              >Monthly rent payment</label
            >
            <select
              v-model="selectedOption"
              name="selectRent"
              id=""
              :class="commonClasses.selectClasses"
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
                  :class="commonClasses.inputClasses"
                  class="no-spinner"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClasses.labelClasses">Room number</label>
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.roomNumber"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label :class="commonClasses.labelClasses">Bed number</label>
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.bedNumber"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="postal-code" :class="commonClasses.labelClasses"
              >Permanent address pincode</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="inmate.permanentAddressPincode"
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonClasses.labelClasses"
              >Bike registration number</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.bikeRegistrationNumber"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonClasses.labelClasses"
              >Sharing room</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="inmate.sharingRoom"
                :class="commonClasses.inputClasses"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonClasses.labelClasses"
              >Paid days</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].paidDays
                "
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="full-name" :class="commonClasses.labelClasses"
              >Paid Amount</label
            >
            <div class="mt-2">
              <input
                type="number"
                v-model="
                  inmate.payHistory[inmate.payHistory.length - 1].payAmount
                "
                :class="commonClasses.inputClasses"
                class="no-spinner"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="pay-month" :class="commonClasses.labelClasses"
              >Pay month</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].payMonth"
              id="pay-month"
              name="pay-month"
              :class="commonClasses.selectClasses"
            >
              <option value="">Select Month</option>
              <option v-for="month in months" :key="month">
                {{ month }}
              </option>
            </select>
          </div>
          <div>
            <label for="pay-month" :class="commonClasses.labelClasses"
              >Payment mode</label
            >
            <select
              v-model="
                inmate.payHistory[inmate.payHistory.length - 1].paymentMode
              "
              id="pay-mode"
              name="pay-mode"
              :class="commonClasses.selectClasses"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label for="pay-month" :class="commonClasses.labelClasses"
              >Paid To</label
            >
            <select
              v-model="inmate.payHistory[inmate.payHistory.length - 1].paidTo"
              id="pay-mode"
              name="pay-mode"
              :class="commonClasses.selectClasses"
            >
              <option value="">Select Paid to</option>
              <option v-for="name in names" :key="name">
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
        :class="commonClasses.buttonClasses"
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
import { useStore } from "@/store";
import { commonClasses } from "../../Common/commonClass";
import axios from "axios";

const route = useRoute();

const store = useStore();

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
  saharaHostelNumber: store.selectedHostel || "",
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

const id = route.query.id;

const submitForm = (e) => {
  e.preventDefault();
  if (id) {
    try {
      store.isLoading = true;
      axios.put(
        `https://sahara-api-f8yp.vercel.app/inmates/${id}`,
        inmate.value
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
</script>
