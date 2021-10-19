module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        chirag:
        {
          50: '#fdfce0',
          100: '#f5f3b9',
          200: '#eeeb90',
          300: '#e7e265',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#9a9618',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },
        navCol:
        {
          50: '#efeffd',
          100: '#d1d2e4',
          200: '#b2b4cc',
          300: '#9396b7',
          400: '#7579a2',
          500: '#5c5f89',
          600: '#474a6b',
          700: '#33354d',
          800: '#1d2030',
          900: '#2B3148',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
