<script setup lang="ts">
import { ref } from 'vue'
import { moneyFormatter } from '@/helpers'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import type { Product } from '@/types'
import ListProducts from '@/components/ListProducts.vue'

const quantity = ref(1)
const product = ref({
    banner: '15%',
    link: '#',
    image: new URL('@/assets/img/2.jpeg', import.meta.url).href,
    name: 'La Roche Posay Anthelios Shaka Spray SPF 50+ 200ml',
    price: 4000,
})
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
</script>

<template>
    <section class="container mx-auto my-12">
        <div id="med_cta" class="flex flex-col gap-8 md:flex-row">
            <div class="aspect-[1.5] w-1/3 rounded-md border text-center">
                <img
                    :src="product.image"
                    :alt="product.name"
                    class="mx-auto size-full object-contain"
                />
            </div>
            <div>
                <div>
                    <p class="text-xs text-gray-shade-01">
                        <a class="underline" href="#">All</a> >
                        <a class="underline" href="#">Beauty Products</a>
                        > {{ product.name }}
                    </p>
                    <p
                        class="my-5 text-xl font-medium text-black-01 2xl:my-8 2xl:text-2xl"
                    >
                        {{ product.name }}
                    </p>
                    <p class="text-lg text-black-01">
                        Kshs {{ moneyFormatter(product.price) }}.00
                    </p>
                </div>

                <div class="mt-12 space-y-8">
                    <h4 class="text-lg font-semibold text-black-01">
                        Quantity
                    </h4>
                    <div class="flex">
                        <button
                            class="rounded-l-md border px-4 text-xl text-gray-500 duration-300"
                            @click="quantity++"
                        >
                            +
                        </button>
                        <input
                            v-model="quantity"
                            class="w-14 border px-2 py-0.5 text-center text-gray-500"
                            type="text"
                            name="quantity"
                            id="quantity"
                            @blur="quantity >= 1 ? quantity : (quantity = 1)"
                        />
                        <button
                            class="rounded-r-md border px-4 text-xl text-gray-500 duration-300"
                            @click="quantity > 1 && quantity--"
                        >
                            -
                        </button>
                    </div>
                    <div class="flex gap-8">
                        <button
                            class="flex w-full items-center justify-center space-x-2 rounded bg-green-shade-01 px-4 py-2 align-middle text-white hover:bg-green-shade-01/85"
                        >
                            <ShoppingCartIcon class="size-4" />
                            <span>Add to Cart</span>
                        </button>
                        <button
                            class="flex w-full items-center justify-center space-x-2 rounded bg-green-shade-01 px-4 py-2 align-middle text-white hover:bg-green-shade-01/85"
                        >
                            <HeartIcon class="size-4" />
                            <span>Add to Wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="med_details" class="mt-16 space-y-8">
            <h1 class="text-3xl font-bold uppercase">Details</h1>
            <article class="space-y-2">
                <h1 class="text-2xl font-semibold uppercase">Description</h1>
                <p>
                    Cleansing foaming gel for senstive oily to acne prone skin.
                    Gently purifies the skin, eliminates impurities and sebum
                    (oil), without over-drying the skin. Leaving the skin clean
                    and fresh. Contains soothing La Roche-Posay Thermal Water
                </p>
            </article>
            <article class="space-y-2">
                <h1 class="text-2xl font-semibold uppercase">How To Use</h1>
                <p>
                    Use every morning and evening. Wet your hands, then take a
                    small amount of gel and work up a lather. Apply to face,
                    massaging gently. Rinse thoroughly with water.
                </p>
            </article>
            <article class="space-y-2">
                <h1 class="text-2xl font-semibold uppercase">Ingredients</h1>
                <p>
                    Aqua/ Water Sodium Lureth Sulfate Peg-8 Coco-Betaine
                    Hexylene Glycol Sodium ChloridePeg-120 Methyl Glucose
                    Dioleate Zinc Pca Sodium Hydroxide CAprylyl Glycol Citric
                    Acid Sodium Benzoate PhenoxyethanolParfum/ Fragrance
                </p>
            </article>
        </div>

        <div id="recommendations" class="mt-20 space-y-8">
            <h1 class="text-semibold text-center text-3xl capitalize">
                You Might Also Like
            </h1>
            <ListProducts :products="products" />
        </div>
    </section>
</template>
