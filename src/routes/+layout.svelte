<script>
	import { page } from "$app/stores";
	import "../app.pcss";
	import Nav from '$lib/Nav.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	$: localData = Object.keys($page.data.localData).length === 0 ? {} : $page.data.localData;
	$: loggedIn = localData.loggedIn;

</script>

<svelte:head>
	<title>TOAD</title>
	<meta name="description" content="Tidy Organization and Analysis of Dna Sequences TOOL">
</svelte:head>

<main class="bg-black">
	<div class="px-8 lg:px-0 h-screen flex flex-col justify-between">
		<Header {loggedIn}></Header>
		<div class="flex-grow w-full max-w-4xl mx-auto flex flex-col md:flex-row">
			<Nav></Nav>
			<div class="md:ml-12">
				<slot></slot>
			</div>
		</div>
		<Footer></Footer>
	</div>	
</main>
