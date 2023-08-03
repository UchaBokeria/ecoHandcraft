<script lang="ts">
	import { http } from "$lib/shared/http.js";
	import Product from "$lib/components/product/product.svelte";
	import Loading from "$lib/components/loading/loading.svelte";
	import InfiniteScroll from "$lib/components/infiniteScroll/infiniteScroll.svelte";
    
    export let data
    export let stop = false
    export let observable: any[] = data.products
    
    const fetchProducts: any = async () => {
        data.page = data.page + 1
        const { result } = await http.get(`api/products`, { page: data.page })
        if(!result.length) stop = true
        observable = [ ...observable, ...result ]
    }
</script>

<section class="py-10 bg-gray-50 sm:py-16 lg:py-8">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <InfiniteScroll callback={fetchProducts} bind:stop={stop}>
            <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                {#await observable} <Loading /> {:then products}
                        {#if !products?.length} <h3 class="font-bold leading-tight sm:text-3xl lg:text-3xl">Products not found</h3>
                        {:else} {#each products as product} <Product {product} /> {/each} {/if}
                {/await}
            </div>
        </InfiniteScroll>

    </div>
</section>
