<script lang="ts" setup>
import defineProps from "vue";

defineProps({
  title: String,
  align: {
    type: String,
    default: "center",
    validator: (value: string) => {
      return ["left", "center", "right"].includes(value);
    },
  },
});
</script>

<template>
  <div :class="{ 'justify-center': align === 'center' }" class="flex">
    <div
        class="ring-1 ring-gray-900/5 shadow-sm bg-white p-3 rounded-xl w-3/4"
    >
      <div
          v-if="title"
          class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6"
      >
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          {{ title }}
        </h3>
      </div>

      <div class="p-3">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>