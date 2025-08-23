<script setup lang="ts">
import Navbar from "~/components/home/Navbar.vue";
import Landing from "~/components/home/Landing.vue";
import VideoFeed from "~/components/home/VideoFeed.vue";
import LanternLanding from "~/components/home/GlowLand.vue";
import About from "~/components/home/About.vue";
import Contact from "~/components/home/Contact.vue";
import Footer from "~/components/Footer.vue";
import ProjectCard from "~/components/home/ProjectCard.vue";
</script>

<template>
  <Landing/>
  <Navbar/>
  <VideoFeed/>
  <About/>
  <Card id="projects" class="m-5">
    <Card class="ms-5 me-5">
      <h1 class="text-center text-4xl font-bold font-calistoga">Projects</h1>
    </Card>
    <ProjectCard Image="ps3" ProjectTitle="Redesigned PS3 Slim"
                 videoLink="https://youtu.be/B34Np3TN8Rs?si=SUrDL5AkVTuffP1H"
                 downloadLink="https://www.printables.com/model/1315364-better-ps3-slim-case"
                 ProjectDescription="Turing the boring PlayStaion 3 Slim design into something betrter with the a combination of laser cutting and 3d printing."/>
    <ProjectCard Image="case" ProjectTitle="Diskette://Case"
                 videoLink="https://youtu.be/kKrAZ_lCJe4?si=PDwqkvX83yAjxRs9Y"
                 downloadLink="https://www.printables.com/model/1073452-diskette-case-modular-open-source-nas-chassis"
                 ProjectDescription="A fully 3d printed, modular computer case optimized to be a NAS chassis. Accommodates a fully passively cooled ITX board, eight 2.5 in drives, and a full ATX sized PSU."/>
    <ProjectCard Image="book" ProjectTitle="Custom MacBook Logo"
                 videoLink="https://youtu.be/MmODnbPsxqY?si=vHDM1XwtUzUPnBgH"
                 downloadLink="https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art"
                 ProjectDescription="With the help of some overhead projector transparencies, this 2010 MacBook Pro now has a custom retro Apple logo."/>
  </Card>
  <Contact/>
  <LanternLanding/>
  <Footer/>
</template>

