import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        yellow: '#fadd27',
        red: '#c52a1d',
        orange: '#d05d29',
        // Yellow-orange tip of pencil: #e9b227
        black: '#050001',
      },
      fontFamily: {
        avenir: ['AvenirLTStd'],
        cake: ['CreamCake'],
        din: ['DINCondensed'],
        gilroy: ['Gilroy'],
        helvetica: ['HelveticaNeue'],
        league: ['LeagueGothic'],
        garamond: ['Garamond'],
        interstate: ['Interstate'],
        'interstate-bold': ['InterstateBold'],
        'interstate-black': ['InterstateBlack'],
      },
    },
  },
  plugins: [],
}
export default config
