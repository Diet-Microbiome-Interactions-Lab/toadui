<script>
	import viz_example from './example.png';
</script>

<div>
	<div class="font-bold text-2xl mb-4">Visualize data</div>
	<div class="opacity-80 mb-4">
		This is the page where you can interactively plot the results of your query. It'll most likely
		contain draggable or otherwise defineable ways to change X- and Y-axes as well as other common
		aesthetics (color, facets, shape, type, etc.)
	</div>
	<div class="mb-2 text-sm uppercase text-white/60">Viz controller:</div>
	<div class="bg-zinc-800 rounded-md mb-4 h-auto font-mono p-4">
		<div>---</div>
		<div><span class="text-blue-400">Type</span>: Bar</div>
		<div><span class="text-blue-400">X</span>: Sample</div>
		<div><span class="text-blue-400">Y</span>: Percent</div>
		<div><span class="text-blue-400">Color</span> Starch Type</div>
		<div><span class="text-blue-400">aes.title</span>: "Average Digestible (DS) and Resistant Starch (RS)"</div>
		<div><span class="text-blue-400">aes.x_title</span>: "Sample"</div>
		<div><span class="text-blue-400">aes.y_title</span>: "Percent Starch"</div>
		<!-- <div><span class="text-blue-400">export const</span> config = &#123;</div> -->
		<!-- <div class="ml-8">runtime: <span class="text-orange-500">'edge'</span></div>
		<div>&#125;;</div> -->
	</div>
	<div class="mb-2 text-sm uppercase text-white/60">OUTPUT BOX</div>
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">OUTPUT BOX</div>
		<div class="text-2xl">
			<img alt="Svelte logo" src={viz_example} class="w-200 h-200 mr-2" />
		</div>
	</div>
</div>
