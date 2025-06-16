<script>
  import Step from "./Step.svelte";
  import Typewriter from "svelte-typewriter";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  let isBlurred = writable(true);

  function observeVisibility(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isBlurred.set(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }

  onMount(() => {
    function handleScroll() {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const viewportHeight = window.innerHeight;
      const sectionTop = aboutSection.getBoundingClientRect().top;

      let scrollRatio = Math.max(
        0,
        Math.min(1, (viewportHeight - sectionTop) / viewportHeight)
      );

      const lineLength = `${scrollRatio * 100}%`;

      const beforeLine = document.getElementById("beforeLine");
      const afterLine = document.getElementById("afterLine");

      if (beforeLine) beforeLine.style.width = lineLength;
      if (afterLine) afterLine.style.width = lineLength;
    }

    // Enhanced scroll animation observer
    function setupScrollAnimations() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      animatedElements.forEach(el => observer.observe(el));
    }

    window.addEventListener("scroll", handleScroll);
    setupScrollAnimations();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let steps = [
    {
      name: "SakuraBot",
      icon: "fa-solid fa-robot",
      href: "https://github.com/BrianBeilby/SakuraBot",
      description:
        "SakuraBot is a multipurpose Discord bot created with Discord.js, Node.js & MongoDB! SakuraBot has many functionalities including moderation, language translation, and music playing!",
      technologies: ["Discord.js", "Node.js", "MongoDB", "JavaScript"]
    },
    {
      name: "SkeeterStock",
      icon: "fa-solid fa-qrcode",
      href: "https://github.com/vstatnyk/Inventory-tracking-app-CSC190-191",
      description:
        "A Full Stack React.js, Node.js + Express.js & Firebase + MongoDB web application built for San Mateo County offering seamless inventory management for their Mosquito & Vector Control District!",
      technologies: ["React", "Node.js", "Express.js", "Firebase", "MongoDB", "JavaScript"]
    },
    {
      name: "SacStateIEEE",
      icon: "fa-solid fa-building",
      href: "https://sacstateieee.com/",
      description:
        "SacStateIEEE is a Next.js & TailwindCSS web application, hosted on Vercel, that offers a user-friendly platform to display information about the IEEE club at Sac State!",
      technologies: ["Next.js", "TailwindCSS", "Vercel", "JavaScript"]
    },
    {
      name: "Kernel Panic",
      icon: "fa-solid fa-terminal",
      href: "https://github.com/BrianBeilby/Kernel-Panic",
      description:
        "Kernel Panic is a simplistic yet functional operating system built using C within a specialized SpedeVM environment implementing process scheduling, interrupt handling, system calls, mutexes/semaphores, and more!",
      technologies: ["C", "Operating Systems", "System Programming"]
    },
  ];

  let heroVisible = false;
  let projectsVisible = false;

  function observeHero(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }

  function observeProjects(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    use:observeHero
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 min-h-[80vh] items-center"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 z-10 animate-on-scroll {heroVisible ? 'visible' : ''}"
    >
      <h2
        class="typewriter-container font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg"
      >
        Hi! I'm <span class="poppins gradient-text">Brian</span>
        <span class="text-slate-800 dark:text-slate-200 font-bold">Beilby</span>
        <br />
        <div class="mt-4">
          <Typewriter
            element="span"
            mode="loopOnce"
            interval={60}
            unwriteInterval={40}
            wordInterval={2000}
            cursor={true}
            keepCursorOnFinish={true}
          >
            <span class="poppins gradient-text">Front End Developer</span>
            <span class="poppins gradient-text">Back End Developer</span>
            <span class="poppins gradient-text">Full Stack Developer</span>
          </Typewriter>
        </div>
      </h2>

      <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
        My <span class="gradient-text font-semibold">favorite tech</span> includes JavaScript
        (Next.js or SvelteKit), TailwindCSS, Node.js + Express.js & MongoDB or Firebase!
      </p>

      <div class="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center">
        <a
          href="https://www.linkedin.com/in/brianbeilby/"
          target="_blank"
          class="group relative overflow-hidden px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25 hover:scale-105 z-10"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 group-hover:translate-x-full z-0 duration-300"
          />
          <span class="relative z-10 flex items-center gap-2">
            Get in touch
            <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
          </span>
        </a>

        <a
          href="#projects"
          class="group px-8 py-4 text-base sm:text-lg font-semibold rounded-full border-2 border-accent-500/50 text-accent-400 hover:bg-accent-500/10 transition-all duration-300 hover:border-accent-400"
        >
          <span class="flex items-center gap-2">
            View Projects
            <i class="fa-solid fa-arrow-down text-sm transition-transform duration-300 group-hover:translate-y-1"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="stage-cube-cont hidden lg:flex">
      <div class="cubespinner">
        <div class="face1">
          <i class="fa-brands fa-react" />
        </div>
        <div class="face2">
          <i class="fa-brands fa-node-js" />
        </div>
        <div class="face3">
          <i class="fa-brands fa-git-alt" />
        </div>
        <div class="face4">
          <i class="fa-brands fa-html5" />
        </div>
        <div class="face5">
          <i class="fa-brands fa-css3-alt" />
        </div>
        <div class="face6">
          <i class="fa-brands fa-python" />
        </div>
      </div>
    </div>
  </section>
  <section
    class="py-20 lg:py-32 flex flex-col gap-16 lg:gap-24"
    id="projects"
    use:observeProjects
  >
    <div class="flex flex-col gap-6 text-center z-10 animate-on-scroll {projectsVisible ? 'visible' : ''}">
      <h6 class="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium">
        A few of my creative endeavors
      </h6>
      <h3 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-shadow-lg">
        <div class="animate-text-shimmer">
          Curious to <span class="gradient-text">see</span> my work?
        </div>
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Here are some projects I've worked on, showcasing my skills in full-stack development,
        system programming, and modern web technologies.
      </p>
    </div>

    <!-- Enhanced project grid with staggered animations -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 z-10">
      <Step step={steps[0]} delay={0}>
        <p>
          SakuraBot is a multipurpose Discord bot created with <strong
            class="gradient-text">Discord.js, Node.js & MongoDB!</strong
          > SakuraBot has many functionalities including moderation, language translation,
          and music playing!
        </p>
      </Step>

      <Step step={steps[2]} delay={200}>
        <p>
          SacStateIEEE is a <strong class="gradient-text"
            >Next.js & TailwindCSS</strong
          >
          web application, hosted on
          <strong class="gradient-text">Vercel</strong>, that offers a
          user-friendly platform to display information about the IEEE club at
          Sac State!
        </p>
      </Step>

      <Step step={steps[1]} delay={400}>
        <p>
          A Full Stack <strong class="gradient-text">React.js</strong>,
          <strong class="gradient-text">Node.js + Express.js</strong>
          & <strong class="gradient-text">Firebase + MongoDB</strong> web application
          built for San Mateo County offering seamless inventory management for their
          Mosquito & Vector Control District!
        </p>
      </Step>

      <div class="lg:col-span-2 xl:col-span-1 xl:col-start-2">
        <Step step={steps[3]} delay={600}>
          <p>
            Kernel Panic is a simplistic yet functional operating system built
            using C within a specialized SpedeVM environment implementing <strong
              class="gradient-text"
              >process scheduling, interrupt handling, system calls,
              mutexes/semaphores</strong
            >, and more!
          </p>
        </Step>
      </div>
    </div>
  </section>
  <section
    use:observeVisibility
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative z-10"
  >
    <!-- Enhanced header with animated lines -->
    <div class="flex flex-col gap-6 text-center relative py-8">
      <div
        id="beforeLine"
        class="absolute top-0 left-0 h-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full transition-all duration-1000 ease-out"
        style="width: 0%;"
      ></div>
      <div
        id="afterLine"
        class="absolute bottom-0 right-0 h-2 bg-gradient-to-l from-accent-500 to-primary-500 rounded-full transition-all duration-1000 ease-out"
        style="width: 0%;"
      ></div>

      {#if $isBlurred}
        <!-- This content will not be visible initially but will fade in/out based on isBlurred state -->
      {:else}
        <div transition:fade={{ duration: 1500 }} class="space-y-4">
          <h6 class="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium">
            Want to know more?
          </h6>
          <h3 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-shadow-lg">
            A bit <span class="gradient-text">about</span> me.
          </h3>
        </div>
      {/if}
    </div>

    {#if $isBlurred}
      <!-- This content will not be visible initially but will fade in/out based on isBlurred state -->
    {:else}
      <div
        class="flex flex-col gap-12 sm:gap-16 md:gap-20 max-w-4xl mx-auto px-6"
        transition:fade={{ duration: 1500 }}
      >
        <!-- Main bio -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5 rounded-2xl blur-3xl"></div>
          <p
            class="relative mx-auto text-center text-slate-700 dark:text-slate-200 font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed p-8 rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-sm border border-accent-500/20"
          >
            I am a recent Computer Science graduate from <span
              class="gradient-text font-bold"
              >California State University, Sacramento</span
            >. My experience spans many different types
            of projects from web applications to command line applications. Outside
            of coding, I am an avid weightlifter and music enthusiast.
          </p>
        </div>

        <!-- Secondary text -->
        <p
          class="mx-auto text-center text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl"
        >
          As I transition to the professional world, I am eager to bring my
          blend of creativity and technical expertise to a team passionate about
          delivering impactful software solutions.
        </p>

        <!-- Skills highlight -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="text-center p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-sm border border-accent-500/20 hover:border-accent-400/40 transition-all duration-300 group">
            <div class="text-3xl mb-3 text-accent-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fa-solid fa-code"></i>
            </div>
            <h4 class="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Full Stack Development</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Modern web applications with React, Svelte, and Node.js</p>
          </div>

          <div class="text-center p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 group">
            <div class="text-3xl mb-3 text-primary-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fa-solid fa-database"></i>
            </div>
            <h4 class="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Database Design</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">MongoDB, Firebase, and relational database systems</p>
          </div>

          <div class="text-center p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-sm border border-accent-500/20 hover:border-accent-400/40 transition-all duration-300 group">
            <div class="text-3xl mb-3 text-accent-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fa-solid fa-microchip"></i>
            </div>
            <h4 class="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">System Programming</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Low-level programming and operating system development</p>
          </div>
        </div>
      </div>
    {/if}
  </section>
</main>

<style>
  .typewriter-container {
    --cursor-color: #a78bfa; /* Green cursor */
    --cursor-width: 6px; /* Thicker cursor */
  }

  @keyframes text-shimmer {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  .animate-text-shimmer {
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      110deg,
      #1e293b 45%,
      #6366f1 55%,
      #1e293b
    );
    background-size: 250% 100%;
    animation: text-shimmer 4s ease-out infinite alternate;
  }

  :global(.dark) .animate-text-shimmer {
    background-image: linear-gradient(
      110deg,
      #e2e8f0 45%,
      #1e293b 55%,
      #e2e8f0
    );
  }
</style>
