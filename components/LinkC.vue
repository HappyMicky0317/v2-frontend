<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  noColor: {
    type: Boolean,
    default: false
  },
});
</script>

<template>
  <NuxtLink :class="{
    'text-indigo-600 hover:text-indigo-500': !noColor,
  }" :href="href" class="font-medium leading-6">
    <slot/>
  </NuxtLink>
</template>

<style scoped>

</style>