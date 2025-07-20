<template>
  <Card id="contact" class="m-5">
    <Card class="ms-5 me-5">
      <h1 class="text-center text-4xl font-bold font-calistoga">Contact</h1>
    </Card>
    <h1 class="font-ubuntu text-center lg:text-3xl text-xl ms-5 me-5">For questions, comments, ideas or business inquires, you can email at
      <a href="mailto:wren@diskettekitchen.com">wren@diskettekitchen.com</a></h1>
    <div class="flex align-center justify-center mb-5">
      <SocialLinks/>
    </div>
    <h1 class="ms-5 me-5 font-ubuntu text-center text-xl">You're also welcome to contact me via DM on any of these platforms</h1>
  </Card>
</template>

<script setup>
import {Card} from '@/components/ui/card'
</script>