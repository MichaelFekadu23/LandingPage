/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0B0F14',
        'charcoal-900': '#07090C',
        'charcoal-800': '#0F141A',
        emerald: '#1AD48E',
        'emerald-light': '#55F2B3',
        'emerald-dark': '#0C9F62',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        freight: ['"FreightSansPro"', 'sans-serif'],
        nexa: ['NexaTrial', 'sans-serif'],
        nexabold: ['Nexa', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        normalInter: ['NormalInter']
      },

      boxShadow: {
        glow: '0 20px 80px rgba(26, 212, 142, 0.3)',
        card: '0 30px 60px rgba(7, 10, 16, 0.45)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(85, 242, 179, 0.25), transparent 55%), radial-gradient(circle at top right, rgba(26, 212, 142, 0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
};
