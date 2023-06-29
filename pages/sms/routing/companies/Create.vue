<script lang="ts" setup>
import {useToast} from "tailvue";
import {Ref} from "vue";
import {SmsRoutingCompaniesCreatePayload} from "~/types/data-contracts";
import {Api} from "~/types/Api";
import {useApi} from "~/composables/useApi";

const form: Ref<SmsRoutingCompaniesCreatePayload> = ref({})
const api = new Api();
const {
  submit: submit,
  error: error,
} = useApi(() => {
  return api.smsRoutingCompaniesCreate(form.value);
}, {
  onSuccess: (response) => {
    useToast().success('Company created!')
    useRouter().push("/sms/routing/companies")
  }
});

</script>

<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Companies</Title>
    </Head>

    <PageHeader :buttons="[]" title="Create Company"/>


    <Card class="flex justify-center">

      <form @submit.prevent="submit">
        <FormInput v-model="form.name" :error="error?.name?.[0]" label="Name"></FormInput>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit">
            Save
          </button>

        </div>
      </form>
    </Card>

  </NuxtLayout>
</template>

<style scoped>

</style>