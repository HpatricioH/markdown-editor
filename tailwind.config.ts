import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-gray': '#35393F',
        'dark-gray-2': '#2B2D31',
        'dark-gray-3': '#1D1F22',
        'dark-gray-4': '#151619',
        'light-gray-1/2': '#F5F5F5',
        'light-gray': '#E4E4E4',
        'light-gray-2': '#C1C4CB',
        'light-gray-3': '#7C8187',
        'light-gray-4': '#5A6069',
        orange: '#E46643',
        'orange-light': '#F39765'
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
