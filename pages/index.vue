<script setup>
  const { data: api } = await useFetch('/api/hello')
</script>

<template>
  <div>
    We're trying to hit an API route here: {{ api }}
    <NuxtWelcome />
  </div>
</template>

<style scoped></style>
