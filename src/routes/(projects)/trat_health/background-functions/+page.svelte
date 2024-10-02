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
    <title>Background functions | pipothai.dev</title>
    <script src="https://kit.fontawesome.com/d576307fab.js" crossorigin="anonymous"></script>
    <meta name="description" content="This page is under construction!">
    <meta name="keywords" content="pipothai, Minecraft, Hypixel, Housing, Trat Health, Parkour, Puzzles, Game Design">
</head>

<div>
    <h1 class="dark:text-slate-50 text-4xl font-bold mb-4 text-center sm:text-left">⚙️ Background functions</h1>
    <div class="flex flex-col sm:flex-row">
        <a href="/trat_health" class="flex flex-row gap-x-2 mr-2 items-center text-sm px-4 py-1 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-700 hover:bg-slate-400 dark:text-slate-50 text-slate-800">
            <span class="w-4 h-4 self-center"><GoBackArrow /></span>
            <span>Back</span>
        </a>
        {#each project.tags as tag}
            <Tag label={tag} />
        {/each}
    </div>

    <!-- RETENTION STRATEGIES -->
    <p class="dark:text-slate-50 text-2xl font-semibold mt-6 pl-4 border-l-4 border-slate-400 text-left">Design system</p>
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        The Trat Provincial Public Health website is designed with modern tools and languages to ensure an intuitive and secure user experience for both the public and healthcare workers. 
    </p>
    <div class="flex flex-col gap-y-4">
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Front-End Technologies</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The website utilizes HTML, CSS, and Bootstrap 5 to create a responsive and visually appealing user interface. Bootstrap 5 helps in ensuring a consistent design across different devices, making the website accessible on both desktop and mobile platforms. With a focus on clarity and simplicity, the layout enhances readability, and user-friendly navigation guides visitors to important health updates, public announcements, and policy documents effortlessly.
            </p>
        </div>
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Back-End Architecture</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                For the back-end, PHP is employed to manage the core functionality of the website. This includes handling user authentication, regulating system access, posting updates, and ensuring the proper deletion and management of data. PHP is also responsible for connecting to the MySQL database, where crucial information such as health policies, announcements, and government tenders is stored. Robust security measures are in place to prevent unauthorized access and safeguard the system against unwanted outcomes, such as SQL injections or data breaches.
            </p>
        </div>
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Database Management</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The MySQL database stores and manages all relevant data, including user accounts, post records, and tender information. This ensures that all content is organized, searchable, and can be retrieved efficiently for display on the website. 
            </p>
        </div>
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">User Interaction and Enhancements</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                JavaScript (JS) adds subtle interactive elements to the user interface, providing small yet impactful features that improve user engagement and experience. These may include form validations, dynamic content updates, and small visual effects that help guide users through the website smoothly.
            </p>
        </div>
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Development Tools</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The development environment for the website is set up using VS Code as the code editor, ensuring efficient writing, debugging, and management of the website's codebase. XAMPP is used as the local server environment for testing PHP scripts and database connections before deployment, making it easier to monitor and maintain the system.
            </p>
        </div>
    </div>

    <!-- THE GAME -->
    <p class="dark:text-slate-50 text-2xl font-semibold mt-6 pl-4 border-l-4 border-slate-400 text-left">functions</p>
    <p class="dark:text-slate-50 text-lg pt-4 sm:pl-4 text-center sm:text-left">
        This section outlines the key functions of the website's backend, designed to streamline operations and enhance user experience
    </p>

    <div class="flex flex-col gap-y-4 mt-4">
       
        <!-- CHALLENGES -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Admin Login Page Overview</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The Admin Login page is exclusively for staff access, allowing only the highest-level admin (ID 0) to create new accounts. Admin IDs can be modified within the database, with this authority limited to the top admin. The system is developed using PHP Object-Oriented Programming (OOP) principles for better code organization and maintainability, ensuring ease of understanding for future developers.
            </p>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/register.png" caption="Press me." />
                <Image src="/images/trat_health/login.png" caption="Are you saying you forgot your password?" />
            </div>

            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                Creating posts is restricted to authorized staff only, who can enter various details such as the title, images, responsible department, date, and content. Upon viewing a post, staff members can also delete it if needed, with this functionality visible exclusively to admins. The system stores image files in the database while also keeping backup files in zip format for additional security.
            </p>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/conpost.png" caption="Post anything that looks good." />
                <Image src="/images/trat_health/delete.png" caption="It wasn't bad. But I'm still not satisfied." />
            </div>
        </div>

        <!-- SCOREBOARD -->
        <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">Error</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                If the website experiences a failure, such as an inability to connect to the database, users will be redirected to an alert page informing them of the issue. This page will display a message indicating the error and will automatically wait for 20 seconds before presenting two options: "Reconnect" or "Email the Developer." The "Reconnect" option will attempt to re-establish the connection, while the "Email the Developer" option will enable users to send a notification to the developers about the issue, utilizing JavaScript for functionality and user experience.
            </p>
            <div class="flex flex-col md:flex-row gap-x-4">
                <Image src="/images/trat_health/erroe.png" caption="System error" />
                <Image src="/images/trat_health/erroe-con.png" caption="Try restarting or contact us." />
            </div>
        </div>

         <!-- SKIP -->
         <div>
            <p class="dark:text-slate-50 text-xl font-semibold pt-4 sm:pl-4 text-center sm:text-left">security</p>
            <p class="dark:text-slate-50 text-lg sm:pl-4 text-center sm:text-left">
                The user login interface is designed to restrict access to the admin pages. If a user is not logged in, they will not be able to view any admin content. Should someone attempt to access the admin area and fail to log in more than 10 times, their IP address will be banned to prevent further attempts. Only the highest-level admin has the authority to lift this ban, ensuring tight security and protection against unauthorized access.
            </p>
            <p class="dark:text-slate-50 text-lg mt-2 sm:pl-4 text-center sm:text-left">
                This is just a basic security system designed for user accounts, tailored to suit the needs of organizations. The simple account structure ensures that only authorized personnel can access sensitive areas, providing a straightforward approach to account management while maintaining essential security measures.
            </p>
            <div class="w-1/3">
                <Image src="/images/trat_health/out.png" caption="Go away." />
            </div>
        </div>
    </div>
</div>