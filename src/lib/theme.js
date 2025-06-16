import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a shared theme store
function createThemeStore() {
  const { subscribe, set, update } = writable(true); // Default to dark mode

  return {
    subscribe,
    set,
    update,
    toggle: () => {
      update(dark => {
        const newDark = !dark;
        if (browser) {
          document.documentElement.classList.toggle('dark', newDark);
          localStorage.setItem('theme', newDark ? 'dark' : 'light');
          console.log('Theme toggled to:', newDark ? 'dark' : 'light');
          console.log('Document classes:', document.documentElement.className);
        }
        return newDark;
      });
    },
    init: () => {
      if (browser) {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          const isDark = savedTheme === 'dark';
          set(isDark);
          document.documentElement.classList.toggle('dark', isDark);
          console.log('Theme initialized from storage:', isDark ? 'dark' : 'light');
        } else {
          // Check system preference, default to dark if no preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const defaultDark = prefersDark !== false; // Default to dark
          set(defaultDark);
          document.documentElement.classList.toggle('dark', defaultDark);
          localStorage.setItem('theme', defaultDark ? 'dark' : 'light');
          console.log('Theme initialized from system/default:', defaultDark ? 'dark' : 'light');
        }
        console.log('Initial document classes:', document.documentElement.className);
      }
    }
  };
}

export const isDarkMode = createThemeStore();
