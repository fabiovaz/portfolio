<script setup>
const props = defineProps({ jobs: { required: true} })

const currentIndex = ref(0)
const currentSlide = ref(props.jobs[currentIndex.value])
const getSlideCount = ref(props.jobs.length -1)
const slideTransition = ref(false)
const sliderTimer = ref(null)
const timeoutSlider = ref(5000)
const splittedTitle = ref(currentSlide.value.attributes.title.split(''))

const prevSlide = () => { 
  const index = currentIndex.value > 0 ? currentIndex.value - 1 : getSlideCount.value
  switchSlide(index)
}

const nextSlide = () => { 
  const index = currentIndex.value < getSlideCount.value ? currentIndex.value + 1 : 0
  switchSlide(index)
}

const switchSlide = async (index) => {
  if (!slideTransition.value && (index !== currentIndex.value)) {
    await exitSlide()
    await setSlide(index)
    await enterSlide()
  }
}

const setSlide = async (index) => {
  currentIndex.value = index
  currentSlide.value = props.jobs[index]
  splittedTitle.value = currentSlide.value.attributes.title.split('')
  return true
}

const enterSlide = async () => {
  slideTransition.value = true
  const enterSlide = useAnime({ targets: '#job .background', easing: 'easeOutExpo', opacity: 1, scale: 1, duration: 1000 }).finished
  const enterTitle = useAnime({ targets: '#job #caption #title .letter', easing: 'linear', opacity: [0, 1], duration: 400, delay: useAnime.stagger(100) })
  const enterTitleShadow = useAnime({ targets: '#job #caption #title .letterShadow', easing: 'linear', opacity: [0, 1], duration: 400, delay: useAnime.stagger(100) })
  const enterMask = useAnime({ targets: '#job #caption #subtitle #mask', easing: 'linear', scaleX: [0, 1], transformOrigin: ['0 0', '0 0'], duration: 500, complete: function(anim) {
    useAnime({ targets: '#job #caption #subtitle p', opacity: 1, duration: 0 })
    useAnime({ targets: '#job #caption #subtitle #mask', easing: 'linear', scaleX: [1, 0], transformOrigin: ['100% 0', '100% 0'], duration: 500 })
  } }).finished
  sliderTimerStart()
  await Promise.all([enterSlide, enterTitle, enterTitleShadow, enterMask])
  slideTransition.value = false
}

const exitSlide = async () => {
  sliderTimerReset()
  slideTransition.value = true
  const exitSlide = useAnime({ targets: '#job .background', easing: 'easeInExpo', opacity: 0, scale: 1.4, duration: 1000 }).finished
  const exitTitle = useAnime({ targets: '#job #caption #title .letter', opacity: 0, easing: 'linear', duration: 300, delay: useAnime.stagger(30) }).finished
  const exitTitleShadow = useAnime({ targets: '#job #caption #title .letterShadow', opacity: 0, easing: 'linear', duration: 30, delay: useAnime.stagger(30) }).finished
  const exitMask = useAnime({ targets: '#job #caption #subtitle #mask', easing: 'linear', scaleX: [0, 1], transformOrigin: ['0 0', '0 0'], duration: 400, complete: function(anim) {
    useAnime({ targets: '#job #caption #subtitle p', opacity: 0, duration: 0 })
    useAnime({ targets: '#job #caption #subtitle #mask', easing: 'linear', scaleX: [1, 0], transformOrigin: ['100% 0', '100% 0'], duration: 400 })
  } }).finished
  await Promise.all([exitSlide, exitTitle, exitTitleShadow, exitMask])
  slideTransition.value = false
}

const joinSlide = async (url) => {
  useAnime({ targets: '#paginator button', opacity: 0, translateX: 10, delay: useAnime.stagger(100), duration: 3000 })
  await exitSlide()
  navigateTo(url)
}

const sliderTimerStart = () => {
  sliderTimerReset()
  sliderTimer.value = useAnime({ targets: '#timer', easing: 'linear', scaleX: [0, 1], opacity: [1,1], transformOrigin: ['0 0', '0 0'], duration: timeoutSlider.value, complete: function() {
    nextSlide()
  }})
}

const sliderTimerReset = () => {
  if (sliderTimer.value) {
    sliderTimer.value.remove('#timer')
    useAnime({ targets: '#timer', easing: 'easeOutExpo', scaleX: 0, opacity: 0, transformOrigin: ['100% 0', '100% 0'], duration: 1000})
  }
}

onBeforeUnmount(() => {
  if (sliderTimer.value) {
    sliderTimer.value.remove('#timer')
  }
})

onMounted(() => {
  enterSlide()
})
</script>

<template>
  <section id="job" class="flex absolute w-full h-full overflow-hidden items-center">
    <div id="caption" class="z-10 px-4 lg:px-0 cursor-pointer container max-w-6xl mx-auto" @click.prevent="joinSlide(`/works/${currentSlide.attributes.slug}`)">
      <div class="relative title text-6xl lg:text-7xl uppercase font-oswald font-bold">
        <h6 class="absolute bottom-0 text-[200px] text-[#333]/20 font-oswald">0{{ currentIndex + 1}}</h6>
        <div id="title">
          <!-- <h1 class="animate-textBlink">{{ currentSlide.attributes.title }}</h1>		 -->
          <h1 class="animate-textBlink">
            <span v-for="letter in splittedTitle" class="letter opacity-0">
              {{ letter }}
            </span>
          </h1>
          <div class="absolute top-0 left-0 w-full h-10 animate-shadowDown overflow-hidden">
            <h2 class="absolute top-0 left-0 animate-shadowTextUp">
              <span v-for="letter in splittedTitle" class="letterShadow opacity-0">
                {{ letter }}
              </span>
            <!-- {{ currentSlide.attributes.title }} -->
            </h2>		
          </div>
        </div>
      </div>
      <div class="relative inline-block">
        <div id="subtitle" class="relative inline-block overflow-hidden my-1">
          <div id="mask" class="absolute top-0 left-0 w-full h-full bg-white translate-x-full" />
          <p class="font-oswald uppercase py-0.5 opacity-0">{{ currentSlide.attributes.subtitle }}</p>		
        </div>
        <div id="timer" class="w-full h-0.5 bg-white" />
      </div>
    </div>
    <div class="-z-10 absolute w-full h-full background">
      <NuxtImg
        :src="currentSlide.attributes.cover.data.attributes.provider_metadata.public_id"
        sizes="lg:1920px md:420px"
        class="animate-crtImage absolute w-full h-full object-cover"
      />
      <NuxtImg
      :src="currentSlide.attributes.cover.data.attributes.provider_metadata.public_id"
        sizes="lg:1920px md:420px"
        class="job animate-crtImageGlitch absolute w-full h-full object-cover"
      />
    </div>
  </section>
  <div id="paginator" class="z-10 absolute right-4 bottom-4 lg:right-10 lg:bottom-10 text-xs text-white/50">
    <button v-for="(job, index) in jobs" class="group flex w-full items-center justify-end hover:text-white transition-all" :class="index === currentIndex ? 'text-white' : 'text-white/50'" @click.prevent="switchSlide(index)">
      <div class="uppercase opacity-0 text-white/50 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white transition-all">{{ job.attributes.title }}</div>
      <div class="w-7 h-0.5 mx-2 group-hover:bg-white group-hover:scale-x-110 transition-all" :class="index === currentIndex ? 'bg-white' : 'bg-white/50'" /> 0{{ index + 1 }}
    </button>
  </div>
</template>
