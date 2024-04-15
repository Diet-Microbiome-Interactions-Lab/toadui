<script>
    import Config from "$lib/components/config.svelte";
    export let data;
    let user = data.user;
    $: user;
</script>

<Config bind:user />
