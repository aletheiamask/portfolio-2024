<script>
    import Link from "$lib/components/Link.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import Bullets from "$lib/components/Bullets.svelte";
    import Image from "$lib/components/Image.svelte";
    import ChevronRight from "$lib/svgs/ChevronRight.svelte";
    import ChevronDown from "$lib/svgs/ChevronDown.svelte";
    import { projects } from "$lib/projects.json";
    const project = projects[3];

    let screenshotCollapsed = true;
    function toggleScreenshot() { screenshotCollapsed = !screenshotCollapsed; }
</script>

<head>
    <title>PocketGames | SirArchibald.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
</head>

<div class="h-screen">
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">🎮 PocketGames</h1>
    <div class="flex flex-col sm:flex-row">
        <div>
            {#each project.tags as tag}
                <Tag label={tag} />
            {/each}
        </div>
        <div>
            <a href="https://github.com/sirarchibald97/pocket-games"><i class="fa-brands fa-github dark:text-slate-50 text-slate-700 fa-2xl mt-8 sm:mt-3.5 ml-2 hover:text-blue-400 dark:hover:text-blue-400"></i></a>
        </div>
    </div>

    <!-- ABOUT -->
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        This page is under construction.
    </p>
</div>