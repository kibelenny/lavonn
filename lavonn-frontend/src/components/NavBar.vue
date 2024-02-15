<script setup lang="ts">
import { ref } from 'vue'
import type { NavLinks } from '@/types'
import Facebook from '@/components/svg/Facebook.vue'
import Instagram from '@/components/svg/Instagram.vue'
import Linkedin from '@/components/svg/Linkedin.vue'
import Twitter from '@/components/svg/Twitter.vue'

const navBarLinks = ref<NavLinks>([
    {
        title: 'Shop By Category',
        link: '/',
    },
    {
        title: 'Shop By Condition',
        link: '/',
    },
    {
        title: 'Special Offers',
        link: '/',
    },
    {
        title: 'Over The Counter',
        link: '/',
    },
])

const socialLinks = ref([
    {
        svg: Facebook,
        link: '#',
    },
    {
        svg: Twitter,
        link: '#',
    },
    {
        svg: Linkedin,
        link: '#',
    },
    {
        svg: Instagram,
        link: '#',
    },
])
</script>

<template>
    <section class="bg-green-shade-01 py-2">
        <div class="container mx-auto flex justify-between">
            <div class="flex space-x-32 align-middle">
                <router-link
                    class="text-lg font-medium text-white"
                    v-for="(link, idx) in navBarLinks"
                    :key="idx"
                    :to="link.link"
                    >{{ link.title }}</router-link
                >
            </div>
            <div class="flex space-x-4 align-middle 2xl:space-x-6">
                <a v-for="(social, idx) in socialLinks" :href="social.link">
                    <component
                        :is="social.svg"
                        class="h-6 w-6 fill-white transition duration-300 hover:fill-gray-100 md:h-8 md:w-8"
                    />
                </a>
            </div>
        </div>
    </section>
</template>
