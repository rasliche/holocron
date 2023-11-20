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
    <UTable :rows="prompts">
      <template #id-data="{ row }">
        <NuxtLink :to="`/prompts/${row.id}`">{{ row.id }}</NuxtLink>
      </template>
      <template #prompt_text-data="{ row }">
        <NuxtLink :to="`/prompts/${row.id}`">{{ row.prompt_text }}</NuxtLink>
      </template>
    </UTable>
    
    <li class="" v-for="prompt in prompts">
      {{ prompt.prompt_text }}
    </li>
    
    <pre>
      {{ prompts }}
    </pre>
  </div>
</template>
