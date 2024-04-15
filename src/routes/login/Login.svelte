<script lang="ts">
    import type { ActionData } from "../$types";
    let form: ActionData;
    import { enhance } from "$app/forms";
    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from "flowbite-svelte";

    let username: string = '';
    let password: string = '';

    let { email, error } = form ?? {};
	$: ({ email, error } = form ?? { email: '', error: '' });

	$: authenticationError = error === 'authentication';

	// const loginSubmit = (e) => {
	// 	let loginFields = { username, password };
	// 	console.log(loginFields);
	// };
</script>

<div class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-slate-100">
	<form
		action="?/login"
		method="POST"
		use:enhance
		class="flex flex-col space-y-6"
	>
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Internal Registration</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input id="email" type="email" name="email" placeholder="case@purdue.edu" required />
		</Label>
		<Label class="space-y-2">
			<span>Password</span>
			<Input id="password" type="password" name="password" placeholder="••••••••••" required />
		</Label>
		<!-- <div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
		</div> -->
		{#if authenticationError}
			<small id="authentication-error" class="error-text">Check email and password are correct.</small>
		{/if}
		<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>Dive into the Pond</button
		>
		<!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Don’t have an account yet? <a
				href="/"
				class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a
			>
		</p> -->
	</form>
</div>