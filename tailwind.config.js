/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f3ece1',
        parchment: '#e7d8c7',
        saddle: '#8c6a50',
        espresso: '#2f1f17',
        gold: '#b58b3f',
        moss: '#5a503f',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        vintage: '0 18px 45px rgba(31, 23, 17, 0.16)',
      },
    },
  },
  plugins: [],
}