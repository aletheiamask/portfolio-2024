<script>
    export let src;
    export let caption;
</script>

<div class="flex flex-col bg-slate-200 dark:bg-slate-800 p-4 rounded-md my-3">
    <div class="flex-1">
        <img src={src} alt={caption} />
    </div>
    <p class="text-slate-600 dark:text-slate-200 text-md mt-3 ml-2 italic">{caption ? caption :  src}</p>
</div>