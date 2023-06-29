import {defineNuxtConfig} from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // css: [
    //     '@/assets/css/app.css',
    // ],
    components: [
        {path: '~/pages/partials', prefix: ''},
        '~/components'
    ],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", '@pinia/nuxt', 'nuxt-headlessui', 'nuxt-proxy', '@tailvue/nuxt'],
    runtimeConfig: {//won't be used as we moving away from $larafetch to V2 class
        public: {
            backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL, //used in apiv1
            proxyUrl: '/api/proxy/'
        },
    },
    dirs: [
        {'path': '~/types', 'global': true, 'prefix': ''},
    ],
    headlessui: {
        prefix: ''
    },
    imports: {
        dirs: ["./utils"],
    },
    devtools: {
        enabled: true
    }
});
