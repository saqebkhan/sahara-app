<template>
  <div class="grid grid-cols-2 gap-4">
    <!-- First Column -->
    <div>
      <!-- First Row -->
      <div class="mb-4">
        <label for="pay-month" :class="commonClasses.labelClasses"
          >Pay month</label
        >
        <select
          v-model="payMonth"
          id="pay-month"
          name="pay-month"
          :class="commonClasses.selectClasses"
        >
          <option disabled value="">Select Month</option>
          <option
            v-for="month in months"
            :key="month"
            :value="month"
            class="p-4 cursor-pointer"
          >
            {{ month }}
          </option>
        </select>
      </div>

      <!-- Second Row -->
      <div>
        <label for="rent" :class="commonClasses.labelClasses">Pay amount</label>
        <div class="mt-2">
          <input
            v-model.trim="payAmount"
            type="number"
            name="rent-amount"
            :class="commonClasses.inputClasses"
            class="no-spinner"
          />
        </div>
      </div>
    </div>

    <!-- Second Column -->
    <div>
      <!-- First Row -->
      <div class="mb-4">
        <label for="rent" :class="commonClasses.labelClasses">Paid Days</label>
        <div class="mt-2">
          <input
            v-model.trim="paidDays"
            type="number"
            name="paid-days"
            :class="commonClasses.inputClasses"
            class="no-spinner"
          />
        </div>
      </div>

      <!-- Second Row -->
      <div>
        <label for="pay-month" :class="commonClasses.labelClasses"
          >Payment mode</label
        >
        <select
          v-model="paymentMode"
          id="pay-mode"
          name="pay-mode"
          :class="commonClasses.selectClasses"
        >
          <option disabled value="">Select Payment Mode</option>
          <option
            v-for="paymentMode in paymentModes"
            :key="paymentMode"
            :value="paymentMode"
            class="p-4 cursor-pointer"
          >
            {{ paymentMode }}
          </option>
        </select>
      </div>
      <div>
        <label for="pay-month" :class="commonClasses.labelClasses"
          >Paid To</label
        >
        <select
          v-model="paidTo"
          id="pay-mode"
          name="pay-mode"
          :class="commonClasses.selectClasses"
        >
          <option disabled value="">Select Payee</option>
          <option
            v-for="payee in payees"
            :key="payee"
            :value="payee"
            class="p-4 cursor-pointer"
          >
            {{ payee }}
          </option>
        </select>
      </div>
    </div>
  </div>

  <!-- Save and Cancel Buttons -->
  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button
      type="button"
      class="text-sm font-semibold leading-6 text-gray-900"
      @click="$router.go(-1)"
    >
      Cancel
    </button>
    <button
      :disabled="!isValidForm"
      type="submit"
      :class="commonClasses.buttonClasses"
      class="disabled:bg-gray-400"
      @click="submitForm"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { commonClasses } from "../../Common/commonClass";
const payMonth = ref("");
const payAmount = ref("");
const paidDays = ref("");
const paymentMode = ref("");
const paidTo = ref("");
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
const paymentModes = ["Cash", "Online"];
const payees = ["Faizullah Khan", "Noorullah Khan", "Sohel Khan"];
const isValidForm = computed(() => {
  return (
    payMonth.value !== "" &&
    payAmount.value !== "" &&
    paidDays.value !== "" &&
    paymentMode.value !== "" &&
    paidTo.value !== ""
  );
});

const submitForm = () => {
  if (isValidForm.value) {
    // Perform form submission logic
    console.log("Form submitted successfully");
  } else {
    // Show validation error message or prevent form submission
    console.log("Please fill in all required fields");
  }
};
</script>
