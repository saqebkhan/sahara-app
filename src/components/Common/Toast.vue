<template>
    <div
      v-if="isVisible"
      class="ct-absolute ct-right-0 ct-top-16 ct-z-50 ct-my-5 ct-mr-3 ct-flex ct-justify-end max-sm:ct-bottom-10 max-sm:ct-top-auto max-sm:ct-justify-center xl:ct-top-16 xl:ct-mt-10"
    >
      <div
        class="ct-m-3 ct-w-80 ct-rounded-lg ct-border ct-border-grey ct-bg-white sm:ct-h-11 sm:ct-w-max"
      >
        <div
          class="ct-m-3 ct-flex ct-font-sans ct-text-sm ct-font-normal ct-text-black"
        >
          <img
            class="ct-mr-2.5 ct-h-5 ct-w-5"
            src="../images/toast-error.svg"
            :alt="$t('ErrorIcon')"
          />
          {{ $t(errorMessage) }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useStore } from '../../store';
  
  defineProps<{
    errorMessage: string;
  }>();
  
  const store = useStore();
  const isVisible = ref(true);
  
  setTimeout(() => {
    isVisible.value = false;
    store.errorToastMessage = "";
  }, 5000);
  </script>