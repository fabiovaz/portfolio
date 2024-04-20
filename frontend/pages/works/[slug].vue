<script setup>
const route = useRoute()
const slug = route.params.slug

// const { data: job } = await useFetch(`${import.meta.env.VITE_API_URL}/jobs?filters[slug][$eq]=${slug}&populate=gallery`, { server: false })

const { data: job } = await useAsyncData('job', () => $fetch(`${import.meta.env.VITE_API_URL}/jobs?filters[slug][$eq]=${slug}&populate=gallery`))

useSeoMeta({
  title: () => `Fabio Vaz · Work: ${job.value.data[0].attributes.title}`,
  description: () => job.value.data[0].attributes.description,
  title: () => `Fabio Vaz · Work: ${job.value.data[0].attributes.title}`,
  ogDescription: () => job.value.data[0].attributes.description,
});
</script>

<template>
  <main v-if="job" class="py-44 px-4 relative z-20 container max-w-6xl mx-auto">
    <h1 class="text-7xl uppercase font-oswald font-bold">{{ job.data[0].attributes.title }}</h1>
    <h6 class="mt-4 font-oswald uppercase">{{ job.data[0].attributes.subtitle }}</h6>
    <NuxtLink v-if="job.data[0].attributes.url" :to="job.data[0].attributes.url" target="_blank" class="mt-6 inline-block px-4 py-2 border cursor-pointer hover:bg-white hover:text-black transition-all">
      VIEW ONLINE
    </NuxtLink>
    <p class="mt-10 mb-20 leading-loose">{{ job.data[0].attributes.description }}</p>
    <div v-for="image in job.data[0].attributes.gallery.data" class="my-6">
      <div class="w-full h-11 rounded-t-lg border-2 border-white/20 flex justify-start items-center space-x-3 px-3">
        <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
      </div>
      <div class="border-2 rounded-b-lg border-white/20 border-t-0 w-full overflow-hidden">
        <img :src="image.attributes.url" class="w-full" />
      </div>
    </div>

  </main>
</template>