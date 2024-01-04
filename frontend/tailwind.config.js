/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '500ms'
    },
    fontFamily: {
      'oswald': ['Oswald'],
    },
    textShadow: {
      DEFAULT: '0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color), 0 0 70px var(--tw-shadow-color)',
    },
    extend: {
      textShadow: {
      },
      boxShadow: {
        'inner-large': '0 0 30rem rgba(255,255,255, .15) inset'
      },      
      backgroundImage: {
        'radial': "radial-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), linear-gradient(rgba(255, 255, 255, 0.4) 10%, transparent)",
        'crtlines': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAE0lEQVQYV2NgYGD4zwAjQAwGBgAa+QH/eULVWwAAAABJRU5ErkJggg==')"
      },
      keyframes: {
        noiseEffect: {
          '0%':   { top: '-20%', opacity: '0' },
          '20%':  { opacity: '0' },
          '50%':  { opacity: '0.8' },
          '80%':  { opacity: '0' },
          '100%': { top: '100%', opacity: '0' }
        },
        crtLines: {
          '0%':   { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-4px)' }
        },
        crtImage: {
          '0%':   { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        crtImageGlitch: {
          '0%':   { transform: 'translate(-40px, -2px)', opacity: .3 },
          '8%': { transform: 'translate(40px, 2px)' },
          '16%': { transform: 'translate(0, 0)', opacity: 0 },
          '100%': { transform: 'translate(0, 0)' }
        },
        textBlink: {
          '0%':   { transform: 'translateX(2px)', opacity: 1 },
          '30%': { transform: 'translateX(2px)', opacity: .7 },
          '70%': { transform: 'translateX(-2px)', opacity: .8 },
          '71%': { transform: 'translateX(0)', opacity: .8 },
          '75%': { transform: 'translateX(1px)', opacity: .8 },
          '100%': { transform: 'translateX(0)', opacity: .7 }
        },
        shadowDown: {
          '0%':   { top: '0' },
          '10%': { top: '20px' },
          '20%': { top: '30px' },
          '40%': { top: '35px' },
          '60%': { top: '50px' },
          '70%': { top: '20px' },
          '100%': { top: '10px' }
        },
        shadowTextUp: {
          '0%':   { top: '0' },
          '10%': { top: '-20px', opacity: .5 },
          '20%': { top: '-30px', opacity: 1 },
          '40%': { top: '-35px' },
          '60%': { top: '-50px', opacity: .5 },
          '70%': { top: '-20px' },
          '100%': { top: '-10px', opacity: 1 }
        },
      },
      animation: {
        noiseEffect: 'noiseEffect 4000ms infinite linear',
        crtLines: 'crtLines 400ms normal infinite linear',
        crtImage: 'crtImage 20ms alternate infinite',
        crtImageGlitch: 'crtImageGlitch 1600ms alternate infinite',
        textBlink: 'textBlink 2s normal infinite',
        shadowDown: 'shadowDown 3s normal infinite',
        shadowTextUp: 'shadowTextUp 3s normal infinite'
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

