<script lang="ts">
    import Footer from '$lib/components/footer.svelte';
    import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
    <title>Eco</title>
</svelte:head>

<Header />

<main class="Main-app"> 
    <slot /> 
</main>

<Footer />