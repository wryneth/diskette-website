<template>
  <div class="fixed top-5 left-0 right-0 z-3 mx-auto w-full max-w-2xl p-5 ">
    <nav
        class="flex h-16 justify-between rounded-full border border-white/20 bg-white/50 px-2 shadow-sm backdrop-blur-md border-black-40 dark:bg-black/0">

      <!-- Desktop Navigation -->
      <div class="hidden font-ubuntu items-center md:flex">


        <a href="/" class="ms-1 me-5 hover:text-emerald-400">
          <House class="h-10 w-10 rounded-full p-2 bg-gray-200"/>
        </a>


        <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="px-3 text-m font-medium transition-colors hover:text-orange-400 ms-1"
        >{{ item.name }}
        </a>
        <div class="ms-11">
          <ThemeToggle/>

        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle/>

        <button
            @click="isMenuOpen = !isMenuOpen"
            class="me-2 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:text-orange-400"
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
        <a href="/" class="px-3 py-2 text-sm font-medium transition-colors">
          Back home
        </a>
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
import {Menu, X, House} from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navigationItems = [
  {name: '/', href: '#'},
  {name: 'About', href: '#about'},
  {name: 'Lighting', href: '#light'},
  {name: 'Patterns', href: '#options'},
  {name: 'DIY', href: '#with-hands'},
  {name: 'Updates', href: '#mail'},
]
</script>