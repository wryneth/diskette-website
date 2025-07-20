<script setup lang="ts">
import {Card, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'

defineProps({
  item: {
    type: String,
    default: "Collection item"
  },
  alt: {
    type: String,
    default: "A computer."
  },
  image: {
    type: String,
    default: "missing.jpg"
  },
  year: {
    type: String,
    default: "Year"
  },
  os: {
    type: String,
    default: "WrenOS"
  },
  quantity: {
    type: String,
    default: "1x"
  }
})
</script>

<template>
  <Card class="w-lg flex justify-center ms-auto me-auto">
    <CardHeader>
      <CardTitle class="text-2xl text-center text-bold">{{item}}</CardTitle>
    </CardHeader>
    <img class="m-5 rounded-xl" :src="`/images/collection/${image}`" :alt="`${alt}`">
    <CardFooter class="mx-auto">
      <Badge color="blue" class="w-25 h-10 ms-2 me-2"><Icon class="p-3" name="pixel:calender-solid"/>{{year}}</Badge>
      <Badge class="w-25 h-10 ms-2 me-2"><Icon class="p-3" name="pixel:programming"/>{{os}}</Badge>
      <Badge class="w-15 h-10 ms-2 me-"><Icon class="p-3" name="pixel:book-heart-solid"/>{{quantity}}</Badge>
    </CardFooter>
  </Card>
</template>