<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    export let data;
    let user = data.user;
</script>

<p>
    Hi {user.handle}. This is the generic profile page. IDK what's going to go
    here [shrug].
</p>
