<script setup lang="ts">
  const client = useSupabaseClient()
  const route = useRoute()

  const { data: prompt } = await useAsyncData('prompts', async () => {
    const { data } = await client.from('prompts').select('id, created_at, prompt_text').eq('id', route.params.id).single()
    return data
  })

  const response = ref("")
</script>

<template>
  <div>
    <h1>Prompt</h1>
    <p>{{ prompt.prompt_text }}</p>
    <UTextarea v-model="response" placeholder="Well, you see it all started when..." autoresize></UTextarea>
    <UButton icon="i-heroicons-pencil-square">Submit</UButton>
  </div>
</template>
