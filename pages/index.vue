<template>
  <Navbar />
  <Landing />
  <VideoFeed />
  <About />
  <Card id="projects" class="m-5" >
    <Card class="ms-5 me-5">
      <h1 class="text-center text-4xl font-bold font-calistoga">Projects</h1>
    </Card>
    <ProjectCard Image="ps3" ProjectTitle="Redesigned PS3 Slim" videoLink="https://youtu.be/B34Np3TN8Rs?si=SUrDL5AkVTuffP1H" downloadLink="https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art" ProjectDescription="Turing the boring PlayStaion 3 Slim design into something betrter with the a combination of laser cutting and 3d printing."/>
    <ProjectCard Image="case" ProjectTitle="Diskette://Case" videoLink="https://youtu.be/kKrAZ_lCJe4?si=PDwqkvX83yAjxRs9Y" downloadLink="https://www.printables.com/model/1073452-diskette-case-modular-open-source-nas-chassis" ProjectDescription="A fully 3d printed, modular computer case optimized to be a NAS chassis. Accommodates a fully passively cooled ITX board, eight 2.5 in drives, and a full ATX sized PSU." />
    <ProjectCard Image="book" ProjectTitle="Custom MacBook Logo" videoLink="https://youtu.be/MmODnbPsxqY?si=vHDM1XwtUzUPnBgH" downloadLink="https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art" ProjectDescription="With the help of some overhead projector transparencies, this 2010 MacBook Pro now has a custom retro Apple logo."/>
  </Card>
  <Contact />
  <Footer />
  </template>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Imbue:opsz,wght@10..100,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  body {
    margin: 0;
  }
  html { scroll-behavior: smooth; }

  :root {
    color-scheme: light dark;
  }

  .dark {
    color-scheme: dark;
  }

  /* Transition for theme switching */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
  </style>
  <script setup lang="ts">
  import LanternLanding from "~/components/LanternLanding.vue";
  import {Card} from "~/components/ui/card";

  useSeoMeta({
    title: 'Diskette Kitchen',
    ogTitle: 'Diskette Kitchen',
    description: 'Tech involved projects, repairs, and general shenanigans.',
    ogDescription: 'Tech involved projects, repairs, and general shenanigans.',
  })
  </script>