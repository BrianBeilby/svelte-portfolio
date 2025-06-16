<script>
  import ThemeToggle from './ThemeToggle.svelte';
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];

  let activeSection = '';

  function updateActiveSection() {
    const sections = ['projects', 'about'];
    const scrollPosition = y + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection = section;
          break;
        }
      }
    }
  }

  $: if (y !== undefined) updateActiveSection();
</script>

<header
  class={"sticky z-[20] top-0 duration-300 px-6 flex items-center justify-between border border-solid backdrop-blur-md " +
    (y > 0
      ? " py-4 bg-slate-50/80 dark:bg-slate-950/80 border-accent-500/20 shadow-lg"
      : "py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium text-lg animate-fade-in">
    <b class="font-bold poppins gradient-text">Brian</b>
    <span class="text-slate-800 dark:text-slate-200 font-medium">Beilby</span>
  </h1>

  <div class="flex items-center gap-4">
    <nav class="sm:flex items-center gap-6 hidden">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="relative duration-300 hover:text-accent-400 transition-colors group {activeSection === tab.link.slice(1) ? 'text-accent-400' : 'text-slate-600 dark:text-slate-300'}"
        >
          <span class="relative z-10">{tab.name}</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-primary-400 transition-all duration-300 group-hover:w-full {activeSection === tab.link.slice(1) ? 'w-full' : ''}"></div>
        </a>
      {/each}
    </nav>

    <ThemeToggle />

    <a
      href="https://www.linkedin.com/in/brianbeilby/"
      target="_blank"
      class="relative overflow-hidden px-5 py-2.5 group rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 hover:scale-105"
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 group-hover:translate-x-full z-0 duration-300"
      ></div>
      <span class="relative z-10 flex items-center gap-2">
        Get in touch
        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </span>
    </a>
  </div>
</header>
