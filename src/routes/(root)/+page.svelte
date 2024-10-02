<script>
    import DoubleArrowRight from "$lib/svgs/DoubleArrowRight.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import Social from "$lib/components/Social.svelte";
    import ExternalLink from "$lib/svgs/ExternalLink.svelte";
    import Filter from "$lib/svgs/Filter.svelte";
    import { projects, experience } from "$lib/projects.json";
    import { socials } from "$lib/socials.json";

    function age() {
        const birthday = new Date(2006, 2, 27);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) age--;
        return age;
    }

    let filtersShown = false;
    function toggleFilters() { filtersShown = !filtersShown; }
    
    let filters = { "Html/Css": false, "PHP": false, "JavaScript": false, "Websites": false, "Discord": false, "Svelte": false, "Node.js": false, "Kotlin": false, "Minecraft": false, "Paper": false, "Roblox": false, "Lua": false, "MongoDB": false, "Bootstrap": false, "MySQL": false, "Open Source": false, "Game Design": false };
    let filteredProjects = projects.filter(project => {
        for (const filter of Object.keys(filters)) {
            if (filters[filter] && project.tags.includes(filter)) return true;
        }
        return false;
    });
    function toggleFilter(tag) { filters[tag] = !filters[tag]; filterProjects(); }
    function filterProjects() {
        filteredProjects = projects.filter(project => {
            for (const filter of Object.keys(filters)) {
                if (filters[filter] && project.tags.includes(filter)) return true;
            }
            return false;
        });
    }
</script>

<head>
    <title>pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
</head>

<div class="mx-4 sm:mx-0 mt-2">
    <!-- About Me -->
    <div id="aboutme">
        <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">👋 Hi, I'm Chakkrit!</h1>
        <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
            I'm an {age()} year old developer and designer from Thailand, known online as pipothai. I have a passion for coding and development, and I created this website to showcase my work, 
            highlight the teams I've collaborated with, and share more about myself. Explore my projects, discover my journey, and get to know the person behind the code!
            
        </p>
        <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4">
            I started programming in 2022, driven by curiosity and a passion for learning. After gaining experience with various languages and tools, I’m now preparing to pursue a degree in Software Engineering. 
            I’m inspired by the belief that 'Without effort, nothing is achieved,' and I’m excited to continue my journey towards becoming an engineer!.
        </p>

        <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4">Some other things I've been a part of include...</p>
        <div class="w-5/6 mt-6 flex flex-row justify-center">
            <div class="flex flex-col gap-y-4">
                {#each experience as exp}
                    <div class="bg-slate-200 dark:bg-slate-800 p-2 flex flex-row px-4 py-3 rounded-md hover:scale-105 duration-100">
                        <img src={`/images/${exp.image}`} alt={exp.name} class="w-24 h-24 self-center sm:self-start rounded-md mx-auto pb-2 sm:pb-0" />
                        <div class="flex flex-col ml-3 text-slate-800 dark:text-slate-50">
                            <p class="font-semibold">{exp.name}</p>
                            <p class="font-light">{exp.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <hr class="mt-8 mb-6" />

    <!-- Projects -->
    <div id="projects">
        <div class="flex flex-col sm:flex-row">
            <h1 class="dark:text-slate-50 text-4xl font-bold grow">📂 Projects I've worked on!</h1>
            <button on:click={toggleFilters} class="flex flex-row bg-slate-300 dark:bg-slate-700 rounded-full py-1 px-4 mt-4 sm:mt-0 mx-auto hover:bg-slate-400 dark:hover:bg-slate-800 duration-100">
                <p class="sm:hidden text-slate-500 dark:text-slate-400 text-lg self-center pr-2">Filters</p>
                <Filter />
            </button>
        </div>

        <!-- Project Filters -->
        <div id="filters" class={`${filtersShown ? "" : "hidden"} dark:bg-slate-800 bg-slate-200 mt-4 text-slate-600 dark:text-slate-400 rounded-md p-2`}>
            {#each Object.keys(filters) as filter}
                <button on:click={() => toggleFilter(filter)} class={`rounded-md px-2 py-1 my-1 text-sm mx-1 ${filters[filter] ? "text-slate-700 bg-slate-400 hover:bg-slate-500 dark:text-slate-800 dark:bg-slate-400 dark:hover:bg-slate-500" : "text-slate-600 bg-slate-300 hover:bg-slate-400 dark:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"}`}>
                    {filter}
                </button>
            {/each}
        </div>

        <div class="flex flex-col mt-3">
            {#each (filteredProjects.length === 0 ? projects : filteredProjects) as project}
                <div class="flex flex-row">
                    <div class="flex flex-col items-center sm:items-start sm:flex-row dark:bg-slate-800 bg-slate-300 rounded-l dark:text-slate-50 text-black my-3 p-2 mx-0">
                        <img src="/images/{project.image}" class="w-32 h-32 rounded-md" alt="{project.name} Logo" />
                        <div class="flex flex-col">
                            <div class="flex flex-col sm:flex-row items-center">
                                <p class={`sm:pl-4 sm:pr-2 text-2xl font-semibold`}>{project.name}</p>
                                <div class="my-2 sm:my-0 flex flex-wrap justify-center gap-y-2">
                                    {#each project.tags as tag}
                                        <Tag label={tag} />
                                    {/each}
                                </div>
                            </div>
                            <p class="pl-4 pt-3 pr-2 text-md">{project.description}</p>
                        </div>
                    </div>
                    <a href="{project.page ? project.page : project.link}" class="text-slate-800 dark:text-slate-50 dark:bg-slate-700 bg-slate-200 my-3 p-3 rounded-r flex flex-col justify-center hover:scale-110 duration-100 ease-in-out">
                        {#if project.extra}
                            <DoubleArrowRight />
                        {:else}
                            <ExternalLink />
                        {/if}
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <hr class="mt-8 mb-4" />

    <!-- Socials -->
    <div id="socials">
        <h1 class="dark:text-slate-50 text-4xl font-bold mt-4 mb-8">📷 Find me online!</h1>
        <div class="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center">
            {#each socials as social}
            <a href={social.url} target="_blank">
                <Social social={social} />
            </a>
            {/each}
        </div>
    </div>

    <hr class="mt-10 mb-4" />
</div>
