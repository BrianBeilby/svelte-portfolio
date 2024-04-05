<script>
  import Step from "./Step.svelte";
  import Typewriter from "svelte-typewriter";
  import { onMount } from "svelte";

  onMount(() => {
    function handleScroll() {
      const aboutSection = document.getElementById("about");
      const viewportHeight = window.innerHeight;
      const sectionTop = aboutSection.getBoundingClientRect().top;

      let scrollRatio = Math.max(
        0,
        Math.min(1, (viewportHeight - sectionTop) / viewportHeight)
      );

      const lineLength = `${scrollRatio * 100}%`;

      document.getElementById("beforeLine").style.width = lineLength;
      document.getElementById("afterLine").style.width = lineLength;
    }

    window.addEventListener("scroll", handleScroll);

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
    },
    {
      name: "InventoryManagement",
      icon: "fa-solid fa-qrcode",
      href: "https://github.com/vstatnyk/Inventory-tracking-app-CSC190-191",
      description:
        "A Full Stack React.js, Node.js + Express.js & Firebase + MongoDB web application built for San Mateo County offering seamless inventory management for their Mosquito & Vector Control District!",
    },
    {
      name: "SacStateIEEE",
      icon: "fa-solid fa-building",
      href: "https://sacstateieee.com/",
      description:
        "SacStateIEEE is a Next.js & TailwindCSS web application, hosted on Vercel, that offers a user-friendly platform to display information about the IEEE club at Sac State!",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 z-10"
    >
      <h2
        class="typewriter-container font-semibold text-4xl sm:text-5xl md:text-6xl"
      >
        Hi! I'm <span class="poppins text-violet-400">Brian</span> Beilby
        <br />
        <Typewriter
          element="span"
          mode="loopOnce"
          interval={60}
          unwriteInterval={40}
          wordInterval={2000}
          cursor={true}
          keepCursorOnFinish={true}
        >
          <span class="poppins text-violet-400">Front End Developer</span>
          <span class="poppins text-violet-400">Back End Developer</span>
          <span class="poppins text-violet-400">Full Stack Developer</span>
        </Typewriter>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes JavaScript
        (Next.js or SvelteKit), TailwindCSS, Node.js + Express.js & MongoDB or Firebase!
      </p>
      <button
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 z-10"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </button>
    </div>
    <!-- <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Zetane Engine"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div> -->
    <div class="stage-cube-cont hidden sm:flex">
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
    class="py-20 lg:py-32 flex flex-col gap-24 slide-in-up"
    id="projects"
  >
    <div class="flex flex-col gap-2 text-center z-10">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <div class="animate-text-shimmer">
          Curious to <span class="poppins text-violet-400">see</span> my work?
        </div>
      </h3>
    </div>
    <!-- <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200 z-10"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 z-10">
      <Step step={steps[0]}>
        <p>
          SakuraBot is a multipurpose Discord bot created with <strong
            class="text-violet-400">Discord.js, Node.js & MongoDB!</strong
          > SakuraBot has many functionalities including moderation, language translation,
          and music playing!
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          SacStateIEEE is a <strong class="text-violet-400"
            >Next.js & TailwindCSS</strong
          >
          web application, hosted on
          <strong class="text-violet-400">Vercel</strong>, that offers a
          user-friendly platform to display information about the IEEE club at
          Sac State!
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          A Full Stack <strong class="text-violet-400">React.js</strong>,
          <strong class="text-violet-400">Node.js + Express.js</strong>
          & <strong class="text-violet-400">Firebase + MongoDB</strong> web application
          built for San Mateo County offering seamless inventory management for their
          Mosquito & Vector Control District!
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div class="flex flex-col gap-2 text-center relative py-4">
      <div
        id="beforeLine"
        class="absolute top-0 left-0 h-1.5 bg-violet-700"
        style="width: 0%;"
      ></div>
      <div
        id="afterLine"
        class="absolute bottom-0 right-0 h-1.5 bg-violet-700"
        style="width: 0%;"
      ></div>
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p
      class="mx-auto poppins text-center text-slate-200 font-semibold text-lg sm:text-xl md:text-2xl"
    >
      I am currently a Computer Science student at <span
        class="poppins text-violet-400"
        >California State University, Sacramento</span
      > set to graduate this semester. My experience spans many different types of
      projects from web applications to command line applications. Outside of coding,
      I am an avid weightlifter and music enthusiast.
    </p>
    <p
      class="mx-auto poppins text-center text-slate-300 text:md sm:text:lg md:text-xl"
    >
      As I transition to the professional world, I am eager to bring my blend of
      creativity and technical expertise to a team passionate about delivering
      impactful software solutions.
    </p>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
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
      #e2e8f0 45%,
      #1e293b 55%,
      #e2e8f0
    );
    background-size: 250% 100%;
    animation: text-shimmer 4s ease-out infinite alternate;
  }

  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .slide-in-up {
    animation: slideInUp 1.5s ease-out forwards;
  }
</style>
