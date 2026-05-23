/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          2: '#0f0f0f',
          3: '#141414',
        },
        border: {
          DEFAULT: '#1a1a1a',
          2: '#252525',
        },
        accent: {
          DEFAULT: '#00b32c',
          dim: '#008f23',
        },
        text: {
          DEFAULT: '#e8e8ee',
          muted: '#8888a0',
          dim: '#555566',
          faint: '#2a2a3a',
        },
        tag: {
          linux: '#00b32c',
          gaming: '#b48eff',
          retro: '#ffb347',
          hardware: '#ff4d6a',
          software: '#4da6ff',
          random: '#888899',
        },
      },
      fontFamily: {
        display: ['"Fragment Mono"', 'monospace'],
        mono: ['"Geist Mono"', 'monospace'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.4s ease both',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeUp: { 'from': { opacity: '0', transform: 'translateY(8px)' }, 'to': { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
};
