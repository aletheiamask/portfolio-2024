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
    <title>Centurion | pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
    <meta name="keywords" content="pipothai, Lighthouse, Stats, Player Stats, Discord, Discord bot, Discord.js, Node.js, MCC Island, MCC, MCCI">
</head>

<div>
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">🤖 libli</h1>
    <div class="flex flex-col sm:flex-row">
        <div>
            {#each project.tags as tag}
                <Tag label={tag} />
            {/each}
        </div>
        <div>
            <a href="https://github.com/sirarchibald97/centurion-public"><i class="fa-brands fa-github dark:text-slate-50 text-slate-700 fa-2xl mt-8 sm:mt-3.5 ml-2 hover:text-blue-400 dark:hover:text-blue-400"></i></a>
        </div>
    </div>

    <!-- ABOUT -->
    <br />
    <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
        The project to create a game on the Roblox platform, titled [BETA ACCESS] ลิบหลี่ LIBLI Community Club, began as a small collaborative effort with a group of friends. 
    </p>
    <br />
    <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
        The game is designed to create an engaging community space where players can connect, interact, and showcase the creativity and teamwork of the development team. Currently in its beta phase, this is just the beginning, with plans to expand, refine features, and invite more players into the experience.
    </p>
    <br />
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        Set in a cozy nighttime bar, the game provides a relaxing environment for those looking to escape reality and find someone to chat with. Players can take on different professions, and the longer they stay, the more coins they earn, which can be exchanged for unique items.
        <Link href="https://www.roblox.com/th/games/18863601540/BETA-ACCESS-LIBLI-Community-Club" text="BETA-ACCESS-LIBLI-Community-Club" /><br />Creation Date: 9/8/2567
        
    </p>

    <!-- FEATURES -->
    <p class="dark:text-slate-50 text-2xl font-semibold mt-6 mb-4 pl-4 border-l-4 border-slate-400 text-left">Developer</p>
    <div class="text-slate-800 dark:text-slate-50 text-lg ml-2 sm:ml-6 text-center sm:text-left">
        <Bullets bullets={[
            "MarVin Programmer",
            "ice_GG1 Game Designer (ME) ",
            "KaToo_4268 3D Modeler",
            "oOkimuraOo Game Jack of All Trades",
        ]} />
    </div>
<br><br><br>
    
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
        <Image src="/images/libli.png" caption="logo" />
        <Image src="/images/centurion/atmosphere.webp" caption="A cozy spot for drinks and conversation." />
        <Image src="/images/centurion/atmosphere2.webp" caption="Where the night comes alive with laughter." />
        <Image src="/images/centurion/atmosphere3.webp" caption="Handsome and confident." />
        <Image src="/images/centurion/boy.png" caption="A look that turns heads." />
        <Image src="/images/centurion/friends.png" caption="Cheers to good times and great company." />
    </div>
</div>