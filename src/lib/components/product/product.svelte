<script lang="ts">
	import { goto } from "$app/navigation";
    export let product: any
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overflow-hidden bg-white rounded shadow" on:click={() => goto(`/products/${product.id}`)}>
    <div class="p-5">
        <div class="relative">
            <a href={`/products/${product.id}`} title="" class="block aspect-w-4 aspect-h-3">
                <img class="object-cover w-full h-full" src={ product.icon } alt={ product.title } />
            </a>

            <div class="absolute top-4 left-4">
                <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-[#fefbfb] rounded-full
                text-1xl leading-tight sm:text-xl lg:text-xl"> ${ product.price } </span>
            </div>
        </div>
        <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> { product?.category?.name || "" } </span>
        <p class="mt-5 text-2xl font-semibold">
            <a href={`/products/${product.id}`} title="" class="text-black"> { product.title } </a>
        </p>
        <p class="mt-4 text-base text-gray-600 font-medium truncate"> { product.description } </p>
        <a href={`/products/${product.id}`} title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
            See more
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
    </div>
</div>