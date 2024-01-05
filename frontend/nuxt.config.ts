// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Fabio Vaz',
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    ['@hypernym/nuxt-anime', {
      composables: true
    }],
    ['@nuxt/image', {
      quality: 100,
      format: 'webp',
      provider: 'cloudinary',
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/fabiovaz/image/upload/'
      }
    }],
    ['@nuxtjs/google-fonts', {
      families: {
        Inconsolata: [400],
        Oswald: [400]
      }
    }]
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
