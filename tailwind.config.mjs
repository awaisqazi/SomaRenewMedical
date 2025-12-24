/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors (Serene Sanctuary Palette)
        'charcoal': '#36454F',
        'soma-gold': '#C0B283',
        'warm-white': '#FDFDFD',
        'sage-green': '#8A9A5B',
        'dusty-blue': '#778899',
        
        // Semantic Aliases for convenience
        'primary-text': '#36454F',
        'background': '#FDFDFD',
        'accent-gold': '#C0B283',
        'accent-green': '#8A9A5B',
        'accent-blue': '#778899',
        'secondary-text': '#5E6C77',
      },
      fontFamily: {
        // Headlines: Cormorant Garamond - Sophisticated, Title Case
        serif: ['Cormorant Garamond', 'serif'],
        // Body/Buttons: Raleway - Clean, Geometric
        sans: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        // Warm shadows for sanctuary feel (not clinical)
        'warm': '0 4px 24px rgba(54, 69, 79, 0.08)',
        'warm-lg': '0 8px 32px rgba(54, 69, 79, 0.08)',
        'gold-glow': '0 4px 20px rgba(192, 178, 131, 0.25)',
      },
      backgroundImage: {
        // Warm gradient for serene sections
        'serene-gradient': 'linear-gradient(135deg, #FDFDFD 0%, #F8F6F0 100%)',
      }
    },
  },
  plugins: [],
}