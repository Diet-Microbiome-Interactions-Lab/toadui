<script>
	import logo from './toad.svg';
	import mushroom from './mushroom.png';
</script>

<div
	class="max-w-4xl mx-auto w-full flex md:flex-row flex-col items-center md:justify-between py-8 mb-12 border-b border-white/20"
>
	<a href="/" class="flex items-center mb-4 md:mb-0 text-white" aria-label="Home">
		<img alt="Toad Logo" src={logo} class="w-10 h-10 mr-2" />TOAD
	</a>
	<a
		class="bg-white/20 hover:bg-white/40 shadow text-white font-medium rounded p-2 text-sm flex items-center"
		href="/about"
	>
		<span class="button_prefix__e8xDo">
			<img alt="Toad Logo" src={mushroom} class="w-10 h-10 mr-2" />
		</span>
		<span class="ml-2">About</span>
	</a>
</div>
