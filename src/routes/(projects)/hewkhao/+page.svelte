<script>
    import Link from "$lib/components/Link.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import Bullets from "$lib/components/Bullets.svelte";
    import Image from "$lib/components/Image.svelte";
    import ChevronRight from "$lib/svgs/ChevronRight.svelte";
    import ChevronDown from "$lib/svgs/ChevronDown.svelte";
    import { projects } from "$lib/projects.json";
    const project = projects[2];

    let screenshotCollapsed = true;
    function toggleScreenshot() { screenshotCollapsed = !screenshotCollapsed; }
</script>

<head>
    <title>hewkhao | pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
</head>

<div class="h-screen">
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">🚧  hewkhao</h1>
    <div class="flex flex-col sm:flex-row">
        <div>
            {#each project.tags as tag}
                <Tag label={tag} />
            {/each}
        </div>
        <div>
            <!-- LINKS GO HERE -->
        </div>
    </div>

    <!-- ABOUT -->
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        This page is under construction.
    </p>
      <!-- SCREENSHOTS -->
<div class="flex flex-row text-slate-800 dark:text-slate-50">
    <p class="dark:text-slate-50 text-2xl font-semibold mt-3 mb-4 pl-4 border-l-4 border-slate-400">Screenshots</p>
    <button on:click={toggleScreenshot} class="ml-2 text-md">
    {#if screenshotCollapsed}
        <ChevronRight />
    {:else}
        <ChevronDown />
    {/if}
    </button>
</div>
<div class={`${screenshotCollapsed ? "hidden" : ""}`}>
    <div class="flex flex-col md:flex-row gap-x-4">
        <Image src="/images/hewkhao/hewkhao_home.png" caption="home" />
    <Image src="/images/hewkhao/hewkhao_shop.png" caption="shop" />
    </div>
</div>
</div>