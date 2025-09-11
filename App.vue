<script setup lang="ts">
useSeoMeta({
  title: 'Diskette://Kitchen',
  ogTitle: 'Diskette://Kitchen',
  description: 'Sharing my passion for technology both old and new, projects, and education.',
  ogDescription: 'Sharing my passion for technology both old and new, projects, and education.',
})

const { initialize } = useHotjar()

initialize()
</script>

<template>
<NuxtPage></NuxtPage>
</template>

<style>
body {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}

:root {
  color-scheme: light dark;
}

.dark {
  color-scheme: dark;
}
</style>