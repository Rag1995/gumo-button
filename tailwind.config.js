const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  daisyui: ['light', 'dark'],
  plugins: [
    require('daisyui'),
    iconsPlugin({
      scale: 1.5,
      collections: getIconCollections([]),
    }),
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
  ],
}
