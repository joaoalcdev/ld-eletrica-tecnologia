import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // right bottom fumaça tamanho 
      boxShadow: {
        'Whats': '0 0px 20px 1px rgba(27, 255, 27, 0.6)',
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
        ["infinite-slider2"]: "infiniteSlider2 30s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        infiniteSlider2: {
          "100%": { transform: "translateX(0)" },
          "0%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
