module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'], // Arabic font support
      },
      colors: {
        primary: '#4F46E5', // Custom primary color
        secondary: '#FBBF24', // Custom secondary color
        accent: '#10B981', // Custom accent color
      },
    },
  },
  plugins: [],
};