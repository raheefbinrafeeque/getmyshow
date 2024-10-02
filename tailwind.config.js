/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, // Centers container automatically
      padding: "1rem", // Adds padding
      screens: {
        sm: "100%",  // Full-width for small screens
        md: "100%",  // Full-width for medium screens
        lg: "768px", // Custom size for large screens
        xl: "950px", // Custom size for extra-large screens
        '2xl': '1200px',
      },
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '950px',
      'xl': '1200px',
      '2xl': '1366px',
      '3xl': '1440px',
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.container-lg': {
          width: '100%',          
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          // '@screen lg': {
          //   maxWidth: theme('screens.lg'), // Use the large screen width defined in your Tailwind config
          // },
          // '@screen xl': {
          //   maxWidth: theme('screens.xl'), // Use the large screen width defined in your Tailwind config
          // },
          // '@screen 2xl': {
          //   maxWidth: theme('screens.2xl'), // Use the large screen width defined in your Tailwind config
          // },
          '@screen 3xl': {
            maxWidth: theme('screens.3xl'), // Use the large screen width defined in your Tailwind config
          },
        },
      });
    },
  ],
};
