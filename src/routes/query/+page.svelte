<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<div class="font-bold text-2xl mb-4">Query data</div>
	<div class="opacity-80 mb-4">
		This page is like a playground for searching and interacting with the database. Before exporting
		large amounts of data to a file, work on different queries and determine if you need to prune your
		data or make any changes to your query that will write a file output. Here is where you can also parse
		the results and look at them more closely in an interactive way.
	</div>
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">QUERY BOX</div>
		<div class="text-2xl">
			QUERY BOX
		</div>
	</div>
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">OUTPUT BOX</div>
		<div class="text-2xl">
			OUTPUT BOX
		</div>
	</div>
</div>
