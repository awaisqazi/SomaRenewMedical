/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-text': '#36454F',
        'background': '#FDFDFD',
        'accent-gold': '#C0B283',
        'accent-green': '#8A9A5B',
        'accent-blue': '#778899',
        'secondary-text': '#5E6C77',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}