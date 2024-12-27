<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)
const statusMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...form
      }).toString()
    })

    if (response.ok) {
      submitStatus.value = 'success'
      statusMessage.value = 'Thank you for your message. I\'ll try get back to you soon!'
      // Reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    submitStatus.value = 'error'
    statusMessage.value = 'Oops! There was a problem submitting your form. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UCard class="card-contain" id="contact">
    <template #header>
      <h1 class="title">Contact Me</h1>
    </template>

    <div class="w-full max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div class="bg-yellow-100 shadow-xl rounded-lg overflow-hidden">
        <div class="p-6 sm:p-10">
          <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
          <form
              name="contact"
              method="POST"
              data-netlify="true"
              @submit.prevent="handleSubmit"
              class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="sm:col-span-2">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="form.name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="form.email"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div class="sm:col-span-2">
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <select
                  id="subject"
                  name="subject"
                  v-model="form.subject"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="" disabled>Subject</option>
                <option value="Video Suggestion">Video Suggestion</option>
                <option value="Feedback">Feedback</option>
                <option value="Ridicule">Ridicule</option>
                <option value="Business Inquiry">Business Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            <div class="sm:col-span-2">
              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-700 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
              <span v-if="isSubmitting">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
                <span v-else>Send Message</span>
              </button>
            </div>
          </form>

          <div v-if="submitStatus" :class="['mt-6 text-center sm:col-span-2', submitStatus === 'success' ? 'text-green-600' : 'text-red-600']">
            {{ statusMessage }}
          </div>
        </div>
      </div>
    </div>

    <template #footer>
<h1>If it works better, you can also send me a DM on Bluesky or Instagram</h1>
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

h1 {
  text-align: center;
  font-family: 'Young Serif', serif;
  font-size: 25px;
}
</style>