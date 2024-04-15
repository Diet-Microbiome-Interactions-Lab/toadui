<script lang="ts">
  export let user;
  import { Label, Input } from "flowbite-svelte";
  import { Button, Select } from "flowbite-svelte";
  import { post, put } from "$lib/ApiCaller";
  import { invalidateAll } from "$app/navigation";

  let projectSelect: Array<Object> = [];

  user.configuration.projects.forEach((value, index) => {
    let tmp = {};
    tmp["value"] = value;
    tmp["name"] = value;
    projectSelect.push(tmp);
  });

  console.log(`User in config: ${JSON.stringify(user)}`);
  let project = user.configuration.project;

  let handle = user.handle;
  let lab = user.configuration.lab;
  let source = user.configuration.source;

  let address = "localhost";
  let port = user.configuration.port;
  let db = "TOAD_DEFAULT";
  let uri = user.configuration.uri;

  import { writable } from "svelte/store";
  import type { User } from "$lib/utilities/session";

  let options = writable(["Option 1", "Option 2"]);
  let selectedOption = "";
  let newOption = "";

  function addOption() {
    if (newOption.trim() !== "") {
      options.update((currentOptions) => [...currentOptions, newOption]);
      newOption = ""; // Clear the input field after adding the option
    }
  }

  function handleChange(event) {
    if (event.target.value === "add_new") {
      const newOptionValue = prompt("Enter new option:");
      if (newOptionValue !== null) {
        options.update((currentOptions) => [...currentOptions, newOptionValue]);
      }
    } else {
      selectedOption = event.target.value;
    }
  }

  async function updateUserConfiguration() {
    let putPayload = {
      lab: lab,
      source: source,
      user: user.dbeUUID,
    };
    if (project) {
      putPayload.project = project;
    }

    let uri = `/users/config/`;
    console.log(`Calling put with payload: ${JSON.stringify(putPayload)}`);
    put(uri, putPayload)
      .then((postReturn) => {
        console.log(`Success!`);
        invalidateAll();
      })
      .catch((error) => {
        console.log(`Error: ${JSON.stringify(error)}`);
      });
  }
</script>

<form on:submit={updateUserConfiguration}>
  <div class="grid-container">
    <div class="mb-6 item1">
      <Label for="default-input" class="block mb-2 text-white">Handle</Label>
      <Input id="default-input" size="sm" bind:value={handle} />
      <br />
      <Label for="default-input" class="block mb-2 text-white">lab</Label>
      <Input id="default-input" size="sm" bind:value={lab} />
      <br />
      <Label for="default-input" class="block mb-2 text-white">source</Label>
      <Input id="default-input" size="sm" bind:value={source} />
      <br />
      <div class="mb-6 text-black/60 item3">
        <div class="mb-2 text-sm text-white/60">
          <Label class="text-white">Default Project</Label>
        </div>
        <Select
          class="mt-2 random-val"
          items={projectSelect}
          bind:value={project}
        />
      </div>
    </div>
    <div class="mb-6 item2">
      <Label for="default-input" class="block mb-2 text-white">address</Label>
      <Input id="default-input" size="sm" bind:value={address} />
      <br />
      <Label for="default-input" class="block mb-2 text-white">port</Label>
      <Input id="default-input" size="sm" bind:value={port} />
      <br />
      <Label for="default-input" class="block mb-2 text-white">db</Label>
      <Input id="default-input" size="sm" bind:value={db} />
      <br />
      <Label for="default-input" class="block mb-2 text-white">db_uri</Label>
      <Input id="default-input" size="sm" bind:value={uri} />
    </div>
  </div>
  <div class="bg-green-500">
    <Button type="submit" color="purple" class="w-100 h-3.5 me-2"
      >Update Configuration</Button
    >
  </div>
</form>

<!-- <div>
  <select bind:value={selectedOption} on:change={handleChange}>
    <option disabled value="">Select an option</option>
    {#each $options as option}
      <option value={option}>{option}</option>
    {/each}
    <option value="add_new">Add New</option>
  </select>

  {#if selectedOption === "add_new"}
    <input type="text" bind:value={newOption} placeholder="Enter new option" />
    <button on:click={addOption}>Add</button>
  {/if}
</div> -->

<style>
  .random-val {
    color: blue;
  }
  .grid-container {
    display: grid;
    column-gap: 10px;
    row-gap: 0px;
  }
  .item1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
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
