<script>
  export let tech;
  export let size = 'sm'; // 'xs', 'sm', 'md', 'lg'
  export let variant = 'default'; // 'default', 'outlined', 'minimal'

  const techConfig = {
    'JavaScript': { color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border-yellow-500/30', icon: 'fa-brands fa-js' },
    'TypeScript': { color: 'bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30', icon: 'fa-brands fa-js' },
    'React': { color: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/30', icon: 'fa-brands fa-react' },
    'Next.js': { color: 'bg-gray-500/20 text-gray-600 dark:text-gray-300 border-gray-500/30', icon: 'fa-solid fa-triangle' },
    'Svelte': { color: 'bg-orange-500/20 text-orange-600 dark:text-orange-300 border-orange-500/30', icon: 'fa-solid fa-fire' },
    'SvelteKit': { color: 'bg-orange-500/20 text-orange-600 dark:text-orange-300 border-orange-500/30', icon: 'fa-solid fa-fire' },
    'Node.js': { color: 'bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30', icon: 'fa-brands fa-node-js' },
    'Express.js': { color: 'bg-gray-500/20 text-gray-600 dark:text-gray-300 border-gray-500/30', icon: 'fa-solid fa-server' },
    'MongoDB': { color: 'bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30', icon: 'fa-solid fa-database' },
    'Firebase': { color: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30', icon: 'fa-solid fa-fire' },
    'TailwindCSS': { color: 'bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/30', icon: 'fa-solid fa-palette' },
    'CSS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-600/30', icon: 'fa-brands fa-css3-alt' },
    'HTML': { color: 'bg-orange-600/20 text-orange-700 dark:text-orange-400 border-orange-600/30', icon: 'fa-brands fa-html5' },
    'Python': { color: 'bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30', icon: 'fa-brands fa-python' },
    'C': { color: 'bg-blue-700/20 text-blue-800 dark:text-blue-400 border-blue-700/30', icon: 'fa-solid fa-code' },
    'Git': { color: 'bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30', icon: 'fa-brands fa-git-alt' },
    'Discord.js': { color: 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border-indigo-500/30', icon: 'fa-brands fa-discord' },
    'Vercel': { color: 'bg-gray-500/20 text-gray-600 dark:text-gray-300 border-gray-500/30', icon: 'fa-solid fa-cloud' },
    'Operating Systems': { color: 'bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30', icon: 'fa-solid fa-microchip' },
    'System Programming': { color: 'bg-red-600/20 text-red-700 dark:text-red-400 border-red-600/30', icon: 'fa-solid fa-cogs' },
  };

  $: config = techConfig[tech] || { color: 'bg-accent-500/20 text-accent-600 dark:text-accent-300 border-accent-500/30', icon: 'fa-solid fa-tag' };
  
  $: sizeClasses = {
    'xs': 'px-2 py-1 text-xs',
    'sm': 'px-2.5 py-1.5 text-xs',
    'md': 'px-3 py-2 text-sm',
    'lg': 'px-4 py-2.5 text-base'
  }[size];

  $: variantClasses = {
    'default': `${config.color} border backdrop-blur-sm`,
    'outlined': `bg-transparent ${config.color.split(' ')[1]} border-2 ${config.color.split(' ')[2]}`,
    'minimal': `bg-transparent ${config.color.split(' ')[1]} border-none`
  }[variant];
</script>

<span
  class="inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 hover:scale-105 {sizeClasses} {variantClasses}"
>
  {#if config.icon}
    <i class="{config.icon} {size === 'xs' ? 'text-xs' : size === 'sm' ? 'text-sm' : 'text-base'}"></i>
  {/if}
  <span>{tech}</span>
</span>
