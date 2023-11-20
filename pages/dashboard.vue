<template>
    <div>
        <p>{{ route.name }}</p>
        <p>Name: {{  user.name }}</p>
        <p>Email: {{  user.email }}</p>
    </div>
</template>

<script setup>
const route = useRoute()
// const user = useSupabaseUser()

const user = {
    name: "unknown",
    email: "fake@emailz.com",
}

</script>