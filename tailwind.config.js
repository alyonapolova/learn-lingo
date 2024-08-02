/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        566: '566px',
      },
      borderRadius: {
        '30px': '30px',
      },
      fontSize: {
        '40px': '40px',
      },
      colors: {
        customColor: {
          DEFAULT: '#121417', // The base color
          80: 'rgba(18, 20, 23, 0.8)', // 80% opacity
        },
      },
      margin: {
        '20px': '20px',
        '40px': '40px',
      },
    },
  },
  plugins: [],
};
