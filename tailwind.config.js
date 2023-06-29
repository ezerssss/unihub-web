/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#000080',
          200: '#000066',
          300: '#000040',
          400: '#191970',
        },
        secondary: {
          100: '#FFD700',
          200: '#BFA300',
          300: '#403600',
          400: '#FFFADA',
        },
        dark: '#01010E',
        'unihub-gray': {
          100: '#BFBFBF',
          200: '#808080',
        },
        'light-yellow': '#FFFEDF',
        'pale-yellow': '#FDFDBA',
        'orange-yellow': '#EECE5E',
        'light-silver': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
