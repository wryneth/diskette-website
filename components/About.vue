
<template>
  <UCard id="about">


    <template #header>
      <h1 class="title">About</h1>
    </template>

    <body>
    <div class="container">
      <NuxtImg format="webp" src="/images/studio-headshot.png" alt="Image" class="responsive-image" />
      <div class="text">
        <p>Well hi there, I'm Wren. I've filled this little room with everything I think is cool,
          from old tech, to new tech, to audio. I stumble my way through repairs, projects and the occasional rant armed with my trusty heirloom apron and two remaining braincells.</p>
      </div>
    </div>
    </body>

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,441&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');

.title {
  text-align: center;
  font-family: 'Imbue', serif;
  font-size: 40px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.responsive-image {
  width: 100%;
  max-width: 750px;
  border-radius: 40px;
  height: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease-in-out;
}
.responsive-image:hover {
  transform: scale(1.02);
}

.text {
  padding-left: 75px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Young Serif', serif;
  font-size: 30px;
  text-align: center;
}

@media (max-width: 1500px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .text {
    padding-left: 0;
    margin-top: 20px;
    text-align: center;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
<script setup lang="ts">
</script>