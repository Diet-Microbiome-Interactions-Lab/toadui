<script>
    import { Button } from "flowbite-svelte";
</script>

<main>
    <div class="mt-2 flex justify-center">
        <form action="?/logout" method="POST">
            <button
                type="submit"
                class="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >Leave The Pond</button
            >
        </form>
    </div>
</main>
