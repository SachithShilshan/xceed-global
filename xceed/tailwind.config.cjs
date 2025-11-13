export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#eef2ff',
          500: '#5b66ff',
          600: '#4753d9'
        },
        secondary: '#34b3ff'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(12,18,42,0.08)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: []
}
