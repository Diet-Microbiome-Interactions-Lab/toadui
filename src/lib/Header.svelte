<script>
	import logo from "./pics/synthtoad.jpeg";
	import mushroom from "./pics/synthshroom.jpeg";
	import {
		Avatar,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		NavBrand,
		Navbar,
		NavHamburger,
		NavUl,
		NavLi,
	} from "flowbite-svelte";
	import { goto } from "$app/navigation";
	import { getCurrentUser } from "./utilities/session";

	let user = getCurrentUser();
	export let loggedIn = false;
</script>

<div
	class="flex md:flex-col justify-between md:justify-start md:space-x-0 space-x-2 bg-slate-400 p-2"
>
	<Navbar rounded color="pink" let:hidden let:toggle>
		<!-- rounded-md p-2 w-1/4 md:w-32 mb-6 shadow-md  shadow-zinc-700/30 text-center -->
		<NavBrand href="/" class="p-2 ml-4">
			<img
				src={logo}
				class="mr-3 h-6 sm:h-12 w-14 h-14 rounded-full"
				alt="DAtaNEtwork Logo"
			/>
			<span
				class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>TOAD</span
			>
		</NavBrand>
		<div class="flex items-center md:order-2 mr-4">
			<Avatar id="avatar-menu" src={mushroom} class="w-14 h-14" />
		</div>
		<Dropdown
			class="bg-gray-500"
			placement="bottom"
			triggeredBy="#avatar-menu"
		>
			<DropdownHeader>
				<span class="rainbow-text">
					{user.handle}
				</span>
			</DropdownHeader>
			<DropdownItem class="text-white" href="/user/me/{user.handle}"
				>Profile</DropdownItem
			>
			<DropdownItem class="text-white" href="/config/"
				>Config</DropdownItem
			>
			<DropdownDivider />
			<DropdownItem class="text-red-500">
				<button on:click={() => goto("/logout")}>Logout</button>
			</DropdownItem>
		</Dropdown>
		<!-- <DarkMode /> -->
	</Navbar>
	<div class="flex flex-grow">
		<slot />
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@layer utilities {
		.rainbow-text {
			background-image: linear-gradient(
				90deg,
				#ff0000,
				#ff8000,
				#ffff00,
				#00ff00,
				#0000ff,
				#8000ff,
				#ff00ff
			);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}
	}
</style>
