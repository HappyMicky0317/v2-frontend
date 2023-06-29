<script lang="ts" setup>

import PageHeader from "~/components/PageHeader.vue";
import {Api} from "~/types/Api";

const items = ref([])

const api = new Api();

items.value = (await api.smsRoutingRoutesList()).data.data;
</script>

<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Companies</Title>
    </Head>

    <PageHeader :buttons="[
        {url: '/sms/routing/routes/create', label: 'New route'}
    ]" title="Routes"/>

    <Table :empty-state="{
        name: 'Route',
        href: '/sms/routing/routes/create'
    }" :headers="[
        {text: 'Name', value: 'name'},
    ]" :items="items"/>
  </NuxtLayout>
</template>

<style scoped>

</style>