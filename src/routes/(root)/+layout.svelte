<script>
    import "../../app.css";
    import Person from "$lib/svgs/Person.svelte";
    import Projects from "$lib/svgs/Projects.svelte";
    import Socials from "$lib/svgs/Socials.svelte";
    import Moon from "$lib/svgs/Moon.svelte";
    import Sun from "$lib/svgs/Sun.svelte";
    import { onMount } from "svelte";

    let dark = true;
    function toggleTheme() { 
        dark = !dark; 
    }

    let top = true;
    onMount(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                top = false;
            } else {
                top = true;
            }
        });
    });
</script>

<div class="{dark ? "dark" : ""}">
    <div class=" bg-slate-50 dark:bg-slate-900 duration-100">
        <main class="flex flex-col justify-center text-center sm:text-left w-full sm:max-w-4xl sm:mx-auto">
            <nav class={`sticky top-0 ${top ? "" : "py-4"} bg-slate-50 dark:bg-slate-900 duration-100 grid grid-cols-2 gap-x-4 mx-4 sm:mx-0 sm:gap-x-0 sm:flex sm:flex-row items-center text-slate-50 text-md my-4 sm:my-8 font-semibold`}>
                <a href="/#aboutme" class="flex flex-row items-center my-2 sm:my-0 sm:mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800 duration-100">
                    <Person />
                    <span class="pl-2">About Me</span>
                </a>
                <a href="/#projects" class="flex flex-row items-center my-2 sm:my-0 sm:mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800 duration-100">
                    <Projects />
                    <span class="pl-2">Projects</span>
                </a>
                <a href="/#socials" class="flex flex-row items-center my-2 sm:my-0 sm:mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800 duration-100">
                    <Socials />
                    <span class="pl-2">Socials</span>
                </a>
                <button class="flex flex-row items-center my-2 sm:my-0 sm:mx-2 px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800 duration-100" on:click={toggleTheme}>
                    {#if dark}
                        <Moon />
                    {:else}
                        <Sun />
                    {/if}
                    <span class="pl-2">Toggle Theme</span>
                </button>
            </nav>

            <slot />

            <footer class="my-6 flex flex-row justify-between mx-12 sm:mx-12">
                <p class="text-slate-500">© 2024 pipothai</p>
                <p class="text-slate-500">Code on <a href="https://github.com/aletheiamask" target="_blank" class="text-blue-500 underline">[GitHub]</a></p>
            </footer>
        </main>
    </div>
</div>