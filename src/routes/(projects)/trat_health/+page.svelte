<script>
    import Image from "$lib/components/Image.svelte";
    import ChevronRight from "$lib/svgs/ChevronRight.svelte";
    import ChevronDown from "$lib/svgs/ChevronDown.svelte";
    import Link from "$lib/components/Link.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import { projects } from "$lib/projects.json";
    const project = projects.find(p => p.name === "Trat Health");
    let screenshotCollapsed = true;
    function toggleScreenshot() { screenshotCollapsed = !screenshotCollapsed; }
</script>

<head>
    <title>Trat Health | pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
</head>

<div>
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">🏥 Trat Health</h1>
    <div class="flex flex-col sm:flex-row">
        <div>
            {#each project.tags as tag}
                <Tag label={tag} />
            {/each}
        </div>
    </div>

    <!-- ABOUT -->
    <br />
    <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
        The Trat Provincial Public Health website is a key platform for sharing health information with the public and healthcare workers. It provides updates, public announcements, and access to important health policies.
    </p>
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        Additionally, the site serves as a hub for government tenders, keeping businesses and healthcare organizations informed about procurement opportunities. It promotes transparency by offering clear access to provincial health policies and guidelines.
        <br />
        <br />
        The codebase for Lighthouse, as well as the web dashboard, is open source and available on GitHub at <Link href="https://github.com/aletheiamask/Public-Health.git" text="github.com/aletheiamask" />
    </p>

    <!-- FEATURES -->
    
    <div class="flex flex-col gap-y-2 dark:text-slate-50 text-2xl font-semibold mt-6 pl-4 border-l-4 border-slate-400 text-left">
        <a href="/trat_health/basic-system" class="text-blue-500 hover:underline">Basic system</a>
        <p class="text-lg font-normal">
            The public can easily access the latest health information, news, and public health announcements with just a few clicks. 
        </p>
    </div>
    <div class="flex flex-col gap-y-2 dark:text-slate-50 text-2xl font-semibold mt-6 pl-4 border-l-4 border-slate-400 text-left">
        <a href="/trat_health/background-functions" class="text-blue-500 hover:underline">Background functions</a>
        <p class="text-lg font-normal">
            
        For staff members, the website features a secure login system that allows authorized personnel to post and disseminate important news and updates. 
        This user-friendly interface enables easy creation and management of announcements and health campaigns, ensuring timely communication with the community.
        </p>
    </div>
</div>

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
    <Image src="/images/trat_health/home.png" caption="(ตัวอย่าง) นี่เป็นเเค่ส่วนหนึ่งของหน้าเว็บไซต์หลัก คุณสามารถดูส่วนต่างๆได้ในหน้าอื่นๆ" />
</div>
<br />
<br />
<br />
