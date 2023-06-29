<script lang="ts" setup>
import PageHeader from "~/components/PageHeader.vue";
import {Api} from "~/types/Api";

const title = 'Companies';
const items = ref([])
const token = ref('' as any);


const api = new Api();
items.value = (await api.smsRoutingCompaniesList()).data.data;
</script>

<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Companies</Title>
    </Head>

    <PageHeader :buttons="[
        {label: 'Create Company', url: '/sms/routing/companies/create'}
    ]" title="Companies"/>
    <div class="my-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <Table :empty-state="{
                name: 'Company',
                href: '/sms/routing/companies/create'
            }" :headers="[
                {text: 'Name', value: 'name'},
            ]" :items="items"/>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>