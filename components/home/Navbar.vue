<template>
  <div class="fixed top-5 left-0 right-0 z-3 mx-auto w-full max-w-5xl p-5 ">
    <nav
        class="flex h-16 justify-between rounded-full border border-white/20 bg-white/50 px-2 shadow-sm backdrop-blur-md border-black-40 dark:bg-black/0">
      <a href="/">
        <img src="/images/eye.svg" alt="Eye" class="w-14 h-14"/>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden font-ubuntu items-center md:flex p-2">
        <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="rounded-full px-3 py-1.5 text-m font-medium transition-colors hover:bg-white/10 dark:hover:bg-slate-800/20"
        >{{ item.name }}
        </a>
        <Separator orientation="vertical" class="me-4"/>
        <ThemeToggle/>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <SocialLinks/>
        <ThemeToggle/>

        <button
            @click="isMenuOpen = !isMenuOpen"
            class="me-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-900 hover:bg-white/20 dark:bg-slate-800/10 dark:text-white dark:hover:bg-slate-800/20"
            aria-expanded="false"
        >
          <Menu v-if="!isMenuOpen" class="h-4 w-4"/>
          <X v-else class="h-4 w-4"/>
          <span class="sr-only">Toggle menu</span>
        </button>
      </div>

    </nav>

    <!-- Mobile Navigation Dropdown -->
    <div v-if="isMenuOpen"
         class="mt-2 overflow-hidden rounded-4xl border border-white/20 bg-white/50 backdrop-blur-md dark:border-black-40 dark:bg-black/30 md:hidden">
      <div class="flex flex-col p-3">
        <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="px-3 py-2 text-sm font-medium transition-colors">
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Menu, X} from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navigationItems = [
  {name: 'Videos', href: '#vidfeed'},
  {name: 'About', href: '#about'},
  {name: 'Projects', href: '#projects'},
  {name: 'Lanterns', href: '#glowland'},
//  {name: 'Studio', href: '#studio'},
  {name: 'Contact', href: '#contact'},
  {name: 'Store', href: 'https://store.diskettekitchen.com'},
  {name: 'Extras', href: 'https://extras.diskettekitchen.com'},

]
</script>