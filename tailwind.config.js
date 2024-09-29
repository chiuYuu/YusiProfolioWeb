/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        //RWD自訂設定
        llg: '1280px',
        lg: '1064px', // => @media (min-width: 1064px) { ... }
        md: '768px' // => @media (min-width: 768px) { ... }
      }
    }
  },
  plugins: []
}
