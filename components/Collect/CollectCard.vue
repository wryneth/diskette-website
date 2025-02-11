<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <NuxtImg format="webp" alt="user header" :src="`${image}`"/>
    </template>
    <template #title>{{ item }} <Badge :value="`${quantity}`" severity="contrast" size="xlarge"></Badge>
    </template>
    <template #subtitle>
      <div class="flex gap-2 justify-center">
        <Chip icon="pi pi-calendar-clock" :label="`${year}`" />
        <Chip icon="pi pi-arrow-up-right-and-arrow-down-left-from-center" :label="`${screen}`" />
      </div>
    </template>
    <template #content>
    </template>
    <template #footer>
      <div class="flex gap-1">
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-card {
  border-radius: 20px;
}
.p-button {
  border-radius: 10px;
}
</style>
<script>
import 'primeicons/primeicons.css'

export default {
  props: {
    item: {
      type: String,
      default: 'Item'
    },

    quantity: {
      type: String,
      default: '1x'
    },

    image: {
      type: String,
      default: '/images/collection/missing.png'
    },

    year: {
      type: String,
      default: 'Year'
    },
    screen: {
      type: String,
      default: '--'
    },
  }
}
</script>