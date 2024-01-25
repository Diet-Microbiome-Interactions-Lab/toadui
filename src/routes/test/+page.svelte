<script>
    let name = 'world';    
    let editing = false;
    let input;


    function toggleEdit() {
        editing = !editing
        if (editing) {
            tick().ten(() => input.focus())
        }
    }
</script>

<p class="text-white">
    Name: {name}
</p>

{#if editing}
<label>
    Name
    <input bind:this={input} bind:value={name} type="text" class="text-black">
</label>
{/if}

<button on:click={toggleEdit}>
    {editing ? 'Confirm' : 'Edit'}
</button>