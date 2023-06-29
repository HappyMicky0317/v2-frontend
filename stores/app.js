import {defineStore} from "pinia";
import {ref} from "vue";
import {CalendarIcon, FolderIcon, HomeIcon, UsersIcon} from "@heroicons/vue/24/outline";

export const useAppStore =
    defineStore('app', () => {
        const sidebarOpen = ref(false);
        const navigation = ref([
            {name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: false},
            {
                name: 'Campaigns',
                icon: UsersIcon,
                current: false,
                href: '/campaigns',
                children: [
                    {name: 'Campaigns', href: '/campaigns', current: false},
                    {name: 'Plans', href: '#', current: false},
                    {name: 'Offers', href: '#', current: false},
                    {name: 'Texts', href: '#', current: false},
                ],
            },
            {
                name: 'Audience',
                icon: FolderIcon,
                current: false,
                children: [
                    {name: 'Contacts', href: '#', current: false},
                    {name: 'Upload', href: '#', current: false},
                ],
            },
            {
                name: 'Routes',
                href: '#',
                icon: CalendarIcon,
                current: false,
                children: [
                    {
                        name: 'Companies',
                        href: '/sms/routing/companies',
                        current: false,
                    },
                    {name: 'Routes', href: '/sms/routing/routes', current: false},
                    {name: 'Rates', href: '#', current: false},
                    {name: 'Reports', href: '#', current: false},
                ]
            }
        ]);
        const navBarActive = function (path) {
            if (!path.startsWith('/')) {
                return;
            }

            navigation.value.forEach((item) => {
                if (item.children) {
                    item.current = path.startsWith(item.href);
                    item.children.forEach((child) => {
                        if (path.startsWith(child.href)) {
                            item.current = true;
                            child.current = true;
                        } else {
                            child.current = false;
                        }
                    });
                } else {
                    item.current = item.href === path;
                }
            });
        }

        return {sidebarOpen, navigation, navBarActive}
    });