<template>
  <div class="fixed top-5 left-0 right-0 z-3 mx-auto w-full max-w-5xl p-5 ">
    <nav
        class="flex h-16 items-center justify-between rounded-full border border-white/20 bg-white/50 px-6 shadow-sm backdrop-blur-md border-black-40 dark:bg-black/0">
      <!-- Logo -->
      <div class=" flex items-center">
          <img src="/images/eyes.svg" alt="Weave" class="w-14 h-14"/>

      </div>

      <!-- Desktop Navigation -->
      <div class="hidden font-ubuntu items-center gap-1 md:flex p-2">
        <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="rounded-full px-3 py-1.5 text-m font-medium transition-colors hover:bg-white/10 dark:hover:bg-slate-800/20"
            :class="{
            'bg-white/20 text-gray-900 dark:bg-slate-800/20 dark:text-white': item.current,
            'text-gray-700 dark:text-gray-300': !item.current
          }">{{ item.name }}</a>

        <SocialLinks />

        <button @click="toggleTheme" aria-label="Toggle theme">
          <Icon class="ms-5 w-8 h-8" icon="ri:palette-fill" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <SocialLinks />

        <button
            @click="toggleTheme"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-900 hover:bg-white/20 dark:bg-slate-800/10 dark:text-white dark:hover:bg-slate-800/20"
            aria-label="Toggle theme">
          <Icon class="ms-5 w-8 h-8" icon="ri:palette-fill" />

        </button>

        <!-- Menu Toggle -->
        <button
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-900 hover:bg-white/20 dark:bg-slate-800/10 dark:text-white dark:hover:bg-slate-800/20"
            aria-expanded="false"
        >
          <Menu v-if="!isMenuOpen" class="h-4 w-4"/>
          <X v-else class="h-4 w-4"/>
          <span class="sr-only">Toggle menu</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Dropdown -->
    <div
        v-if="isMenuOpen"
        class="mt-2 overflow-hidden rounded-xl border border-white/60 bg-white/50 backdrop-blur-md dark:border-black-40 dark:bg-black/30 md:hidden"
    >
      <div class="flex flex-col p-2">
        <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 dark:hover:bg-slate-800/20"
            :class="{
            'bg-white/20 text-gray-900 dark:bg-slate-800/20 dark:text-white': item.current,
            'text-gray-700 dark:text-gray-300': !item.current
          }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Menu, X} from 'lucide-vue-next'
import {Icon} from "@iconify/vue";

const isMenuOpen = ref(false)
const isDark = ref(false)

const navigationItems = [
  {name: 'Home', href: '#', current: true},
  {name: 'Videos', href: '#vidfeed', current: false},
  {name: 'About', href: '#about', current: false},
  {name: 'Projects', href: '#projects', current: false},
  {name: 'Collection', href: '#collect', current: false},
  {name: 'Contact', href: '#contact', current: false},
  {name: 'Store', href: 'https://store.diskettekitchen.com', current: false},
  {name: 'Extras', href: 'https://extras.diskettekitchen.com', current: false},

]

// Apply theme when isDark changes
watch(isDark, () => {
  applyTheme()
})

function applyTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

function toggleTheme() {
  isDark.value = !isDark.value;
  document.getElementById("button").style.transform = "rotate(20deg)";
}
</script>

<style>

.dark body {
  background-color: #0f172a; /* slate-900 */
  color: #ffffff;
}
</style>