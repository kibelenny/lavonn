<script setup lang="ts">
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
    <section class="container mx-auto py-8">
        <div class="flex justify-between">
            <div>
                <router-link to="/" class="flex h-full align-middle">
                    <img src="@/assets/img/logo.svg" alt="Logo" />
                </router-link>
            </div>

            <div class="flex w-1/2 justify-center align-middle 2xl:w-2/5">
                <input
                    type="text"
                    name="search"
                    id="search"
                    class="w-2/3 rounded-l-3xl border-2 border-green-shade-01 bg-white px-4 py-2 2xl:text-lg"
                    placeholder="Search"
                />
                <button
                    class="flex w-1/4 items-center justify-center space-x-2 rounded-r-3xl bg-green-shade-01 font-medium text-white 2xl:text-lg"
                >
                    <MagnifyingGlassIcon class="h-4 w-4" />
                    <span> Search </span>
                </button>
            </div>

            <div class="flex items-center justify-end space-x-4">
                <UserIcon class="h-6 w-6" />
                <div class="flex items-center space-x-1.5">
                    <ShoppingCartIcon class="h-6 w-6" />
                    <span
                        class="rounded-3xl bg-green-shade-01 px-1.5 py-0.5 text-xs text-white"
                        >0</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>
