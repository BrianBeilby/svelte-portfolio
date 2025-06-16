<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { isDarkMode } from '$lib/theme.js';
  import { onMount } from 'svelte';

  let y;
  let innerWidth = 0;
  let innerHeight = 0;

  function goTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    // Initialize theme system once
    isDarkMode.init();
  });
</script>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen text-slate-900 dark:text-white transition-colors duration-300"
>
  <!-- Enhanced scroll to top button -->
  <div
    class={"fixed bottom-6 right-6 duration-300 z-[100] " +
      (y > 400
        ? " opacity-100 pointer-events-auto translate-y-0"
        : " pointer-events-none opacity-0 translate-y-4")}
  >
    <button
      on:click={goTop}
      class="group relative p-4 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white shadow-lg hover:shadow-xl hover:shadow-accent-500/25 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <i class="fa-solid fa-arrow-up text-lg transition-transform duration-300 group-hover:-translate-y-1" />

      <!-- Glow effect -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
    </button>
  </div>

  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
