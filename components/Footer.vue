<template>
  <footer>
    <UCard>
      <template #header>
        <Placeholder class="h-8"/>
      </template>
      <div class="footer">
        <h1>© 2024 Diskette Media</h1>
      </div>

      <div class="social-btns">
          <UButton
              :padded="true"
              icon="grommet-icons:youtube"
              size="sm"
              color="red"
              square
              variant="solid"
          />
          <UButton
              icon="ri:bluesky-fill"
              size="sm"
              color="blue"
              square
              variant="solid"
          />
          <UButton
              icon="mdi-instagram"
              size="sm"
              color="pink"
              square
              variant="solid"
          />
        <UButton class="btn-other"
            icon="simple-icons:printables"
            size="sm"
            color="orange"
            square
            variant="solid"
        />
        </div>
      <template #footer>
        <Placeholder class="h-8"/>
      </template>
    </UCard>
  </footer>
</template>
<style scoped>

.footer {
  display: inline-block;
}
btn-other {
  margin-left: 8px;
}
.social-btns {
  float: right;
  padding-left: 100px;
}
</style>
<script setup lang="ts">
</script>