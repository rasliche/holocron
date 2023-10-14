<script setup lang="ts">
const client = useSupabaseClient()

const { data: prompts } = await useAsyncData('prompts', async () => {
  const { data } = await client.from('prompts').select('id, prompt_text')

  return data
})
</script>

<template>
  <div>
    Available Prompts: 
    <li v-for="prompt in prompts">{{ prompt.prompt_text }}</li>
    
    <pre>
      {{ prompts }}
    </pre>
  </div>
</template>

<style scoped></style>
