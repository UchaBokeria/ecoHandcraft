<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import Loading from "../loading/loading.svelte";
    export let loading:any = false
    export let callback:any = () => {}
    export let name:any = ''
    
    let observer:any
    let prevRatio = 0;
    let loadinging = false
    export let stop = false
    
    onMount(() => {
        observer = new IntersectionObserver(async (entries, o) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    prevRatio = entry.intersectionRatio;
                    if(entry.intersectionRatio >= prevRatio && stop != true) {
                        loadinging = true
                        if(callback.constructor.name === "AsyncFunction") await callback(entry)
                        else callback(entry)
                        loadinging = false
                        prevRatio = entry.intersectionRatio;
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(document.querySelector(`.infinite-scroll-anchor-${name}`));
    });
    
    // onDestroy(() => observer.disconnect());
</script>

<div class={`infinite-scroll infinite-scroll-${name} w-full min-h-screen relative`}>
    {#if loading && loadinging} <Loading /> {:else} <slot /> {/if}
    <div class={`infinite-scroll-anchor infinite-scroll-anchor-${name} absolute bottom-0`}></div>
</div>