<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import "../app.pcss";
	import Nav from "$lib/Nav.svelte";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import { getCurrentUser } from "$lib/utilities/session";

	$: user = getCurrentUser($page);
</script>

<svelte:head>
	<title>TOAD</title>
	<meta
		name="description"
		content="Tidy Organization and Analysis of Dna Sequences TOOL"
	/>
</svelte:head>

<main class="bg-black">
	<div class="flex flex-col min-h-screen">
		<div class="px-8 lg:px-0 h-screen flex flex-col justify-between">
			<Header loggedIn={user?.loggedIn}></Header>
			<div
				class="flex-grow w-full max-w-4xl mx-auto flex flex-col md:flex-row"
			>
				<Nav></Nav>
				<div class="md:ml-8 md:mt-4">
					<slot />
				</div>
			</div>
			<Footer></Footer>
		</div>
	</div>
</main>
