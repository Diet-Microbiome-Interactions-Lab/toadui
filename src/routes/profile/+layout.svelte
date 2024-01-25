<script lang="ts">
    import { page } from "$app/stores";
    import { Button } from "flowbite-svelte";
    let localData = Object.keys($page.data.localData).length === 0 ? {} : $page.data.localData;
    console.log(`Localdata = ${JSON.stringify(localData)}`)
</script>

<main>
    <div class="grid grid-flow-col gap-6">
        <div class="col-span-3">
            <h1 class="font-extrabold text-blue-600 underline text-center">
                User Information
            </h1>
            <div class="mb-4">
                <p>UUIN: {localData.user[0]._id.$oid}</p>
                <p>Email: {localData.user[0].email}</p>
                <p>First Name: {localData.user[0].first_name}</p>
                <p>Last Name: {localData.user[0].last_name}</p>
            </div>
            <h1 class="font-extrabold text-green-600 underline text-center">
                Settings and Configuration
            </h1>
            <div>
                <p>Lab (Default): Lindemann</p>
                <p>Project (Default): NIGMS</p>
                <p>Project Period (Current): Spring 2024</p>
                <p>Last Name: {localData.user[0].last_name}</p>
                <p>Source: microbiome</p>
                <p>URI: mongodb://localhost:27017</p>
                <p>Database Name: toad_test</p>
                <p>API Prefix: http://127.0.0.1:5000/api/v1</p>
            </div>
        </div>
        <div class="col-span-2">
            <h1 class="font-extrabold text-pink-600 underline text-center">
                Activity Log <Button color="light" class="text-white ml-4 mb-2">Filter</Button>
            </h1>
            <div class="mb-4">
                <ul>
                    <li>1 [Vomit] Queried Database <a class="text-blue-600 underline" href="#">(Receipt)</a></li>
                    <li>2 [Vomit] Queried Database <a class="text-blue-600 underline" href="#">(Receipt)</a></li>
                    <li>3 [Ingest] Added [250] sequences <a class="text-blue-600 underline" href="#">(Receipt)</a></li>
                    <li>4 [Query] Queried Object <a class="text-blue-600 underline" href="#">(Receipt)</a></li>
                </ul>
            </div>
        </div>
    </div>
</main>