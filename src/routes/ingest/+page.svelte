<script>
	import Ingest from './ingest-form.svelte'
	import Tags from "svelte-tags-input";
	/** @type {import('./$types').PageData} */
	export let data;
	let dtags = [];
	let etags = [];

	const disciplines = [
		"biology",
		"nutrition",
		"bioengineering"
	]

	const environments = [
		"gut",
		"plant",
		"soil",
		"rhizobiome",
		"oral",
		"vaginal"
	]

</script>
<div>
	<div class="font-bold text-2xl mb-4">Ingest data into the database</div>
	<div class="opacity-80 mb-4">
		This is the route where you add your data to the database. In order to add your data to the database, we need
		to establish a few ground rules. For every ingestion, the following pieces of information are required:
		<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
			<ul>
				<li>Must know who you are (user)</li>
				<li>What laboratory are you a part of (lab)</li>
				<li>What project your sample data is coming from (project)</li>
			</ul>
		</div>
	</div>
	<div class="opacity-80 mb-4">
		The above information can be specified with any combination of the below graphical user interface (GUI) or config.yaml
		file provided. As well as this information, we will also append the following information to each action you take:
	</div>
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">Current Date:</div>
		<div class="text-2xl">
			{data.generatedAt}
		</div>
	</div>
</div>

<Ingest />

<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30 grid-container">
	<div class="text-2xl item1">
		<div class="mb-2 text-sm uppercase text-white/60">Tag Disciplines</div>
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
</div>

<style>
	ul {
		list-style: none;
	}
	ul li::before {
		content: "\2022";
		color: white;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
	}
	.grid-container {
		display: grid;
		column-gap: 10px;
		row-gap: 50px;
	}
	.item1 {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.item2 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 1;
	}
	.item3 {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;
		grid-row-end: 2;
	}
	.item4 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 2;
	}
</style>