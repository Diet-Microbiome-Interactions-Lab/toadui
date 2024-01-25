<script lang="ts">
    import { Fileupload, Helper, Label, Listgroup, ListgroupItem, Select } from 'flowbite-svelte';

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


    export async function get(): Promise<any> {
		const uri = "http://127.0.0.1:5000/functions/test";
		console.log(`Get calling: ${uri}`);
		const req = await fetch(uri, {
			method: "GET",
		});

		if (req.ok) {
			const response = await req.json();
			console.log(`Get loaded data ${JSON.stringify(response)}`);
			formdata = response;
			return response;
		} else {
			console.log(`Get failed to fetch ${uri}`);
			throw new Error("Sorry homie");
		}
	}
    // let files;
    export let formdata = {};
    let selected;
    let pipelines = [
        {value: 'default', name: 'Default'},
        {value: 'extended', name: 'Extended'},
        {value: 'dmil', name: 'Custom-DMIL'},
        {value: 'enders', name: 'Custom-Enders'},
        ]
</script>


<main>
<div class="grid grid-cols-flex gap-6">
    <form on:submit|preventDefault={get}>
        <fieldset class="fieldset">
            <legend >Ingest Data</legend>
            <div class="col-span-2">
                <legend class="text-green-600">Seq Data</legend>
                <label class="block">
                    <span class="block text-red-600">Batch Name</span>
                    <input class="block input text-black/60" type="text" id="lab" name="lab" value="" />
                </label>
                <label class="block">
                    <span class="block text-green-600">Source</span>
                    <select class="block input text-black/60" type="text" id="project" name="project" value="microbiome" />
                </label>
            </div>

            <div class="col-span-2">
                <legend class="text-green-600">Processing</legend>
                <!-- <label class="block">
                    <span class="block text-white">Pipeline</span>
                    <input class="block input text-black/60" type="text" id="lab" name="lab" value="" />
                </label> -->
                <Label class="text-white font-extrabold">
                    Pipeline
                    <Select class="mt-2" items={pipelines} bind:value={selected} size="lg"/>
                  </Label>
                <label class="block">
                    <span class="block text-green-600">Source</span>
                    <input class="block input text-black/60" type="text" id="project" name="project" value="microbiome" />
                </label>
            </div>

            <div class="col-span-2">
                <legend>Metadata</legend>
                <label class="block">
                    <span class="block text-green-600">Lab</span>
                    <input class="block input text-black/60" type="text" id="lab" name="lab" value="lindemann" />
                </label>
                <label class="block">
                    <span class="block text-green-600">Project</span>
                    <input class="block input text-black/60" type="text" id="project" name="project" value="nigms" />
                </label>
                <label class="block">
                    <span class="block text-green-600">Project Period</span>
                    <input class="block input text-black/60" type="text" id="project" name="project" value="spring 2024" />
                </label>
                <label class="block">
                    <span class="block text-green-600">User</span>
                    <input class="block input text-black/60" type="text" id="project" name="project" value="ddeemer@purdue.edu" disabled />
                </label>
                <label class="block">
                    <span class="block text-blue-500">Configuration File</span>
                    <input class="block input" type="file"/>
                </label>
            </div>
            </fieldset>

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