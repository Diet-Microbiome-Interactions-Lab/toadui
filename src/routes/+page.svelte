<script>
	import { base } from "$app/paths";
</script>

<div class="flex flex-col min-h-screen">
	<div class="font-bold text-2xl mb-4">
		TOADStool - Tidy Organization & Analysis of Dna
	</div>
	<div class="opacity-80 mb-4">
		Welcome to the ToadStool application developed by the Lindemann Lab and
		Dane. The purpose of this application is to allow researchers to connect
		to Purdue University servers to query large amounts of DNA and receive
		them in various output formats for downstream analysis.
	</div>
	<div class="opacity-80 mb-4">
		In order to use this application as intended, you will need to update
		your own config.yaml file or (not recommended) provide all configuration
		values through the command-line or graphical interface. Your file should
		be labeled as:
		<span class="p-1 bg-zinc-800 rounded-md font-mono text-xs"
			>config.yaml</span
		>:
	</div>
	<div class="bg-zinc-800 rounded-md mb-4 h-auto font-mono p-4">
		<div>---</div>
		<div><span class="text-blue-400">user:</span> "dane"</div>
		<div><span class="text-blue-400">lab:</span> "lindemann"</div>
		<div><span class="text-blue-400">project:</span> "NSF-A110"</div>
		<div><span class="text-blue-400">project_period:</span> 2024</div>
		<!-- <div><span class="text-blue-400">export const</span> config = &#123;</div> -->
		<!-- <div class="ml-8">runtime: <span class="text-orange-500">'edge'</span></div>
		<div>&#125;;</div> -->
	</div>
	<div class="opacity-80 mb-4">
		Below: Boilerplate code block for reference later.
	</div>
	<div class="bg-zinc-800 rounded-md mb-4 h-auto font-mono p-4">
		<div>
			<span class="text-blue-400">export const</span> config = &#123;
		</div>
		<div class="ml-8">isr: &#123;</div>
		<div class="ml-16">
			expiration: <span class="text-emerald-400">10</span>
		</div>
		<div class="ml-8">&#125;;</div>
		<div>&#125;;</div>
	</div>
	<div class="opacity-80">
		<img
			alt="Svelte logo"
			src="{base}/mongoarch.png"
			class="w-200 h-200 mr-2"
		/>
	</div>
</div>
