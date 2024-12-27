<template>

  <div>
    <Nav />
    <Welcome />
    <VidFeed />
    <About />
    <Projects />
<!--    <Collection /> -->
    <Contact />


  </div>
</template>
<script setup lang="ts">
import RecentVideos from "~/components/RecentVideos.vue";

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
