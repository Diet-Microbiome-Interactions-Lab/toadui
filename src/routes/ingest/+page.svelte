<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">DB_Info:</div>
		<div class="text-2xl">
			db: test; collection: test; uri: test;
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
</style>