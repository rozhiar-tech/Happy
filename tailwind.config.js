/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender-indigo': '#8A4FFF',
        vodka: '#C3BEF7',
        'pale-spring-bud': '#EAF8BF',
        'wild-strawberry': '#FF36AB',
        'maastricht-blue': '#0B132B',
        'light-blue': '#EAF8F9',
        'light-green': '#6BD24D',
      },
    },
    screens: {
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
