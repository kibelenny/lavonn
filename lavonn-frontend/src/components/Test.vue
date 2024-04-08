<script setup lang="ts">
import { ref } from 'vue'

const priceRange = ref<[number, number]>([10, 1000])
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <header class="bg-teal-500 py-4">
            <div
                class="container mx-auto flex items-center justify-between px-4"
            >
                <h1 class="text-xl font-bold text-white">Logoipsum</h1>
                <div class="flex items-center">
                    <input
                        class="rounded-l-md border-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        type="text"
                        placeholder="Search Here"
                    />
                    <button
                        class="flex items-center justify-center rounded-r-md bg-white px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                    >
                        <svg
                            class="h-5 w-5 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div class="ml-4 flex items-center">
                        <a
                            href="#"
                            class="mr-4 text-white transition-colors duration-300 hover:text-gray-300"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="mr-4 text-white transition-colors duration-300 hover:text-gray-300"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="text-white transition-colors duration-300 hover:text-gray-300"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="relative ml-4">
                        <button
                            class="flex items-center rounded-full bg-white px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                        >
                            <svg
                                class="h-5 w-5 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div
                            class="absolute right-0 mt-2 hidden w-48 rounded-md bg-white py-2 shadow-lg"
                        >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100"
                                >Profile</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100"
                                >Settings</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100"
                                >Logout</a
                            >
                        </div>
                    </div>
                    <div class="relative ml-4">
                        <button
                            class="flex items-center rounded-full bg-white px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                        >
                            <svg
                                class="h-5 w-5 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                />
                            </svg>
                            <span class="ml-2 font-bold text-gray-600">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <nav class="bg-teal-600 py-2">
            <div class="container mx-auto flex justify-between px-4">
                <ul class="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            class="text-white transition-colors duration-300 hover:text-gray-300"
                            >Shop By Category</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white transition-colors duration-300 hover:text-gray-300"
                            >Shop By Condition</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white transition-colors duration-300 hover:text-gray-300"
                            >Special Offers</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white transition-colors duration-300 hover:text-gray-300"
                            >Over The Counter</a
                        >
                    </li>
                </ul>
            </div>
        </nav>

        <main class="container mx-auto px-4 py-8">
            <h2 class="mb-4 text-2xl font-bold">Aches &amp; Pains</h2>
            <div class="-mx-2 flex flex-wrap"></div>
            <div>
                <div class="mb-4">
                    <span class="font-semibold">Sort By Popular</span>
                    <select
                        class="ml-2 rounded border border-gray-300 px-2 py-1"
                    >
                        <option>Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
                <div class="mb-4">
                    <span class="font-semibold">Price Range</span>
                    <div class="mt-2 flex items-center">
                        <input
                            v-model.number="priceRange[0]"
                            type="number"
                            min="10"
                            max="1000"
                            class="mr-2 w-20 rounded border border-gray-300 px-2 py-1"
                        />
                        <span>-</span>
                        <input
                            v-model.number="priceRange[1]"
                            type="number"
                            min="10"
                            max="1000"
                            class="ml-2 w-20 rounded border border-gray-300 px-2 py-1"
                        />
                    </div>
                </div>
                <div>
                    <span class="font-semibold">Conditions</span>
                    <div class="mt-2">
                        <div class="mb-2 flex items-center">
                            <input
                                type="checkbox"
                                id="aches-pains"
                                class="mr-2"
                            />
                            <label for="aches-pains">Aches &amp; Pains</label>
                        </div>
                        <div class="mb-2 flex items-center">
                            <input
                                type="checkbox"
                                id="stomach-upsets"
                                class="mr-2"
                            />
                            <label for="stomach-upsets">Stomach Upsets</label>
                        </div>
                        <div class="mb-2 flex items-center">
                            <input
                                type="checkbox"
                                id="beauty-products"
                                class="mr-2"
                            />
                            <label for="beauty-products">Beauty Products</label>
                        </div>
                        <div class="mb-2 flex items-center">
                            <input
                                type="checkbox"
                                id="vitamins-supplements"
                                class="mr-2"
                            />
                            <label for="vitamins-supplements"
                                >Vitamins &amp; Supplements</label
                            >
                        </div>
                        <div class="mb-2 flex items-center">
                            <input
                                type="checkbox"
                                id="over-the-counter"
                                class="mr-2"
                            />
                            <label for="over-the-counter"
                                >Over The Counter</label
                            >
                        </div>
                        <div class="flex items-center">
                            <input
                                type="checkbox"
                                id="sedatives"
                                class="mr-2"
                            />
                            <label for="sedatives">Sedatives</label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
