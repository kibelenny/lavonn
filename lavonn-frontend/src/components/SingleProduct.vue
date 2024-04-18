<script setup lang="ts">
import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import type { Product } from '@/types'
import { moneyFormatter } from '@/helpers'

defineProps<{ product: Product }>()

const icons = ref([HeartIcon, ShoppingCartIcon])
</script>

<template>
    <div
        class="group relative my-4 space-y-4 rounded-lg border border-transparent p-4 duration-300 hover:cursor-pointer hover:border-gray-300"
    >
        <div
            class="hidden rounded-full text-white duration-300 hover:cursor-pointer hover:bg-green-shade-01/80 group-hover:block"
        >
            <EyeIcon
                class="absolute h-5 w-5 rounded-full bg-green-shade-01 p-0.5 ring-green-shade-01/40 duration-200 hover:ring-4"
            />
        </div>
        <div
            class="absolute right-0 top-0 rounded-full text-white duration-300 hover:cursor-pointer hover:bg-green-shade-01/80"
        >
            <div
                v-if="product.banner"
                class="rounded bg-banner-red px-1 py-1 group-hover:rounded-r-none"
            >
                <h4 class="text-xs">{{ product.banner }}</h4>
            </div>
        </div>
        <div class="flex h-2/3 justify-center">
            <img :src="product.image" alt="medicine" class="aspect-auto" />
        </div>
        <div class="space-y-1">
            <p
                class="w-11/12 overflow-hidden overflow-ellipsis whitespace-nowrap 2xl:text-sm"
            >
                {{ product.name }}
            </p>
            <p class="2xl:text-sm">Kshs {{ moneyFormatter(product.price) }}</p>
        </div>
        <div class="flex justify-between opacity-0 group-hover:opacity-100">
            <div
                class="rounded-full bg-green-shade-01 p-1 text-white ring-green-shade-01/40 duration-200 duration-300 hover:cursor-pointer hover:ring-4"
                v-for="(icon, idx) in icons"
                :key="idx"
            >
                <component :is="icon" class="h-4 w-4" />
            </div>
        </div>
    </div>
</template>
