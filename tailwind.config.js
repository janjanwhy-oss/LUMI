/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Bodoni Moda"', 'Didot', '"Bodoni MT"', 'Garamond', 'serif'],
      },
      colors: {
        lumi: {
          bg: '#F2F4F7',
          canvas: '#FFFFFF',
          dark: '#111215',
          darkCard: '#16181C',
          graphite: '#4A4E57',
          muted: '#8A8F9B',
          border: '#E8EAEE',
          lightBg: '#F8F9FA',
          softGrey: '#F4F5F7',
        }
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'canvas': '0 20px 60px -15px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.02)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'phone-rear': '0 30px 60px -15px rgba(0, 0, 0, 0.22)',
        'phone-front': '0 35px 70px -10px rgba(0, 0, 0, 0.28)',
      }
    },
  },
  plugins: [],
}
