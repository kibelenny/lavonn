<script setup lang="ts">
import { ref } from 'vue'
import { moneyFormatter } from '@/helpers'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const visible = ref(true)
const product = ref({
    banner: '15%',
    link: '#',
    image: new URL('@/assets/img/1.jpg', import.meta.url).href,
    name: 'Cerave Hydrating Cleanser 473ml',
    price: 2400,
})

const quantity = ref(1)
</script>

<template>
    <div class="relative z-10" v-if="visible">
        <!--        Overlay-->
        <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75 blur transition-opacity"
        ></div>

        <!--        Content-->
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg lg:min-w-[50vw]"
                >
                    <div
                        class="absolute right-2 top-2 rounded-full p-0.5 hover:cursor-pointer hover:bg-red-100"
                    >
                        <XMarkIcon
                            class="h-5 w-5 font-bold text-red-400"
                            @click="visible = !visible"
                        />
                    </div>

                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="space-x-2 sm:flex sm:items-start">
                            <!-- content-->
                            <div class="min-w-[50%]">
                                <img :src="product.image" :alt="product.name" />
                            </div>
                            <div class="w-full">
                                <div class="space-y-4 border-b pb-8 pt-4">
                                    <h3
                                        class="text-sm font-light 2xl:text-base"
                                    >
                                        Nivea, BrandName
                                    </h3>
                                    <h2 class="text-lg 2xl:text-xl">
                                        {{ product.name }}
                                    </h2>
                                </div>
                                <div class="my-8">
                                    <h2
                                        class="text-xl text-gray-600 2xl:text-2xl"
                                    >
                                        Kshs {{ moneyFormatter(product.price) }}
                                    </h2>
                                </div>
                                <div class="my-4 space-y-3">
                                    <h2
                                        class="text-lg text-gray-600 2xl:text-xl"
                                    >
                                        Quantity
                                    </h2>
                                    <div class="flex">
                                        <button
                                            class="rounded-l-md bg-sky-200 px-4 text-xl text-gray-500 duration-300 hover:bg-sky-300"
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
                                        />
                                        <button
                                            class="rounded-r-md bg-sky-200 px-4 text-xl text-gray-500 duration-300 hover:bg-sky-300"
                                            @click="quantity > 1 && quantity--"
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                    >
                        <!--                        Actions if any-->
                        test-act
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
