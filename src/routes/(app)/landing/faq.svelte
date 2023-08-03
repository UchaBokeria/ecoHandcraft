<script lang="ts">
    let selected = 0
</script>

<section class="py-10  bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
        </div>

        <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" on:click={() => selected = 0}>
                    <span class="flex text-lg font-semibold text-black"> What materials are used in your products? </span>

                    <svg class={`${selected === 0 ? 'rotate-180' : '' }w-6 h-6 text-gray-400`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div class:hidden={selected !== 0} class="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Our products are handcrafted using a variety of eco-friendly materials. We source our materials responsibly, ensuring they have minimal impact on the environment</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" on:click={() => selected = 1}>
                    <span class="flex text-lg font-semibold text-black"> Where are your products made? </span>

                    <svg class={`${selected === 1 ? 'rotate-180' : '' }w-6 h-6 text-gray-400`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div class:hidden={selected !== 1} class="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>AAll of our products are handcrafted with love and care in our own workshop. Our skilled artisans pour their passion and expertise into every piece they create</p>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <div class="">
                    <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" on:click={() => selected = 2}>
                        <span class="flex text-lg font-semibold text-black"> How do I care for my purchased items? </span>

                        <svg class={`${selected === 2 ? 'rotate-180' : '' }w-6 h-6 text-gray-400`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div class:hidden={selected !== 2} class="px-4 pb-5 sm:px-6 sm:pb-6">
                        <p>While each product may have specific care instructions, most of our items can be gently cleaned with a damp cloth. For any specific product-related queries, feel free to contact us</p>
                    </div>
                </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" on:click={() => selected = 3}>
                    <span class="flex text-lg font-semibold text-black">Do you offer international shipping? </span>

                    <svg class={`${selected === 3 ? 'rotate-180' : '' }w-6 h-6 text-gray-400`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div class:hidden={selected !== 3} class="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Yes, we are pleased to offer international shipping. Please note, international customers are responsible for any customs and import taxes that may apply.</p>
                </div>
            </div>
        </div>

        <p class="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="/contact" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
    </div>
</section>
