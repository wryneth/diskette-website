<script setup lang="ts">

</script>

<template>
  <div id='with-hands' class="p-10">

    <Card class="mb-5">
      <h1 class="text-center font-calistoga text-6xl">Build Your Own</h1>
    </Card>

    <div class="grid md:grid-cols-2 gap-5">
      <Card class="p-5">
        <h1 class="font-calistoga text-5xl text-center m-5">Kit</h1>
        <img class="rounded-lg" src="/images/glow/parts.webp" alt="non assembled parts of a lantern">
        <h1 class="font-ubuntu font-bold text-xl text-center">All the things you need to assemble your own lantern</h1>

        <a href="https://store.diskettekitchen.com/collections/lantern-kits">
          <Button class="w-full">Purchase</Button>
        </a>
      </Card>

      <Card class="p-5">
        <h1 class="font-calistoga text-5xl text-center m-5">Files</h1>
        <img class="rounded-lg" src="/images/glow/files.webp" alt="lantern design files">
        <h1 class="font-ubuntu font-bold text-xl text-center">Just the design files to cut and assemble everything by
          yourself</h1>
        <a href="https://store.diskettekitchen.com/collections/glow-files">

          <h1 class="font-ubuntu text-lg text-center ">Files will be available soon while we refine them for maximum
            ease of assembly. Get notified when they are available by joining our <a class="underline" href="#mail">mailing
              list</a></h1>
          <!--
          <Button class="w-full">Purchase</Button>
          -->
        </a>
      </Card>
    </div>
    <Card class="mt-5 p-5">
      <h1 class="text-center text-xl font-ubuntu text-gray-500">
        Firmware comes pre flashed in kits and is available for download on <a class="underline"
                                                                               href="https://github.com/diskettekitchen">Github</a>
      </h1>

      <h1 class="text-center text-lg font-ubuntu text-gray-500">*Both kit and files include written and video assembly
        instructions, if you have further issues you are welcome to contact us at
        <a href="mailto:support@diskettekitchen.com" class="underline">support@diskettekitchen.com</a>
      </h1>
    </Card>

  </div>
</template>

<style scoped>

</style>