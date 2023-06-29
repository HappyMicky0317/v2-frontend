<script lang="ts" setup>
import {defineProps} from "vue";

interface ButtonProps {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
});

</script>

<template>
  <button
      :class="{'cursor-not-allowed opacity-70': loading || disabled}"
      :type="type"
      class="rounded-md
       leading-6 font-medium
       hover:bg-indigo-600
       bg-indigo-500 px-4 py-2 text-sm inline-flex text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 content-center"

  >
    <span v-if="!loading" class="flex justify-center items-center">
      <span v-if="label && (label.toLowerCase().includes('create') || label.toLowerCase().includes('new'))"
            class="justify-center pr-2">
      <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path
                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"/>
          </svg>
    </span>{{ label }} <slot/></span>
    <span v-else
          class="flex inline-flex items-center leading-6 text-sm transition ease-in-out duration-150 justify-center">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"></path>
    </svg>
    Processing...
    </span>
  </button>
</template>