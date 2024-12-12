
<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button as="a" href="https://vuejs.org/" label="Watch Now" class="w-full" />
        <Button as="a" href="https://www.printables.com/model/1073452-diskette-case-modular-open-source-nas-chassis" severity="secondary" label="Download" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup>
</script>
