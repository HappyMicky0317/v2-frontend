<script lang="ts" setup>
import {defineProps, PropType} from "vue";
import {SmsRoutingRoutesSmppConnectionsCreatePayload} from "~/types/data-contracts";

let props = defineProps({
  modelValue: {
    type: Object as PropType<SmsRoutingRoutesSmppConnectionsCreatePayload>,
    required: true,
  },
  errors: {
    type: Object as PropType<any> || null,
  },
});

</script>

<template>
  <FormFieldSet>
    <FormInput
        v-model="modelValue.url"
        :error="errors?.url"
        label="URL"
        required
        @change="$emit('update:modelValue.url', $event.target.value);"
    />
    <FormInput
        v-model="modelValue.port"
        :error="errors?.port"
        label="Port"
        required
        type="number"
        @change="$emit('update:modelValue.port', $event.target.value);"
    />
    <FormInput
        v-model="modelValue.username"
        :error="errors?.username"
        label="Username"
        required
        @change="$emit('update:modelValue.username', $event.target.value);"
    />
    <FormInput
        v-model="modelValue.password"
        :error="errors?.password"
        label="Password"
        required
        @change="$emit('update:modelValue.password', $event.target.value);"
    />
    <FormInput
        v-model="modelValue.dlr_url"
        :error="errors?.dlr_url"
        label="DLR URL"
        @change="$emit('update:modelValue.dlrUrl', $event.target.value);"
    />
    <FormInput
        v-model="modelValue.dlr_port"
        :error="errors?.dlr_port"
        label="DLR Port"
        type="number"
        @change="$emit('update:modelValue.dlrPort', $event.target.value);"
    />
  </FormFieldSet>
</template>

<style scoped>

</style>