<template>
  <div>
    <Nav />
    <Welcome />
    <NewVideo />
    <About />
    <Projects />
    <Collection />
    <Contact />
    <Footer />


  </div>
</template>
<script setup lang="ts">
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
