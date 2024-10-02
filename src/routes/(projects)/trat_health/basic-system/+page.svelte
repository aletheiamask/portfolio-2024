<script>
    import Link from "$lib/components/Link.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import Bullets from "$lib/components/Bullets.svelte";
    import Image from "$lib/components/Image.svelte";
    import GoBackArrow from "$lib/svgs/GoBackArrow.svelte";
    import { projects } from "$lib/projects.json";
    const project = projects.find(p => p.name === "Trat Health");
</script>

<head>
    <title>Basic system | pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
    <meta name="keywords" content="pipothai, Minecraft, Hypixel, Housing, Trat Health, Parkour, Puzzles, Game Design">
</head>

<div>
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">📇 Basic system</h1>
    <div class="flex flex-col sm:flex-row">
        <a href="/trat_health" class="flex flex-row gap-x-2 mr-2 items-center text-sm px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800">
            <span class="w-4 h-4 self-center"><GoBackArrow /></span>
            <span>Back</span>
        </a>
        {#each project.tags as tag}
            <Tag label={tag} />
        {/each}
    </div>

    <!-- ABOUT -->
    <br />
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        The website utilizes HTML, CSS, and Bootstrap 5 to create a responsive and visually appealing user interface. Bootstrap 5 helps in ensuring a consistent design across different devices, making the website accessible on both desktop and mobile platforms. 
    </p>
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        With a focus on clarity and simplicity, the layout enhances readability, and user-friendly navigation guides visitors to important health updates, public announcements, and policy documents effortlessly.
    </p>

    <!-- THE GAME -->
    <p class="dark:text-slate-50 text-2xl font-semibold mt-6 pl-4 border-l-4 border-slate-400 text-left">Web Features</p>
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        In addition to the key features of sharing health information, the Trat Provincial Public Health website also offers additional tools to make the experience more interactive and engaging for users.
    </p>

    <div class="flex flex-col gap-y-4 mt-4">
        <!-- SKIP -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Drop-down Menu</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The drop-down menu allows users to view additional options without leaving the main page. 
                By hovering over or clicking on a menu item, users can reveal sub-options related to that section. For example, 
                under the <strong>“Services”</strong> menu, options such as <strong>"Vaccination Services,"</strong> <strong>"Health Checkups,"</strong> and 
                <strong>"Health Promotion Event Registration"</strong> may appear, 
                allowing users to quickly access the services they need.
                
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                To ensure easy and convenient access to information, 
                the Trat Provincial Public Health website is designed with a main menu that covers essential content, catering to users' needs.
            </p>
            <div class="w-2/3">
                <Image src="/images/trat_health/list.png" caption="List of contents and sub-items" />
            </div>
        </div>

        <!-- SCOREBOARD -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Press release</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The News section on the homepage displays the latest updates posted by the staff, allowing users to scroll through various items. 
                Each news post includes a headline summarizing the key information, a brief description for an overview, and a "Read More" 
                button that directs users to the full news article or announcement page for detailed information, ensuring quick and easy access to important updates.
            </p>
            <div class="w-2/3">
                <Image src="/images/trat_health/info.png" caption="Various news items on the main page" />
            </div>
        </div>

        <!-- HOUSING RANKS -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Housing Ranks</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The Announcements, Tenders, and Public Relations page features various posts that users can search by name and filter by specific sub-departments. 
                When users click on a post,
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                they are directed to a detailed view containing the following elements:
            </p>
            <div class="text-slate-800 dark:text-slate-50 text-lg ml-2 sm:ml-6 text-center sm:text-left">
                <Bullets bullets={[
                    "Title: The headline of the post.",
                    "Responsible Department: The sub-department handling the announcement or tender.",
                    "Time: The date and time of the post.",
                    "Details: A full description of the post, providing all necessary information.",
                    "Illustrative Images: Accompanying images related to the announcement or tender.",
                    "Download Button: Located at the bottom, allowing users to download all images as a zip file. The staff can choose whether or not to include this option based on the post's requirements."
                ]} />
            </div>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                This setup ensures that all relevant information is easily accessible, with flexible search and download options for the convenience of the users.
            </p>
        </div>

        <!-- CHALLENGES -->
        <div>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/post.png" caption="A searchable post page?" />
                <Image src="/images/trat_health/home-post.png" caption="Don't forget to read the details, it's important." />
            </div>

            <!-- ANTICHEAT -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">windows</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The <strong>Services page</strong> includes subpages where users can select from various offerings, such as the drug authorization process. Each service features a "View Details" button that directs users to an in-depth page containing essential information about the selected service.
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                The <strong>About Us page</strong> provides access to important sections, including the History of the organization and a Directory of Executives. These sections give users insight into the department's background and leadership structure.
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                The <strong>Contact Us page</strong> displays detailed contact information, including a map that can be viewed via Google Maps. It also provides links to the department's official Facebook page, ensuring users have multiple channels for communication. This organized layout allows for easy navigation and quick access to vital information.
            </p>
        </div>
    </div>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/serve.png" caption="List of requests for drug licenses" />
                <Image src="/images/trat_health/window.png" caption="This item is old." />
            </div>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/contact.png" caption="Do you know the map?" />
                <Image src="/images/trat_health/history.png" caption="Sometimes what we learn about history is that we learn nothing at all." />
            </div>

            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Service Information for Users</p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                This section provides essential details about the services that users should be aware of, along with basic system information. The website was established in 2024 and is currently running on version Beta 1.0.0. Looking ahead, the developers plan to update the site for improved functionality, with a primary focus on enhancing public health services in Trat Province.
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                In the meantime, we recommend you grab a snack, get comfy, and prepare for the long wait ahead. Who knows? By the time we update, you might have learned how to juggle or even mastered the art of patience! Haha! 
                From the Developer, PeePohThai
            </p>  
        </div>
</div>