/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        // Logo-based color palette extracted from vcr-logo-lg.png
        'vcr': {
          // Primary dark green from logo: #0a5a28 (rgb(10, 90, 40))
          'primary': '#0a5a28',
          'primary-dark': '#0a5028', // #0a5028 (rgb(10, 80, 40))
          'primary-light': '#467828', // #467828 (rgb(70, 120, 40))
          // Secondary greens from logo
          'secondary': '#46781e', // #46781e (rgb(70, 120, 30))
          'secondary-dark': '#3c6e1e', // #3c6e1e (rgb(60, 110, 30))
          'secondary-light': '#3c781e', // #3c781e (rgb(60, 120, 30))
          // Accent green
          'accent': '#466e28', // #466e28 (rgb(70, 110, 40))
          // Background colors from logo
          'bg-light': '#fafafa', // #fafafa (rgb(250, 250, 250))
          'bg-lighter': '#f0f0f0', // #f0f0f0 (rgb(240, 240, 240))
        },
        // Map existing green classes to logo colors for backward compatibility
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#0a5a28', // Logo primary green
          700: '#0a5028', // Logo primary dark
          800: '#14532d',
          900: '#14532d',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

