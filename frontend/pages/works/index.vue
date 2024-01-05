<script setup>
const { data: jobs } = await useFetch(`${import.meta.env.VITE_API_URL}/jobs?populate=cover`, { server: false })
useHead({ title: 'Fabio Vaz · Works' })
</script>

<template>
  <main v-if="jobs" class="py-44 relative z-20 container max-w-6xl mx-auto">
    <div class="grid grid-cols-4 gap-8">
      <NuxtLink v-for="job in jobs.data" :to="`/works/${job.attributes.slug}`" class="group relative bg-neutral-700 border-2 rounded-lg border-neutral-800 overflow-hidden">
        <NuxtImg :src="job.attributes.cover.data.attributes.formats.small.provider_metadata.public_id" width="320" height="200" fit="fill" class="opacity-40 transition-all group-hover:opacity-60" />
        <h6 class="absolute top-0 w-full h-full flex items-center justify-center font-oswald uppercase text-xl font-bold text-shadow shadow-white/0 hover:shadow-white/80 opacity-0 group-hover:opacity-100 transition-all">
          {{ job.attributes.title }}
        </h6>
      </NuxtLink>
    </div>
  </main>
</template>
