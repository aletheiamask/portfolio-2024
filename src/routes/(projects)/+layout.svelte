<script>
    import "../../app.css";
    import GoBackArrow from "$lib/svgs/GoBackArrow.svelte";
    import Moon from "$lib/svgs/Moon.svelte";
    import Sun from "$lib/svgs/Sun.svelte";

    let dark = true;
    function toggleTheme() { dark = !dark; };
</script>

<div class="{dark ? "dark" : ""}">
    <div lang="" class="dark:bg-slate-900 bg-slate-50 duration-100">
        <main class="flex flex-col justify-center max-w-sm text-center sm:text-left sm:max-w-4xl mx-auto pb-8">
            <nav class="grid grid-cols-2 sm:flex sm:flex-row flex-col items-center text-slate-50 text-md my-8 sm:my-12 font-semibold">
                <a href="/" class="flex flex-row items-center my-2 sm:my-0 mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800">
                    <span class="w-6 h-6 self-center"><GoBackArrow /></span>
                    <span class="pl-2">Home</span>
                </a>
                <button class="flex flex-row items-center my-2 sm:my-0 mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800" on:click={toggleTheme}>
                    {#if dark}
                        <Moon />
                    {:else}
                        <Sun />
                    {/if}
                    <span class="pl-2">Toggle Theme</span>
                </button>
            </nav>

            <div class="flex-1">
                <slot />
            </div>

            <footer class="my-6">
                <p class="text-slate-500">© 2024 pipothai</p>
            </footer>
        </main>
    </div>
</div>