<script lang="ts">
    import { PUBLIC_BACKEND_API_URL } from "$env/static/public";
    import {
        Fileupload,
        Helper,
        Label,
        Listgroup,
        ListgroupItem,
    } from "flowbite-svelte";
    import Tags from "svelte-tags-input";
    export let data;
    let user_dbeUUID = data?.user?.dbeUUID;
    console.log(`User id = ${user_dbeUUID}`);

    async function onSubmit() {
        const formData = new FormData();

        formData.append("project", project);
        formData.append("lab", lab);
        formData.append("userID", user_dbeUUID);
        for (let file of files) {
            formData.append("files[]", file);
        }

        const uri = PUBLIC_BACKEND_API_URL + "/functions/test2";
        const response = await fetch(uri, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("Upload successful");
        } else {
            console.error("Upload failed");
        }
    }

    // console.log(`Data in the child: ${JSON.stringify(data)}`);
    let files = [];
    $: console.log(`Files = ${files}`);
    let lab = data.user.configuration.lab;
    let project = data.user.configuration.project;
    let source = data.user.configuration.source;
    let db = data.user.configuration.db;

    let dtags = [];
    let etags = [];

    const disciplines = ["biology", "nutrition", "bioengineering"];

    const environments = [
        "gut",
        "plant",
        "soil",
        "rhizobiome",
        "oral",
        "vaginal",
    ];
</script>

<main>
    <div class="form">
        <form on:submit|preventDefault={onSubmit}>
            <fieldset class="fieldset">
                <legend>Ingest Data</legend>
                <Label class="text-yellow-500 text-lg"
                    >Metadata Attributes</Label
                >
                <div class="grid-container">
                    <div class="item1">
                        <label class="block">
                            <span class="block">Lab</span>
                            <input
                                class="block input text-black/60"
                                type="text"
                                id="lab"
                                name="lab"
                                bind:value={lab}
                            />
                        </label>
                        <label class="block">
                            <span class="block">Project</span>
                            <input
                                class="block input text-black/60"
                                type="text"
                                id="project"
                                name="project"
                                bind:value={project}
                            />
                        </label>
                    </div>
                    <div class="item2">
                        <label class="block">
                            <span class="block">Source</span>
                            <input
                                class="block input text-black/60"
                                type="text"
                                id="source"
                                name="source"
                                bind:value={source}
                            />
                        </label>
                        <label class="block">
                            <span class="block">Database</span>
                            <input
                                class="block input text-black/60"
                                type="text"
                                id="db"
                                name="db"
                                disabled
                                bind:value={db}
                            />
                        </label>
                    </div>
                </div>

                <hr class="h-2 my-8 bg-gray-500 border-0" />

                <Label class="text-red-600 text-lg mt-2" for="one_file"
                    >Config file (overides defaults)</Label
                >
                <Fileupload id="one_file" class="text-white" />
                <Helper class="text-white" for="one_file"
                    >(.JSON, .YAML)<a
                        href="/examples/configexamples"
                        class="ml-2 text-blue-600 underline">Examples</a
                    ></Helper
                >

                <hr class="h-2 my-8 bg-gray-500 border-0" />

                <Label class="text-green-600 text-lg mt-2" for="multiple_files"
                    >Upload Fasta Files</Label
                >
                <Fileupload
                    id="multiple_files"
                    class="text-white"
                    multiple
                    on:change={(event) => (files = [...event.target.files])}
                />
                <Helper class="text-white" for="multiple_files"
                    >(.FA, .FNA, .FASTA, .FA.GZ, .FNA.GZ, .FASTA.GZ)
                    <a
                        href="/examples/ingestexamples"
                        class="ml-2 text-blue-600 underline">Examples</a
                    >
                </Helper>
                <Listgroup items={files} let:item class="mt-2">
                    {#if item}
                        {item.name}
                    {:else}
                        <ListgroupItem>No files</ListgroupItem>
                    {/if}
                </Listgroup>
                <button
                    type="submit"
                    class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Ingest
                </button>
                <!-- Tags -->
                <div
                    class="bg-zinc-900/60 rounded-md p-6 shadow-md shadow-zinc-700/30 grid-container"
                >
                    <div class="text-2xl item1">
                        <div class="mb-2 text-sm uppercase text-white/60">
                            Tag Disciplines
                        </div>
                        <div class="mb-2 text-sm uppercase text-black/60">
                            <Tags
                                bind:tags={dtags}
                                addKeys={[9]}
                                autoComplete={disciplines}
                                readonly={false}
                            />
                        </div>
                    </div>
                    <div class="text-2xl item2">
                        <div class="mb-2 text-sm uppercase text-white/60">
                            Tag Environments
                        </div>
                        <div class="mb-2 text-sm uppercase text-black/60">
                            <Tags
                                bind:tags={etags}
                                addKeys={[9]}
                                autoComplete={environments}
                                readonly={false}
                            />
                        </div>
                    </div>
                </div>
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
        margin: 0 auto;
        font-size: xx-large;
        color: rgb(199, 26, 199);
    }

    .grid-container {
        display: grid;
        column-gap: 10px;
        row-gap: 0px;
    }
    .item1 {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .item2 {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }
</style>
