<script>
	import cross from './cross.jpeg';
	import enders from './enders.jpeg';
	import lindemann from './lindemann.jpeg';
	import verma from './verma.jpeg';
</script>

<div>
	<div class="font-bold text-2xl mb-4">About Page - What's our deal?!</div>
	<div class="opacity-80 mb-4">
		This is where we describe where the project came from, who we are, and what we're aiming to do.
	</div>
	<div class="opacity-80 mb-4">
		This page endpoint runs on the server, and returns the current date and time. Notice each time
		you refresh the page, the endpoint runs again and the time is updated.
	</div>
	<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30">
		<div class="mb-2 text-sm uppercase text-white/60">Who we are</div>

		<div class="bg-zinc-900/60 rounded-md p-6 shadow-md  shadow-zinc-700/30 grid-container">

			<div class="text-2xl item1">
				Dr. Tzu-Wen Cross
				<img alt="Svelte logo" src={cross} width="100" />
			</div>
			<div class="item2">
				<span class="text-2xl">Dr. Laramy Enders</span>
				<img alt="Svelte logo" src={enders} width="100" />
				<span class="text-blue-400 mb-4">What I do</span>
			</div>
			<br>
			<div class="text-2xl item3">
				Dr. Stephen Lindemann
				<img alt="Svelte logo" src={lindemann} width="100" />
			</div>
			<div class="text-2xl item4">
				Dr. Mohit Verma
				<img alt="Svelte logo" src={verma} width="100" />
			</div>
		</div>
	</div>
</div>

<style>
	img {
		/* width: 400px; */
		height: auto;
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