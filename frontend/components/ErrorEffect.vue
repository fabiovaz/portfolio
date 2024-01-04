<script setup>
const { currentRoute } = useRouter()
watch(() => currentRoute.value, () => {
  changeBacksplash()
})

const changeBacksplash = () => {
  if (currentRoute.value.path === '/') {
    hideBacksplash()
  } else {
    showBacksplash()
  }
}

const hideBacksplash = () => {
  useAnime({ targets: '#backsplash', easing: 'easeOutExpo', opacity: 0, duration: 1000 })
}
const showBacksplash = () => {
  useAnime({ targets: '#backsplash', easing: 'easeOutExpo', opacity: 1, duration: 1000 })
}
onMounted(() => {
  changeBacksplash()
})
</script>

<template>
  <div id="backsplash" class="fixed w-full h-full z-10 bg-black/70 shadow-inner-large opacity-0" />
  <div id="error-effect" class="fixed z-0 w-screen h-screen overflow-hidden">
    <div id="noise" class="absolute w-full h-1/5 bg-white/20 animate-noiseEffect" />
    <div id="radial" class="fixed w-full h-full bg-radial" />
    <div id="crtlines" class="absolute w-full h-full opacity-40 bg-crtlines animate-crtLines" />
  </div>
</template>