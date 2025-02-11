<template>

  <div>
    <Nav />
    <Welcome />
    <Scroll />
    <VidFeed />
    <About />
    <Projects />
    <Collect />
    <Contact />
    <Footer />


  </div>
</template>
<script setup lang="ts">

import Scroll from "~/components/Scroll.vue";

useSeoMeta({
  title: 'Diskette Kitchen',
  ogTitle: 'Diskette Kitchen',
  description: 'Tech videos about basically anything I find interesting.',
  ogDescription: 'Tech videos about basically anything I find interesting.',
  ogImage: 'https://example.com/image.png',
})
</script>

<style>
html{
  scroll-behavior: smooth;
}

</style>
