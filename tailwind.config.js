/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // from figma - dark green-black palette
        bg: '#0f1a0f',
        'bg-card': '#162016',
        'bg-card2': '#1c2b1c',
        'accent': '#4caf50',
        'accent-dark': '#388e3c',
        'text-muted': '#8aad8a',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
