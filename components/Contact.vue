<script setup lang="ts">

</script>

<template>

  <UCard id="contact">
    <template #header>
      <h1 class="title">Contact</h1>
    </template>
    <template>
      <div class="contact-container">
        <form action="https://www.formbackend.com/f/{your-identifier}" method="POST">
          <div class="form-fields">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Soap Doe" required>
          </div>

          <div class="form-fields">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
          </div>

          <div class="form-fields">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </template>
    <template #footer>
      <h1 class="dm">If it works better, you can also send me a DM on Bluesky or Instagram</h1>
    </template>
  </UCard>
</template>

<style scoped>
.contact-container {
  text-align: center;
}
.title {
  text-align: center;
  font-family: 'Imbue', serif;
  font-size: 40px;
}

 h1 {
   font-size: 1.8rem;
   font-weight: bold;
   margin-bottom: 1rem;
 }
.form-fields {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}
input[type="text"], input[type="email"], textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  width: 500px
}
body {
  display: block
}
button[type="submit"] {
  background-color: rgb(67 56 202);
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
}
.dm {
  text-align: center;
  font-family: 'Young Serif', serif;
  font-size: 20px;
}
</style>