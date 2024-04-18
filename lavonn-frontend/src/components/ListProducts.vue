<script setup lang="ts">
import SingleProduct from '@/components/SingleProduct.vue'
import type { Product } from '@/types'
defineProps<{
    products: Product[]
    width?: string
}>()
</script>

<template>
    <div
        class="container mx-auto flex snap-x space-x-1 overflow-x-scroll lg:w-9/12"
    >
        <SingleProduct
            class="snap-center scroll-smooth"
            v-for="(product, idx) in products"
            :key="idx"
            :product="product"
            :class="width ? width : 'min-w-[11/12] lg:w-1/5'"
        />
    </div>
</template>
