<script>
    export let social;

    const colours = {
        "GitHub": "dark:hover:from-green-950 dark:hover:to-green-600 hover:from-green-600 hover:to-green-300",
        "Twitter": "dark:hover:from-sky-950 dark:hover:to-sky-600 hover:from-sky-600 hover:to-sky-300",
        "YouTube": "dark:hover:from-red-950 dark:hover:to-red-600 hover:from-red-600 hover:to-red-300",
        "Twitch": "dark:hover:from-violet-950 dark:hover:to-violet-600 hover:from-violet-600 hover:to-violet-300",
        "Discord": "dark:hover:from-indigo-950 dark:hover:to-indigo-600 hover:from-indigo-600 hover:to-indigo-300",
        "Facebook": "dark:hover:from-blue-950 dark:hover:to-blue-600 hover:from-blue-600 hover:to-blue-300",
    }
</script>

<div class={`dark:bg-slate-800 bg-slate-300 hover:bg-gradient-to-br ${colours[social.name]} hover:scale-110 hover:shadow-2xl duration-100 rounded-lg p-8 mx-4 my-2 sm:my-0`}>
    <i class={`${social.icon} dark:text-slate-50 text-slate-700 fa-2xl`}>
</div>