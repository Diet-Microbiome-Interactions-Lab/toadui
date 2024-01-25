<script lang="ts">
    import QueryDisplay from "./QueryDisplay.svelte";
    import { vomit } from "$lib/stores/AmpliconStores";
    import { Label, Select } from "flowbite-svelte";
    import { GET } from "$lib/ApiCaller.js";
	$: myquery = "";
	// let apiUrl = "/amplicon/fastas"
    let apiUrl = "/functions/test"

    // vomit.subscribe(value => console.log(value))
    let queryResults = [];
    $: queryResults;
    $: console.log(`Query Results: ${JSON.stringify(queryResults)}`)

    const handleQuery = e => {
            // Access form field data
            const formData = new FormData(e.target)

            const data = new URLSearchParams()

            for (let field of formData) {
                const [key, value] = field
                if (value != '') {
                    data.append(key, value)
                }
            }
            myquery = `${apiUrl}?${data}`
            GET(myquery).then((getReturn) => {
                queryResults = getReturn.data
                console.log(`Result=${JSON.stringify(getReturn.status)}`)
            })
            // console.log(`Results=${results}`)

            // vomit.set(results.data)
        }
    let outfmt = 'browser'
    let formats = [
        { value: 'browser', name: 'Browser'},
        { value: 'csv', name: 'CSV'},
        { value: 'json', name: 'JSON'},
        { value: 'tab', name: 'Tab'},
        { value: 'xlsx', name: 'XLSX'},
        { value: 'yaml', name: 'YAML'},
    ]
</script>

<div>
	<form on:submit|preventDefault={handleQuery} action="/amplicon/fastas">
		<div>
			<label>
				Type
				<input class="text-black mb-2 ml-11" type="text" name="type_" />
			</label>
		</div>
        <div>
			<label>
				Laboratory
				<input class="text-black mb-2" type="text" name="lab" />
			</label>
		</div>
		<div>
			<label>
				Name
				<input class="text-black mb-2 ml-9" type="text" name="name" />
			</label>
		</div>
		<div>
			<label>
				Sequence
				<input class="text-black mb-2 ml-2" type="text" name="sequence"/>
			</label>
		</div>
        <div class="w-1/2 flex mb-2">
            <Label class="text-green-600 font-extrabold" for="select-lg">
                Output Format
                <Select id="select-lg" size="lg" items={formats} bind:value={outfmt}></Select>
            </Label>
				<!-- <input class="text-black mb-4" type="text" name="sequence"/> -->
		</div>
		<button
			type="submit"
			name="action"
			value="query"
			class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900" >
			Search
		</button>
		<div>
			<p class="text-green-600 mb-2">
				API calls to: {JSON.stringify(myquery)}
			</p>
		</div>
	</form>
</div>

<QueryDisplay {queryResults} />