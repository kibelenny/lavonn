<script setup lang="ts">
import ListProducts from '@/components/ListProducts.vue'
import { ref } from 'vue'
import type { Product } from '@/types'
import Popup from '@/components/Popup.vue'

const products = ref<Product[]>([
    {
        link: '#',
        image: new URL('@/assets/img/1.jpg', import.meta.url).href,
        name: 'Cerave Hydrating Cleanser 473ml',
        price: 2400,
    },
    {
        link: '#',
        image: new URL('@/assets/img/2.jpeg', import.meta.url).href,
        name: 'La Roche Posay Anthelios Shaka Spray SPF 50+ 200ml',
        price: 4000,
    },
    {
        link: '#',
        image: new URL('@/assets/img/3.jpg', import.meta.url).href,
        name: 'La Roche-Posay Effaclar Foam Cleanser 400ml',
        price: 3895,
    },
    {
        link: '#',
        image: new URL('@/assets/img/4.jpg', import.meta.url).href,
        name: 'Mamalait 250G',
        price: 3835,
    },
    {
        link: '#',
        image: new URL('@/assets/img/5.jpg', import.meta.url).href,
        name: 'Pregnacare Plus',
        price: 2910,
    },
])

const newProducts = ref<Product[]>([
    {
        banner: 'New',
        link: '#',
        image: new URL('@/assets/img/1.jpg', import.meta.url).href,
        name: 'Cerave Hydrating Cleanser 473ml',
        price: 2400,
    },
    {
        banner: 'New',
        link: '#',
        image: new URL('@/assets/img/2.jpeg', import.meta.url).href,
        name: 'La Roche Posay Anthelios Shaka Spray SPF 50+ 200ml',
        price: 4000,
    },
    {
        banner: 'New',
        link: '#',
        image: new URL('@/assets/img/3.jpg', import.meta.url).href,
        name: 'La Roche-Posay Effaclar Foam Cleanser 400ml',
        price: 3895,
    },
    {
        banner: 'New',
        link: '#',
        image: new URL('@/assets/img/4.jpg', import.meta.url).href,
        name: 'Mamalait 250G',
        price: 3835,
    },
    {
        banner: 'New',
        link: '#',
        image: new URL('@/assets/img/5.jpg', import.meta.url).href,
        name: 'Pregnacare Plus',
        price: 2910,
    },
])

const saleProducts = ref<Product[]>([
    {
        banner: '15%',
        link: '#',
        image: new URL('@/assets/img/1.jpg', import.meta.url).href,
        name: 'Cerave Hydrating Cleanser 473ml',
        price: 2400,
    },
    {
        banner: '15%',
        link: '#',
        image: new URL('@/assets/img/2.jpeg', import.meta.url).href,
        name: 'La Roche Posay Anthelios Shaka Spray SPF 50+ 200ml',
        price: 4000,
    },
    {
        banner: '15%',
        link: '#',
        image: new URL('@/assets/img/3.jpg', import.meta.url).href,
        name: 'La Roche-Posay Effaclar Foam Cleanser 400ml',
        price: 3895,
    },
    {
        banner: '15%',
        link: '#',
        image: new URL('@/assets/img/4.jpg', import.meta.url).href,
        name: 'Mamalait 250G',
        price: 3835,
    },
    {
        banner: '15%',
        link: '#',
        image: new URL('@/assets/img/5.jpg', import.meta.url).href,
        name: 'Pregnacare Plus',
        price: 2910,
    },
])
</script>

<template>
    <popup />
    <div class="my-16 space-y-4">
        <h3 class="text-center text-3xl font-medium">Featured Products</h3>
        <ListProducts :products="products" />
    </div>

    <div class="m-auto h-96 w-11/12 rounded-md bg-green-shade-02/50"></div>

    <div class="my-16 space-y-4">
        <h3 class="text-center text-3xl font-medium">New Products</h3>
        <ListProducts :products="newProducts" />
    </div>

    <div class="m-auto flex h-96 w-11/12 justify-between">
        <div class="w-[49%] rounded-md bg-green-shade-02/50"></div>
        <div class="w-[49%] rounded-md bg-green-shade-02/50"></div>
    </div>

    <div class="my-16 space-y-4">
        <h3 class="text-center text-3xl font-medium">On Sale Now</h3>
        <ListProducts :products="saleProducts" />
    </div>
</template>
