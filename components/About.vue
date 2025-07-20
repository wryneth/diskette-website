<template>
  <Card id="about" class="m-5">
    <div class="card-container">
      <img class="rounded-lg" src="/images/wren.webp" alt="Headshot of wren"/>
      <div class="card-body">
        <h1 class="about-heading">About</h1>
        <h3 class="about-text">
          Well hi there, I'm Wren. I've filled this little room with everything I think is cool, from old tech, to new tech, to audio. I stumble my way through repairs, projects and the occasional rant armed with my trusty heirloom apron and two remaining braincells.
        </h3>
      </div>
    </div>
  </Card>
</template>

<script setup>
import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
</script>

<style scoped>

.card-container {
  display: inline-flex;
  padding: 20px;
}

.card-body {
  display: block;
  margin-left: 50px;
  margin-right: 50px;
}

.about-heading {
  font-family: Calistoga, serif;
  font-size: 135px;
  display: inline-block;
}

.about-text {
  font-family: Ubuntu, sans-serif;
  font-size: 35px;
}

img {
  width: 600px;
  height: 600px;
  margin-top: -20px;
  margin-bottom: -20px;
}

@media (max-width: 1200px) {
  .card-container {
    display: block;
    text-align: center;
  }

  .about-text {
    font-size: 45px;
  }

  img {
    object-fit: cover;
    width: 450px;
    height: 450px;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 30px;


  }
  .about-text {
    font-family: Ubuntu, sans-serif;
    font-size: 30px;
  }
}

@media (max-width: 600px) {
  .card-body {
    margin-left: 0;
    margin-right: 0;
  }

  .about-heading {
    font-size: 85px;
  }

  .about-text {
    font-size: 25px;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 300px;

  }
  .about-text {
    font-family: Ubuntu, sans-serif;
    font-size: 20px;
  }
}

</style>