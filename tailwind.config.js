/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryClr: '#45c48d',
        secondaryClr: '#f584e6',
        transparentClr: '#ffffff00',
        whiteClr: '#ffffff',
        darkClr: '#3b3b3b',
        backgroundClr: '#404040',
      },
    },
  },
  plugins: [],
}
