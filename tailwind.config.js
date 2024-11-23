/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'latte' : '700px',
        'md' : '800px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pumpkin : "#FFF",
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '144': '1rem'
      }
    },
  },
  plugins: [],
};
