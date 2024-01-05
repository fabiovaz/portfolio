<template>
  <header class="z-30 fixed flex px-4 py-6 lg:p-10 items-center w-full justify-between">
    <NuxtLink to="/">
      <img src="/img/logo.svg" />
    </NuxtLink>
    <nav class="font-oswald text-lg text-white/50 space-x-4 uppercase sepia">
      <NuxtLink to="/" class="hover:text-white transition-all">
        Home
      </NuxtLink>
      <NuxtLink to="/about" class="hover:text-white transition-all">
        About
      </NuxtLink>
      <NuxtLink to="/works" class="hover:text-white transition-all">
        Works
      </NuxtLink>
    </nav>
  </header>
</template>

<style>
.router-link-active {
  @apply text-white text-shadow shadow-white/30
}
</style>