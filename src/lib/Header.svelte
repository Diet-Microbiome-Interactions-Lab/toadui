<script>
	import logo from './pics/toad.svg';
	import mushroom from './pics/mushroom.png';
	export let loggedIn = false;
</script>

<div
	class="max-w-4xl mx-auto w-full flex md:flex-row flex-col items-center md:justify-between py-8 mb-12 border-b border-white"
>
	<a href="/" class="flex items-center mb-4 md:mb-0 text-white outline " aria-label="Home">
		<img alt="Toad Logo" src={logo} class="w-10 h-10 mr-2 font-extrabold" />TOAD
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

	{#if loggedIn}
		<a
		class="bg-white/20 hover:bg-white/40 shadow text-white font-medium rounded p-2 text-sm flex items-center"
		href="/logout"
	>
		<span class="button_prefix__e8xDo">
			<img alt="Toad Logo" src={mushroom} class="w-10 h-10 mr-2" />
		</span>
		<span class="ml-2">Logout</span>
		</a>
	{:else}
	<a
	class="bg-white/20 hover:bg-white/40 shadow text-white font-medium rounded p-2 text-sm flex items-center"
	href="/login"
>
	<span class="button_prefix__e8xDo">
		<img alt="Toad Logo" src={mushroom} class="w-10 h-10 mr-2" />
	</span>
	<span class="ml-2">Login</span>
	</a>
	{/if}


</div>
