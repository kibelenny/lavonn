<template>
    <div class="container mx-auto px-4 py-8">
        <div class="mb-8 flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-800">Logoipsum</h1>
            <div class="flex items-center">
                <input
                    type="text"
                    class="mr-2 rounded-md border border-gray-300 px-4 py-2"
                    placeholder="Search Here"
                />
                <button
                    class="rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                    Search (Q)
                </button>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-4">
            <div class="rounded-md bg-gray-100 p-4">
                <h3 class="mb-2 font-bold text-gray-800">Shop By Category</h3>
                <ul class="list-disc space-y-2">
                    <li>Shop By Category</li>
                    <li>Shop By Condition</li>
                </ul>
            </div>
            <div class="rounded-md bg-gray-100 p-4">
                <h3 class="mb-2 font-bold text-gray-800">Special Offers</h3>
                <p class="text-gray-600">
                    Find the best deals on your favorite products.
                </p>
            </div>
            <div class="rounded-md bg-gray-100 p-4">
                <h3 class="mb-2 font-bold text-gray-800">Over The Counter</h3>
                <p class="text-gray-600">
                    Non-prescription medications for common ailments.
                </p>
            </div>
            <div class="rounded-md bg-gray-100 p-4">
                <h3 class="mb-2 font-bold text-gray-800">Sedatives</h3>
                <p class="text-gray-600">
                    Prescription medications that help you sleep.
                </p>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">Aches & Pains</h2>

            <div class="mb-4 flex items-center justify-between">
                <p>Sort By:</p>
                <select class="rounded-md border border-gray-300 px-4 py-2">
                    <option>Popular</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                </select>
            </div>

            <div class="mb-4 flex items-center justify-between">
                <p>Price Range:</p>
                <div class="flex items-center">
                    <input
                        type="number"
                        class="mr-2 rounded-md border border-gray-300 px-2 py-1"
                        min="10"
                        max="1000"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        class="ml-2 rounded-md border border-gray-300 px-2 py-1"
                        min="10"
                        max="1000"
                    />
                </div>
            </div>

            <div class="flex flex-col space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-md bg-gray-100 p-4 shadow-md">
                        <h4 class="mb-2 font-bold text-gray-800">
                            La Roche Posay Anthelios
                        </h4>
                        <p class="text-gray-600">
                            SPF 50+ sunscreen for sensitive skin.
                        </p>
                        <p class="font-bold text-blue-500">Kshs 4,000</p>
                    </div>
                    <div class="rounded-md bg-gray-100 p-4 shadow-md">
                        <h4 class="mb-2 font-bold text-gray-800">
                            La Roche Posay Anthelios
                        </h4>
                        <p class="text-gray-600"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
