<script lang="ts">
    export let queryResults = [];
</script>

<div>
    {#each queryResults as result}
        <div>
            {JSON.stringify(result)}
        </div>
    {/each}
</div>