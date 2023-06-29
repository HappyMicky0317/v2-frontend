<template>
  <div>
    <label class="block text-sm font-medium leading-6 text-gray-900" for="location">{{ label }}</label>
    <select
        class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="item in items" :value="item.id">{{ item.name }}</option>
    </select>
  </div>

  <div v-if="error" class="text-rose-500 text-sm">
    {{ Array.isArray(error) ? error[0] : error }}
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

defineEmits(["update:modelValue"]);

type FormSelectProps = {
  items: []
  label: string
  selected?: number
  error?: string
  modelValue?: string
}

const modelValue = ''
let props = defineProps<FormSelectProps>()

const selected = ref(props.selected ? props.items[props.selected] : 0)
</script>