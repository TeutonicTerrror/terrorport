/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',
        'accent-red': '#ff3838',
        'accent-red-light': '#ff6b6b',
        'accent-red-dark': '#cc1616',
        'accent-warm': '#ff9500',
        'bg-dark': '#000000',
        'bg-dark-red': '#1a0505',
        'bg-dark-subtle': '#0d0202',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'float': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'fade-in-scale': 'fadeInScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'scroll-horizontal': 'scrollHorizontal 25s linear infinite',
        'tile-fade': 'tileFade 1.5s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(255, 56, 56, 0.3)' },
          '100%': { boxShadow: '0 0 15px rgba(255, 56, 56, 0.5), 0 0 20px rgba(255, 56, 56, 0.2)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        tileFade: {
          '0%': { backgroundColor: 'var(--tile-color)' },
          '100%': { backgroundColor: 'transparent' }
        }
      }
    }
  },
  plugins: [],
}
