<script>
    import { Fileupload, Helper, Label, Listgroup, ListgroupItem } from 'flowbite-svelte';
    let files;
</script>

<div class="form">
	<fieldset class="fieldset">
		<legend>Ingest Data</legend>
		<label class="block">
            <span class="block">Lab</span>
            <input class="block input"/>
        </label>
        <label class="block">
            <span class="block">Project</span>
            <input class="block input"/>
        </label>
        <!-- <label class="block">
            <span class="block">Lab</span>
            <input class="block input" type="file"/>
        </label> -->

        <Label class="pb-2" for="multiple_files">Upload Fasta Files</Label>
        <Fileupload id="multiple_files" multiple bind:files />
        <Helper>FA, FNA, FASTA, FA.GZ, FNA.GZ, FASTA.GZ</Helper>
        <Listgroup items={files} let:item class="mt-2">
            {#if item}
            {item.name}
            {:else}
            <ListgroupItem>No files</ListgroupItem>
            {/if}
        </Listgroup>
    </fieldset>
</div>


<style>
	.fieldset > * {
		display: block;
	}
	
	.fieldset > :global(:not(legend) + *) {
		margin-top: 16px;
	}
	
	.fieldset {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 20px;
	}
    legend {
        margin:0 auto;
        font-size: xx-large;
        color: rgb(199, 26, 199);
    }
</style>