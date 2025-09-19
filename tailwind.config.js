/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'nyra': {
          'blue': '#7B9CC9',
          'blue-dark': '#6B8BB5',
          'blue-light': '#8BADD6',
          'gray': '#E8EDF5',
          'gray-dark': '#D1DAE8',
          'gray-light': '#F5F8FC',
        }
      },
      backgroundImage: {
        'gradient-nyra': 'linear-gradient(145deg, #8BADD6, #6B8BB5)',
        'gradient-nyra-hover': 'linear-gradient(145deg, #7B9CC9, #6B8BB5)',
      }
    },
  },
  plugins: [],
};
