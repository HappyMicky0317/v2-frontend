<script lang="ts" setup>
import {defineProps} from "vue/dist/vue";

interface FormRadioProps {
  label: string;
  value: string;
  modelValue?: string;
  error?: string;
  required?: boolean;
  inline?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
}

const props = defineProps<FormRadioProps>();
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center">
      <input
          :id="$.uid"
          :checked="modelValue === value"
          :class="{ 'bg-gray-200': disabled }"
          :disabled="disabled"
          :value="value"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          type="radio"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <label
          :class="{ 'text-gray-300': disabled }"
          :for="$.uid"
          class="ml-3 block text-sm leading-6 text-gray-900"
      >
        {{ label }}
      </label>
    </div>
    <div v-if="modelValue === value">
      <slot/>
    </div>
  </div>
</template>

<style scoped></style>