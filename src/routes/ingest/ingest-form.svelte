<script lang="ts">
    import { Fileupload, Helper, Label, Listgroup, ListgroupItem } from 'flowbite-svelte';

    function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        formdata = data
        console.log(data)
    }

    // let files;
    export let formdata = {};
</script>

<main>
<div class="form">
    <form on:submit|preventDefault={onSubmit}>
        <fieldset class="fieldset">
            <legend>Ingest Data</legend>
            <label class="block">
                <span class="block">Lab</span>
                <input class="block input text-black/60" type="text" id="lab" name="lab" value="CHANGEME" />
            </label>
            <label class="block">
                <span class="block">Project</span>
                <input class="block input text-black/60" type="text" id="project" name="project" value="CHANGEME" />
            </label>
            <!-- <label class="block">
                <span class="block">Lab</span>
                <input class="block input" type="file"/>
            </label> -->

            <!-- <Label class="pb-2" for="multiple_files">Upload Fasta Files</Label>
            <Fileupload id="multiple_files" multiple bind:files />
            <Helper>FA, FNA, FASTA, FA.GZ, FNA.GZ, FASTA.GZ</Helper>
            <Listgroup items={files} let:item class="mt-2">
                {#if item}
                {item.name}
                {:else}
                <ListgroupItem>No files</ListgroupItem>
                {/if}
            </Listgroup> -->
            <button on:click={() => console.log('Clicked!')} type="submit" class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Query
            </button>
        </fieldset>
    </form>
</div>
</main>

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