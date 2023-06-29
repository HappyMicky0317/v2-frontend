<script lang="ts" setup>
import {defineProps, onMounted} from "vue";

const id = (Math.random() + 1).toString(36).substring(7)
defineEmits(["update:modelValue"]);

interface FormInputProps {
  label: string;
  error: string | undefined | [];
  required?: boolean;
  autofocus?: boolean;
  type?: 'string' | 'number' | 'email' | 'password';
}

const props = defineProps<FormInputProps>();
const vFocus = {
  mounted: (el) => el.focus(),
};
const modelValue = ''
onMounted(() => { //not working :/
  if (props.autofocus) {
    const input = document.getElementById(id);
    if (input) {
      window.setTimeout(() => input.focus(), 0);
      // input.focus();
      // console.log(input);
    }
  }
});
</script>

<template>
  <div>
    <label
        :for="id"
        class="block text-sm font-medium leading-6 text-gray-900"
    >{{ label }} <span v-if="required" class="text-rose-500">*</span></label
    >
    <slot name="after-label"></slot>
    <div class="mt-2">
      <input
          :id="id"
          :ref="id"
          :class="{ 'ring-rose-500': error }"
          :type="type ?? 'text'"
          :value="modelValue"
          class="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <p v-if="error" class="mt-2 text-sm text-red-600" v-text="Array.isArray(error) ? error[0] : error"></p>
    </div>
  </div>

</template>

<style scoped></style>