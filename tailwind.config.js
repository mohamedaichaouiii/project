/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', // Added TypeScript file extensions if you use them
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px', // Standard breakpoint for medium screens
      lg: '1024px', // Standard breakpoint for large screens
      xl: '1280px', // Standard breakpoint for extra-large screens
    },
    fontFamily: {
      primary: ['var(--font-jetbrainsMono)'], // Ensure this matches the CSS variable
    },
    extend: {
      colors: {
        primary: '#1c1c22', // Fixed hex color format
        accent: {
          DEFAULT: '#00ff99', // Fixed hex color format
          hover: '#00e187',   // Fixed hex color format
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
