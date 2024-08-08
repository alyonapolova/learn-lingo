/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        566: '566px',
      },
      borderRadius: {
        '12px': '12px',
        '30px': '30px',
        '35px': '35px',
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        '24px': '24px',
        '40px': '40px',
      },
      lineHeight: {
        1.33: '1.33',
      },
      colors: {
        'bg-teachers': '#F8F8F8',
        'custom-gray': '#8A8A89',
        'custom-dark-opacity': 'rgba(18, 20, 23, 0.1)',
        'custom-yellow': '#F4C550',
        customColor: {
          DEFAULT: '#121417', // The base color
          80: 'rgba(18, 20, 23, 0.8)', // 80% opacity
        },
      },
      margin: {
        '20px': '20px',
        '40px': '40px',
      },
      padding: {
        bookBtn: '16px 215px',
        input: '16px 18px',
        '16-48': '16px 48px',
      },
    },
  },
  plugins: [],
};
