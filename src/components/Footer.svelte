<footer
  class="relative py-12 sm:py-16 bg-gradient-to-t from-slate-200/50 dark:from-slate-900/50 to-transparent border-t border-accent-500/20 backdrop-blur-sm z-10"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5"></div>

  <div class="relative z-10 flex flex-col gap-8 justify-center items-center max-w-4xl mx-auto px-6">
    <!-- Main contact info -->
    <div class="text-center space-y-4">
      <h3 class="text-2xl sm:text-3xl font-bold gradient-text">
        Let's work together
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-md mx-auto">
        I'm always interested in new opportunities and exciting projects.
      </p>
    </div>

    <!-- Email -->
    <div class="group">
      <a
        href="mailto:brian@brianbeilby.dev"
        class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 font-semibold text-accent-700 dark:text-accent-300 hover:text-accent-800 dark:hover:text-accent-200 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 hover:scale-105"
      >
        <i class="fa-solid fa-envelope text-lg"></i>
        <span class="text-lg">brian@brianbeilby.dev</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></i>
      </a>
    </div>

    <!-- Social links -->
    <div class="flex gap-6 items-center">
      <a
        target="_blank"
        href="https://github.com/BrianBeilby"
        class="group relative p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 border border-slate-300/30 dark:border-slate-600/30 hover:border-accent-500/50 transition-all duration-300 hover:scale-110"
        aria-label="GitHub Profile"
      >
        <i class="fa-brands fa-github text-2xl text-slate-600 dark:text-slate-300 group-hover:text-accent-400 transition-colors duration-300"></i>
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/brianbeilby/"
        class="group relative p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 border border-slate-300/30 dark:border-slate-600/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn Profile"
      >
        <i class="fa-brands fa-linkedin text-2xl text-slate-600 dark:text-slate-300 group-hover:text-primary-400 transition-colors duration-300"></i>
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </a>
    </div>

    <!-- Copyright -->
    <div class="text-center pt-8 border-t border-slate-300/50 dark:border-slate-700/50">
      <p class="text-slate-500 dark:text-slate-400 text-sm">
        © 2024 Brian Beilby. Built with
        <span class="text-accent-400">SvelteKit</span> &
        <span class="text-accent-400">TailwindCSS</span>
      </p>
    </div>
  </div>
</footer>
