<script>
    import "../app.css";
    import Sun from "$lib/svgs/Sun.svelte";
    import Moon from "$lib/svgs/Moon.svelte";
    import Home from "$lib/svgs/Home.svelte";

    let dark = true;
    function toggleTheme() { dark = !dark; }
</script>

<div class={`${dark ? "dark" : ""}`}>
    <div class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-50 h-screen">
        <button on:click={toggleTheme} class="p-2 m-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 duration-75">
            {#if dark}
                <Moon />
            {:else}
                <Sun />
            {/if}
        </button>

        <div class="flex flex-col mt-0 sm:mt-24">
            <h1 class="text-center text-5xl">Something's missing...</h1>
            <p class="text-center text-2xl pt-4 mx-2">This page doesn't seem to exist, are you sure you got it right?</p>
            
            <a href="/" class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 duration-75 mt-12 w-64 mx-auto rounded-md">
                <div class="flex flex-row justify-center px-4 py-2">
                    <Home />
                    <p class="pl-2">Go Home</p>
                </div>
            </a>
        </div>
    </div>
</div>