<template>
  <div class="m-4">
    <!-- <UVerticalNavigation :links="links" /> -->
    <nav class="w-full flex justify-around">
      <NuxtLink :to="link.to" v-for="link in links">{{ link.label }}</NuxtLink>
    </nav>
    <NuxtPage/>

  </div>
</template>

<script setup>
  const links = [{
      label: "Home",
      to: "/"
    },
    {
      label: "Prompts",
      to: "/prompts"
    },
    {
      label: "About",
      to: "/about"
    },
    {
      label: "Dashboard",
      to: "/dashboard"
    }]
</script>
