<script>
    import Tags from "svelte-tags-input";
    let dtags = [];
	let etags = [];
</script>

<div class="text-2xl item2">
    <div class="mb-2 text-sm uppercase text-white/60">Tag Environments</div>
    <div class="mb-2 text-sm uppercase text-black/60">
    <Tags
        bind:tags={etags}
        addKeys={[9]}
        autoComplete={environments}
        readonly={false}
    />
    </div>
</div>