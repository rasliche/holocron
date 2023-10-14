<template>
  <div>
    {{ api }}
    <NuxtWelcome />
  </div>
</template>

<script setup>
  const { data: api } = await useFetch('/api/hello')
</script>