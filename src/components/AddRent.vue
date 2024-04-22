<template>
  <div class="grid grid-cols-2 gap-4">
    <!-- First Column -->
    <div>
      <!-- First Row -->
      <div class="mb-4">
        <label
          for="pay-month"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Pay month</label
        >
        <select
          v-model="payMonth"
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

      <!-- Second Row -->
      <div>
        <label
          for="rent"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Pay amount</label
        >
        <div class="mt-2">
          <input
            v-model.trim="payAmount"
            type="number"
            name="rent-amount"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>

    <!-- Second Column -->
    <div>
      <!-- First Row -->
      <div class="mb-4">
        <label
          for="rent"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Paid Days</label
        >
        <div class="mt-2">
          <input
            v-model.trim="paidDays"
            type="number"
            name="paid-days"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Second Row -->
      <div>
        <label
          for="pay-month"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Payment mode</label
        >
        <select
          v-model="paymentMode"
          id="pay-mode"
          name="pay-mode"
          class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Select Payment Mode</option>
          <option>Cash</option>
          <option>Online</option>
        </select>
      </div>
      <div>
        <label
          for="pay-month"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Paid To</label
        >
        <select
          v-model="paidTo"
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

  <!-- Save and Cancel Buttons -->
  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button
      type="button"
      class="text-sm font-semibold leading-6 text-gray-900"
      @click="$router.go(-1)"
    >
      Cancel
    </button>
    {{ paymentMode }}
    {{ paidTo }}
    {{ payAmount }}
    {{ payMonth }}
    {{ paidDays }}
    <button
      :disabled="!isValidForm"
      type="submit"
      class="disabled:bg-gray-400 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="submitForm"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const payMonth = ref("");
const payAmount = ref("");
const paidDays = ref("");
const paymentMode = ref("");
const paidTo = ref("");

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
