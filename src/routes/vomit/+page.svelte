<script lang="ts">
	import QueryForm from "./QueryForm.svelte";
</script>

<div class="font-bold text-2xl mb-4">Vomit data from the database</div>
	<div class="opacity-80 mb-4">
		This is the vomit tab, where you can emit table from the database into the format of your choice.
		Toads are quite similar to humans in that they vomit when they eat something distressing to the
		stomach. But if it has eaten something poisonous it has the ability to vomit its entire stomach.
		Choose the <span class="text-blue-400">Vomit Stomach</span> option to grab the entire database. But
		be <span class="text-red-400">CAUTIOUS</span>, as the database is big.
		<a
			class="text-blue-400 hover:text-blue-400"
			href="https://vercel.com/docs/concepts/functions/edge-functions"
			target="_blank">here</a
		>.
	</div>
	<div class="opacity-80 mb-4">
		Below are the possible file formats to export your data in:
	</div>
	<div class="font-bold text-2xl mb-4 center text-green-600">Export Formats</div>
	<div class="opacity-80 mb-4 grid-cols-2 grid">
		<div>
		<ul> Non-Compressed
			<li>CSV-delimited</li>
			<li>JSON</li>
			<li>YAML</li>
			<li>TAB-delimited</li>
			<li>XLSX</li>
		</ul>
		</div>
		<div>
			<ul> Compressed
				<li>BSON</li>
				<li>*.gz</li>
				<li>*.zip</li>
			</ul>
		</div>
</div>

<QueryForm />

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