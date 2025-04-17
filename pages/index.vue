<template>
  <Navbar />
  <Landing />
  <VideoFeed />
  <About />
  <ProjectCard Image="case" ProjectTitle="Diskette://Case" videoLink="https://youtu.be/kKrAZ_lCJe4?si=PDwqkvX83yAjxRs9Y" downloadLink="https://www.printables.com/model/1073452-diskette-case-modular-open-source-nas-chassis" ProjectDescription="A fully 3d printed, modular computer case optimized to be a NAS chassis. Accommodates a fully passively cooled ITX board, eight 2.5 in drives, and a full ATX sized PSU." />
  <ProjectCard ProjectTitle="Disassembled iPod Shuffle" videoLink="https://youtu.be/pcYXZlmIuOg?si=joGwtisLZCiHDdxt" downloadLink="https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art" ProjectDescription="Exploded view of an iPod Shuffle 4th generation, showing all the internal parts, & specifications in a shadow box."/>
  <ProjectCard Image="book" ProjectTitle="Custom MacBook Logo" videoLink="https://youtu.be/MmODnbPsxqY?si=vHDM1XwtUzUPnBgH" downloadLink="https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art" ProjectDescription="With the help of some overhead projector transparencies, this 2010 MacBook Pro now has a custom retro Apple logo."/>
  <!--  <CollectLanding /> -->
  <Contact />
  <Footer />
  </template>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Imbue:opsz,wght@10..100,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  body {
    margin: 0;
  }
  html { scroll-behavior: smooth; }

  /* Add this to your main CSS file or component */
  :root {
    color-scheme: light dark;
  }

  /* Enable dark mode based on the .dark class */
  .dark {
    color-scheme: dark;
  }

  /* Transition for theme switching */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
  </style>
  <script setup lang="ts">
  useSeoMeta({
    title: 'Diskette Kitchen',
    ogTitle: 'Diskette Kitchen',
    description: 'Tech involved projects, repairs, and general shenanigans.',
    ogDescription: 'Tech involved projects, repairs, and general shenanigans.',
  })
  </script>