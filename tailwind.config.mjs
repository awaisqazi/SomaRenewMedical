/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── Editorial Apothecary palette ──────────────────────────
        // Ink & charcoal — text and dark sections
        'ink': '#1B2227',
        'charcoal': '#36454F',
        'charcoal-deep': '#283036',

        // Warm paper backgrounds (no more stark white)
        'bone': '#F3EFE6',
        'cream': '#FBF8F2',
        'sand': '#E9E1D2',
        'warm-white': '#FBF8F2',

        // Brand gold + an accessible gold for text on light
        'soma-gold': '#C0B283',
        'gold': '#C0B283',
        'gold-deep': '#8E7B43',

        // Botanical accents — used sparingly
        'sage-green': '#7E8E55',
        'sage': '#7E8E55',
        'dusty-blue': '#6F8090',
        'dusty': '#6F8090',
        'clay': '#B07A52',

        // Semantic aliases
        'primary-text': '#1B2227',
        'background': '#F3EFE6',
        'accent-gold': '#C0B283',
        'accent-green': '#7E8E55',
        'accent-blue': '#6F8090',
        'secondary-text': '#5B6770',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.22em',
        wide2: '0.34em',
      },
      boxShadow: {
        'warm': '0 18px 50px -28px rgba(27, 34, 39, 0.30)',
        'warm-lg': '0 40px 90px -45px rgba(27, 34, 39, 0.40)',
        'gold-glow': '0 18px 44px -18px rgba(192, 178, 131, 0.55)',
        'lift': '0 28px 60px -32px rgba(27, 34, 39, 0.35)',
      },
      backgroundImage: {
        'serene-gradient': 'linear-gradient(180deg, #FBF8F2 0%, #F3EFE6 100%)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
