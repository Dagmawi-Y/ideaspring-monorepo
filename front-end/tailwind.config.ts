import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/Demo/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-color': '#111317',
        'primary-color-light': '#1f2125',
        'primary-color-extra-light': '#35373b',
        'secondary-color': '#f9ac54',
        'secondary-color-dark': '#d79447',
        'text-light': '#d1d5db',
        'white': '#ffffff'
      },
      maxWidth: {
        '1200': '1200px'
      },
      fontSize: {
        '2.5xl': '2.25rem'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
