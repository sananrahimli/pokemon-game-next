/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'colBg-1': '#32363a',
        'colBg-2': '#3E4C4D',
        
      },
      fontFamily: {
        body: ['Chakra Petch', "sans-serif"],
      },
    },
  },
  plugins: [],
}
