<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <SpeedInsights />
  <TheHeader />
  <ErrorEffect />
  <slot />
</template>