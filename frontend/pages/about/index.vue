<script setup>
useHead({ title: 'Fabio Vaz · About' })
</script>

<template>
  <main class="relative pt-44 pb-16 px-4 z-20 container max-w-lg">
  <!-- <main class="relative z-10 pt-44 pb-16"> -->
    <div class="text-center">
      <h3 class="text-2xl">HI! I'M</h3>
      <h1 class="text-7xl font-oswald font-bold">FABIO VAZ</h1>
      <h3 class="text-2xl">Full Stack Developer</h3>
      <hr class="my-6 max-w-8 mx-auto" />
      <div class="space-y-4">
        <p>I'm Fabio Vaz, a senior developer/team leader with 15+ years of related experience.</p>
        <p>I started my journey working with PHP remotely for a company based in Portugal. Surfing the flash hype, I started programming in actionscript 2 and actionscript 3. With the emergence of smartphones and consequently the death of flash, I returned to working with HTML, CSS and PHP mostly. Extensive knowledge in UI/UX, I specialized in frontend even though I still have all the backend experience. I currently work with JS frameworks Vue/Nuxt, React/Next.</p>
      </div>
      <hr class="my-6 max-w-8 mx-auto" />
      <p>I created this portfolio with open-source code, using <NuxtLink to="https://vuejs.org/" target="_blank" class="link">Vue</NuxtLink>/<NuxtLink to="https://nuxt.com/" target="_blank" class="underline decoration-teal-500 hover:decoration-white">Nuxt</NuxtLink> for the frontend and Strapi/MySQL for the backend.</p>
      <p>You can view it on <NuxtLink to="https://github.com/fabiovaz/portfolio" target="_blank" class="link">GitHub</NuxtLink>. The interface is hosted on <NuxtLink to="https://vercel.com/" target="_blank" class="link">Vercel</NuxtLink>, while the API runs on <NuxtLink to="https://railway.app/" target="_blank" class="link">Railway</NuxtLink>. The images are hosted on <NuxtLink to="https://cloudinary.com/" target="_blank" class="link">Cloudinary</NuxtLink>.</p>
      <hr class="my-6 max-w-8 mx-auto" />
      <h2 class="font-oswald text-2xl">GET IN TOUCH</h2>
      <h4>Brasilia - Brazil</h4>
      <h4>
        <NuxtLink to="https://wa.me/+5561996561012" target="_blank" class="font-bold hover:underline">+55 61 99656.1012</NuxtLink>
      </h4>
      <h4>
        <NuxtLink to="mailto:fabiovaz@gmail.com" target="_blank" class="font-bold hover:underline">fabiovaz@gmail.com</NuxtLink>
      </h4>
      [ <NuxtLink to="https://www.linkedin.com/in/fabiovazribeiro/" target="_blank" class="font-bold hover:underline">linkedin</NuxtLink> ]
      [ <NuxtLink to="https://github.com/fabiovaz" target="_blank" class="font-bold hover:underline">github</NuxtLink> ]
    </div>
  </main>
</template>