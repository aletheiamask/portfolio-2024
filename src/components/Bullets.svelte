<script>
    export let bullets = [];
</script>

<div>
    {#each bullets as bullet}
        •<span class="ml-3">{bullet}</span><br />
    {/each}
</div>