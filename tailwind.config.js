const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem' },
      screens: {
        'sm': '100%',
        'md': '768px',
        'lg': '850px',
        'xl': '960px',
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        jp: ['"Kosugi Maru"', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  daisyui: ['night'],
  plugins: [
    require('daisyui'),
    iconsPlugin({
      scale: 1.5,
      collections: getIconCollections(['solar', 'ri']),
    }),
    require('@tailwindcss/typography'),
    require('tailwind-animatecss'),
    plugin(({ addVariant }) => {
      addVariant('current', '&.current')
      addVariant('active', '&.router-link-active')
      addVariant('exact-active', '&.router-link-exact-active')
      addVariant('child', '& > *')
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      })
    }),

    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.btn-yt': {
          '@apply bg-red-600 text-white font-bold': {},
          '@apply hover:bg-red-700': {},
        },
        '.btn-x': {
          '@apply bg-stone-700 text-white font-bold': {},
          '@apply hover:bg-stone-800': {},
        },
      })

      addUtilities({
        '.animate-infinite': {
          animationIterationCount: 'infinite',
        },
        '.animate-once': {
          animationIterationCount: '1',
        },
      })
    }),
  ],
}
