<script setup>
const { data: jobs } = await useFetch(`${import.meta.env.VITE_API_URL}/jobs?filters[featured]=true&populate=cover`, { server: false })
</script>

<template>
  <main>
    <Slider v-if="jobs" :jobs="jobs.data" />
  </main>
</template>
