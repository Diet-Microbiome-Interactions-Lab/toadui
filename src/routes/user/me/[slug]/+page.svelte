<script>
    export let data;
    let user = data.user;
    console.log(`${JSON.stringify(data)}`);
</script>

<h1>Hi {user.username}</h1>
<p>
    This means you navigated to your own username, so we apppend the /me/ to
    make the url /user/me/dane and you can view extended features
</p>

<div class="grid grid-cols-4 gap-4">
    <div class="col-span-3 border ml-4 flex-grow-0">
        <h1 class="text-xl text-purple-600">
            <center>User Statistics and Monitoring Stuff</center>
        </h1>
        <div>...</div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
        <!-- <div class="col-span-1">
            {user.configuration.db_address}
        </div>
        <div class="col-span-1">
            {user.configuration.port}
        </div>
        <div class="col-span-1">
            {user.configuration.db}
        </div>
        <div class="col-span-1">
            {user.configuration.uri}
        </div>
        <div class="col-span-1">
            {user.configuration.lab}
        </div>
        <div class="col-span-1">
            {user.configuration.source}
        </div>
        <div class="col-span-1">
            {user.configuration.project}
        </div> -->
    </div>
    <div class="col-span-1 border ml-4 flex-grow-0">
        <h1 class="text-xl text-yellow--600"><center>Activity</center></h1>
        <div class="ml-2 mr-2">
            <div class="mb-2">
                <span class="text-yellow-500">Queried database</span> using
                params [object.Object]
                <hr />
            </div>
            <div class="mb-2">
                <span class="text-green-600">Added to database</span> using
                params [object.Object]
                <hr />
            </div>
            <div class="mb-2">
                <span class="text-yellow-500">Queried database</span> using
                params [object.Object]
                <hr />
            </div>
            <div class="mb-2">
                <span class="text-yellow-500">Queried database</span> using
                params [object.Object]
                <hr />
            </div>
        </div>
    </div>
</div>
