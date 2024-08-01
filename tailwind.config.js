/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'app-linear':
          'linear-gradient(var(--app-600) 0.1em, transparent 0.1em), linear-gradient(90deg, var(--app-600) 0.1em, transparent 0.1em)',
      },
      backgroundColor: {
        'app-700': 'var(--app-700)',
        'app-600': 'var(--app-600)',
      },
      backgroundSize: {
        'app-4em': '4em 4em',
      },
      boxShadow: {
        'app-shadow':
          '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)',
      },
    },
  },
  plugins: [],
}
