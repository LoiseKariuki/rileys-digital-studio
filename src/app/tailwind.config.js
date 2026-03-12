/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#1F3A5F',
        'slate-blue': '#3F6C9B',
        'soft-blue': '#8FAFC8',
        'dark-gray': '#4A525A',
        'medium-gray': '#7A838C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};