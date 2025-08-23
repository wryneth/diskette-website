<script setup lang="ts">
import {z} from "zod";
import type {FormSubmitEvent} from "#ui/types";
import {toast} from 'vue-sonner'
import {Toaster} from '@/components/ui/sonner'
import 'vue-sonner/style.css'
import {Button} from '@/components/ui/button'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

type Schema = z.output<typeof formSchema>;
const formSchema = z.object({
  email: z.string().email("Invalid email"),
  firstName: z.string(),

});
const formState = reactive({
  email: "",
  firstName: "",
});

async function formSubmission(event: FormSubmitEvent<Schema>) {
  try {
    const res = await $fetch('/api/subscription', {
      method: "POST",
      body: {
        email: event.data.email,
        firstName: event.data.firstName,
      }
    })
    toast.success(res.message)
  } catch (error: any) {
    toast.error(error.statusMessage)
  }

}
</script>

<template>
  <div id="mail" class="p-10">
    <Card class="mb-5">
      <h1 class="text-center font-calistoga text-6xl">Updates</h1>
    </Card>

    <div class="font-ubuntu text-2xl text-center p-5 mb-5">
      Join the mailing list for new patterns, firmware additions, and general information.
    </div>

    <Card class="p-20 lg:pe-30 lg:ps-30 lg:pb-20">
      <div class="w-full">
        <UForm :state="formState" :schema="formSchema" @submit="formSubmission" class="flex flex-col gap-5">
          <div>
            <Label class="mb-2">First Name</Label>
            <Input type="text" v-model="formState.firstName" placeholder="Jimothy"/>
          </div>

          <div>
            <Label class="mb-2">E-mail
              <div class="text-red-500 -ms-1">*</div>
            </Label>
            <Input type="email" v-model="formState.email" placeholder="intern.jimothy@diskette.media"/>
          </div>

          <Button class="w-full mb-5" type="submit">Subscribe</Button>
        </UForm>

        <div class="font-ubuntu text-xl -mb-10 text-center text-slate-600">
          No spam, just updates, unsubscribe any time
        </div>

        <ClientOnly>
          <Toaster richColors position="bottom-center"/>
        </ClientOnly>
      </div>
    </Card>
  </div>
</template>