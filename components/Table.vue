<script lang="ts" setup>
import Vue3EasyDataTable, {BodyItemClassNameFunction} from "vue3-easy-data-table";
import Button from "./Button.vue";
import {PlusIcon} from "@heroicons/vue/20/solid";
import {defineProps} from "vue";

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string, rowNumber: number): string => {
  if (column === 'links') return 'links-column';
  return '';
};

interface EmptyState {
  name: string;
  href: string;
}

interface headerItem {
  text: string;
  value: string;
  sortable?: boolean;
}

interface Props {
  items: [] | null;
  headers: headerItem[];
  emptyState: EmptyState
}

const props = defineProps<Props>()

if (props.items?.length > 0 && props.items?.[0].links?.length > 0) {
  props.headers.push({text: "Actions", value: "links", sortable: false});
}
</script>

<template>
  <!--  Empty state-->
  <div v-if="items?.length === 0">
    <div class="text-center">
      <svg aria-hidden="true" class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor"
           viewBox="0 0 24 24">
        <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              vector-effect="non-scaling-stroke"/>
      </svg>
      <h3 class="mt-2 text-sm font-semibold text-gray-900">No {{ emptyState.name }}</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by creating a new {{ emptyState.name }}.</p>
      <div class="mt-6">
        <LinkC :href="emptyState.href">
          <Button>
            <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5"/>
            New {{ emptyState.name }}
          </Button>
        </LinkC>
      </div>
    </div>
  </div>

  <!--  Data-->
  <Vue3EasyDataTable v-else
                     :body-item-class-name="bodyItemClassNameFunction"
                     :headers="headers" :items="items"
                     :theme-color="'rgb(99 102 241)'"
                     table-class-name="vue3-easy-data-table"
  >
    <template v-for="(slot, index) of Object.keys($slots)" :key="index" v-slot:[slot]>
      <slot :name="slot"></slot>
    </template>
    <template #item-links="item">
      <div v-for="(link,key) in item.links">
        <LinkC :href="link">{{ key }}</LinkC>
      </div>
    </template>
  </Vue3EasyDataTable>
</template>

<style>
.vue3-easy-data-table {
  --easy-table-border: 0;
  --easy-table-row-border: 1px solid #e5e7eb;

  --easy-table-header-font-size: 0.875rem;
  --easy-table-header-height: 1.25rem;
  --easy-table-header-font-color: #111827;
  --easy-table-header-background-color: white;

  --easy-table-header-item-padding: 0.875rem 0.75rem;

  --easy-table-body-even-row-font-color: #111827;
  --easy-table-body-even-row-background-color: white;

  --easy-table-body-row-font-color: #111827;
  --easy-table-body-row-background-color: white;
  --easy-table-body-row-height: 1.25rem;
  --easy-table-body-row-font-size: 0.875rem;

  --easy-table-body-row-hover-font-color: #111827;
  --easy-table-body-row-hover-background-color: white;

  --easy-table-body-item-padding: 1rem 0.75rem;

  --easy-table-footer-background-color: white;
  --easy-table-footer-font-color: #111827;
  --easy-table-footer-font-size: 0.875rem;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
//border-radius: 10px;
}

.vue3-easy-data-table__main {
  border-radius: 10px 10px 0 0;
}

.vue3-easy-data-table {
  border-radius: 0 0 10px 10px;
}

.vue3-easy-data-table__footer {
  border-radius: 0 0 10px 10px;
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-transform: capitalize;
}
</style>