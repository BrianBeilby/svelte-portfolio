<script>
  import TechBadge from './TechBadge.svelte';
  export let step;
  export let delay = 0;

  let cardElement;
  let isVisible = false;

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible = true;
        }, delay);
      }
    });
  }

  function observeCard(node) {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
</script>

<div
  bind:this={cardElement}
  use:observeCard
  class="animate-on-scroll {isVisible ? 'visible' : ''}"
  style="animation-delay: {delay}ms"
>
  <a
    href={step.href}
    target="_blank"
    class="group relative p-6 sm:p-8 flex flex-col gap-6 rounded-2xl border border-accent-500/20 bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm text-center cursor-pointer transition-all duration-500 hover:border-accent-400/40 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2 hover:scale-[1.02] z-10"
  >
    <!-- Background gradient effect -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Icon container with enhanced styling -->
    <div class="relative z-10">
      <div
        class="relative bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-accent-500/30 grid place-items-center w-20 h-20 sm:w-24 sm:h-24 text-4xl sm:text-5xl -mt-12 sm:-mt-14 mx-auto rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-accent-500/25"
      >
        <i class="{step.icon} text-accent-400 group-hover:text-accent-300 transition-colors duration-300" />

        <!-- Glow effect -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col gap-4 flex-1">
      <h3 class="font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100 group-hover:text-accent-300 transition-colors duration-300">
        {step.name}
      </h3>

      <div class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <slot />
      </div>

      <!-- Tech stack badges -->
      {#if step.technologies}
        <div class="flex flex-wrap gap-2 justify-center mt-2">
          {#each step.technologies as tech}
            <TechBadge {tech} size="xs" />
          {/each}
        </div>
      {/if}
    </div>

    <!-- Call to action -->
    <div class="relative z-10 flex justify-center mt-auto pt-4">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 text-accent-600 dark:text-accent-300 font-medium text-sm transition-all duration-300 group-hover:from-accent-500/30 group-hover:to-primary-500/30 group-hover:border-accent-400/50 group-hover:text-accent-700 dark:group-hover:text-accent-200"
      >
        <span>View Project</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
      </div>
    </div>

    <!-- Hover overlay -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </a>
</div>
