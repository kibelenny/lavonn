<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'
import { ref } from 'vue'
import type { Product } from '@/types'
import SingleProduct from '@/components/SingleProduct.vue'

const selectedFilter = ref({
    sortBy: 'Popular',
    minPrice: '0',
    maxPrice: '1000000',
})

//TODO: Add to Store
const sortFilters = [
    {
        name: 'Popular',
        value: 'popular',
    },
    {
        name: 'Price: Low to High',
        value: 'price_asc',
    },
    {
        name: 'Price: High to Low',
        value: 'price_desc',
    },
]

const conditions = [
    'aches and pains',
    'stomach upsets',
    'beauty products',
    'vitamins and supplements',
    'over the counter',
    'sedatives',
    'Stimulants',
    'supplements',
]

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
//End Store
</script>

<template>
    <section class="container mx-auto py-4">
        <div id="title" class="my-4">
            <h2 class="text-lg font-medium lg:text-xl">Aches & Pains</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 2xl:grid-cols-5">
            <div class="col-span-1">
                <div id="filters" class="space-y-4">
                    <Listbox v-model="selectedFilter.sortBy" v-slot="{ open }">
                        <ListboxButton
                            class="border-1 flex w-full justify-between rounded-md border-b border-gray-shade-01 px-3 py-2 text-gray-shade-01"
                            ><span>Sort By {{ selectedFilter.sortBy }}</span>
                            <span>
                                <ChevronDownIcon
                                    class="h-4 w-4 duration-200"
                                    :class="open ? 'rotate-180' : ''"
                                /> </span
                        ></ListboxButton>
                        <ListboxOptions
                            class="my-1 rounded bg-gray-50 py-2 text-gray-shade-01"
                        >
                            <ListboxOption
                                class="px-4 py-1 hover:cursor-pointer hover:bg-gray-100"
                                v-for="(option, idx) in sortFilters"
                                :key="idx"
                                :value="option.name"
                            >
                                {{ option.name }}
                            </ListboxOption>
                        </ListboxOptions>
                    </Listbox>
                    <div
                        id="price_range"
                        class="border-1 border-b border-gray-shade-01 py-5 text-center"
                    >
                        <h2 class="mb-4 px-3 text-left">Price Range</h2>
                        <input
                            v-model="selectedFilter.minPrice"
                            class="max-w-24 rounded-md border px-2 py-0.5 text-center text-gray-500"
                            type="text"
                            name="quantity"
                            id="quantity"
                        />
                        <span> - </span>
                        <input
                            v-model="selectedFilter.maxPrice"
                            class="max-w-24 rounded-md border px-2 py-0.5 text-center text-gray-500"
                            type="text"
                            name="quantity"
                            id="quantity"
                        />
                    </div>
                    <div>
                        <h2 class="mb-4 px-3 text-left">Conditions</h2>
                        <div class="mt-4 h-80 overflow-x-auto bg-gray-50">
                            <ul class="space-y-2 px-2 py-2 text-gray-shade-01">
                                <li
                                    v-for="(condition, idx) in conditions"
                                    :key="idx"
                                    class="border-b border-b-gray-400 px-2 py-2"
                                >
                                    {{ condition }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-4 flex flex-wrap">
                <SingleProduct
                    v-for="(product, idx) in products"
                    :key="idx"
                    :product="product"
                    class="w-1/4"
                />
            </div>
        </div>
    </section>
</template>
