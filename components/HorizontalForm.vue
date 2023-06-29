<script lang="ts" setup>
</script>

<template>
  <div class="px-4 sm:px-0">
    <h2
        class="text-base font-semibold leading-7 text-gray-900"
    >
      <slot name="title"/>
    </h2>
    <p class="mt-1 text-sm leading-6 text-gray-600">
      <slot name="description"/>
    </p>
  </div>

  <Card class="md:col-span-2">
    <slot name="content"/>
  </Card>
</template>

<style scoped>

</style>