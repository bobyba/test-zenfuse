module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      spacing: {
        full: '100%'
      },
      colors: {
        gray: {
          900: '#171717',
          800: '#262626',
          700: '#A0A0A0',
          400: '#A3A3A3',
          300: '#F5F5F5',
          200: '#E5E7EB',
          100: '#F4F4F5'
        }
      }
    }
  },
  variants: {
    extend: {}
  }
  /*   plugins: [require('@tailwindcss/forms')] */
}
