<template>
  <div class="flex grow overflow-y-auto">
    <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div class="flex h-16 shrink-0 items-center">
        <ApplicationLogo/>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul class="flex flex-1 flex-col gap-y-7" role="list">
          <li>
            <ul class="-mx-2 space-y-1" role="list">
              <li v-for="item in appStore.navigation" :key="item.name + item.current">
                <LinkC v-if="!item.children"
                       :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700']"
                       :href="item.href"
                       no-color
                >
                  {{ item.name }}
                </LinkC>
                <div v-else>
                  <button
                      :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700']"
                      @click="item.current = !item.current">
                    <ChevronRightIcon
                        :class="[item.current ? 'rotate-90 text-gray-500' : 'text-gray-400', 'h-5 w-5 shrink-0']"
                        aria-hidden="true"/>
                    {{ item.name }}
                  </button>
                  <ul v-show="item.current" class="mt-1 px-2">
                    <li v-for="subItem in item.children" :key="subItem.name">
                      <LinkC :href="subItem.href">
                        <div
                            :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700']">
                          {{ subItem.name }}
                        </div>
                      </LinkC>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <LinkC
                class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                href="#">
              <img alt=""
                   class="h-8 w-8 rounded-full bg-gray-50"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
            </LinkC>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script setup>
import {useAppStore} from "@/stores/app.js";
import {ChevronRightIcon} from '@heroicons/vue/20/solid'
import {useRoute} from "#app";

var appStore = useAppStore();
let router = useRouter();
appStore.navBarActive(useRoute().path);
router.afterEach((to, from) => {
  appStore.navBarActive(to.path);
})
</script>