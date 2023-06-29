<template>
  <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
    <button class="-m-2.5 p-2.5 text-gray-700 lg:hidden" type="button" @click="appStore.sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
    </button>

    <!-- Separator -->
    <div aria-hidden="true" class="h-6 w-px bg-gray-900/10 lg:hidden"/>

    <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form action="#" class="relative flex flex-1" method="GET">
        <label class="sr-only" for="search-field">Search</label>
        <MagnifyingGlassIcon aria-hidden="true"
                             class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"/>
        <input id="search-field"
               class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
               name="search" placeholder="Search..." type="search"/>
      </form>
      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <button class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500" type="button">
          <span class="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" class="h-6 w-6"/>
        </button>

        <!-- Separator -->
        <div aria-hidden="true" class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>

        <!-- Profile dropdown -->
        <Menu as="div" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5">
            <span class="sr-only">Open user menu</span>
            <span class="hidden lg:flex lg:items-center">
                  <span aria-hidden="true" class="ml-4 text-sm font-semibold leading-6 text-gray-900">
                    {{ user?.name }}
                  </span>
                  <ChevronDownIcon aria-hidden="true" class="ml-2 h-5 w-5 text-gray-400"/>
                </span>
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                as="div"
                class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }" as="div">
                <a :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                   :href="item.href">{{
                    item.name
                  }}</a>
              </MenuItem>
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }" as="div">
                <a :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                   href="#" @click="logout">Logout</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/vue/20/solid";
import {Bars3Icon, BellIcon} from "@heroicons/vue/24/outline";
import {useAppStore} from "@/stores/app.js";

const {logout, user} = useAuth();
const active = false;
const appStore = useAppStore()

const userNavigation = [
  {name: 'Your profile', href: '#'},
]
</script>