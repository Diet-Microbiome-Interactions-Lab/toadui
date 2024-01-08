<script lang="ts">
    import logo from '../../lib/pics/toad.svg';
    import neuromancer from '../../lib/pics/Neuromancer.jpeg';
    import { fade } from "svelte/transition";
    import Typewriter from 'svelte-typewriter'
    import { Hr } from "flowbite-svelte";
    import { FlowbiteSolid } from 'flowbite-svelte-icons';
    import Login from "./Login.svelte";

    let myInt = 500;
    let cursorVal = true;
    let mode = 'scramble';
    let showLogin = false;

</script>
<main
	id="content"
	role="main"
	class="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto w-full h-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
>
	<body>
		<div class="h-screen flex items-center justify-center ml-8 mt-10 bg-green-500">
			<div class="content-center">
				<center>
					<h1 class="text-4xl text-black">Welcome To</h1>
					<Typewriter interval={myInt} cursor={cursorVal} delay="500" {mode}>
						<h1 class="text-4xl text-purple-600 font-extrabold">
                            Tidy Organization and Analysis of DNA TOOLkit</h1>
					</Typewriter>
                    <Typewriter interval={myInt} cursor={cursorVal} delay="750" {mode}>
						<h1 class="text-4xl text-blue-600 font-extrabold mt-4">TOAD</h1>
					</Typewriter>
					<h1 class="content-center mt-8">
						<!-- <img src="/images/logo.png" alt="mand" class="manImg" style="width:100px;height:auto;" /> -->
                        <img alt="Toad Logo" src={logo} class="w-10 h-10 mr-2 font-extrabold" />
					</h1>
				</center>
				<h2 class="text-xl text-black font-extrabold underline mt-4">
                    
                    <center>Created by Wintermute</center>
				</h2>
				<Hr classHr="my-8 w-64 h-1" icon>
					<FlowbiteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
				</Hr>
				<br />
				{#if showLogin}
					<button in:fade={{ delay: 500 }} out:fade on:click={() => (showLogin = !showLogin)} />
					<Login on:submit />
				{:else}
					<center>
						<button
							class="text-green-800 underline font-extrabold text-4xl"
							in:fade={{ delay: 500 }}
							out:fade
							on:click={() => (showLogin = !showLogin)}
						>
							Enter the Pond</button
						>
					</center>
				{/if}
			</div>
		</div>
	</body>
</main>
