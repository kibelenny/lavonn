<script setup lang="ts">
import SingleProduct from '@/components/SingleProduct.vue'
import type { Product } from '@/types'
defineProps<{
    products: Product[]
}>()
</script>

<template>
    <div class="container mx-auto flex w-9/12 space-x-1">
        <SingleProduct
            v-for="(product, idx) in products"
            :key="idx"
            :product="product"
            class="w-1/5"
        />
    </div>
</template>
