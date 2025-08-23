<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
</script>

<template>
  <div id="options" class="p-10">
    <Card class="mb-5">
      <h1 class="text-center font-calistoga text-6xl">Choose your pattern</h1>
    </Card>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">


      <Card class="p-5">
        <h1 class="font-calistoga text-center text-4xl mb-8">Box</h1>
        <Carousel orientation="vertical" class="mb-10" :opts="{ align: 'start',}">
          <CarouselContent class="h-[370px]">
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/BCFP.webp" alt="flower box glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Flower</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/box-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/BCAP.webp" alt="flower box glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Alhambra</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/box-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Card>

      <Card class="p-5">
        <h1 class="font-calistoga text-center text-4xl mb-8">Gothic</h1>
        <Carousel orientation="vertical" class="mb-10" :opts="{ align: 'start',}">
          <CarouselContent class="h-[370px]">
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/GCLP.webp" alt="flower box glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Leaf</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/gothic-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/GCLP.webp" alt="flower box glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Feather</h1>
                </div>
                <h1 class="-m-5 text-center">Currently on special order</h1>
                <a href="https://store.diskettekitchen.com/products/gothic-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Card>

      <Card class="p-5">
        <h1 class="font-calistoga text-center text-4xl mb-8">Arrowhead</h1>
        <Carousel orientation="vertical" class="mb-10" :opts="{ align: 'start',}">
          <CarouselContent class="h-[370px]">
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/ACFP.webp" alt="feather arrowhead glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Feather</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/arrowhead-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/ACFP.webp" alt="leaf arrowhead glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Leaf</h1>
                </div>
                <h1 class="-m-5 text-center">Currently on special order</h1>
                <a href="https://store.diskettekitchen.com/products/arrowhead-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Card>

      <Card class="p-5">
        <h1 class="font-calistoga text-center text-4xl mb-8">Teardrop</h1>
        <Carousel orientation="vertical" class="mb-10" :opts="{ align: 'start',}">
          <CarouselContent class="h-[370px]">
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/TCBP.webp" alt="bubble teardop glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Bubble</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/teardrop-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card class="p-2">
                <img class="rounded-t-lg" src="/images/glow/options/TCLP.webp" alt="leaf teardrop glow">
                <div class="border border-gray-200 -mt-6 mb-1 p-2 rounded-b-lg">
                  <h1 class="text-center font-black">Leaf</h1>
                </div>
                <a href="https://store.diskettekitchen.com/products/teardrop-case-glow-assembled">
                  <Button class="w-full">Choose</Button>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Card>


    </div>
  </div>
</template>

<style scoped>

</style>