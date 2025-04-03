/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink': {
          '0%, 100%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#ff00ff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatReverseSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        particle1: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-100%, -100%) scale(0.2)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' }
        },
        particle2: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(100%, -80%) scale(0.2)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' }
        },
        particle3: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(50%, 100%) scale(0.2)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' }
        },
        'spin-slow': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        'spin-slower': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        'spin-slowest': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' }
        },
        'shooting-star': {
          '0%': { 
            transform: 'translateX(0) translateY(0) rotate(45deg)',
            opacity: '0'
          },
          '10%': { opacity: '0.6' },
          '100%': { 
            transform: 'translateX(1000px) translateY(1000px) rotate(45deg)',
            opacity: '0'
          }
        }
      },
      animation: {
        'typing': 'typing 2s steps(20, end)',
        'blink': 'blink 0.75s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        floatReverse: 'floatReverse 7s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        floatReverseSlow: 'floatReverseSlow 9s ease-in-out infinite',
        particle1: 'particle1 3s ease-in-out infinite',
        particle2: 'particle2 4s ease-in-out infinite',
        particle3: 'particle3 3.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-slower': 'spin-slower 30s linear infinite',
        'spin-slowest': 'spin-slowest 40s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shooting-star': 'shooting-star 5s ease-out infinite'
      }
    },
  },
  plugins: [],
}

