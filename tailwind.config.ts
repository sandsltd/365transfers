import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#001E73",
          dark: "#001355",
          light: "#0033A0",
        },
        accent: {
          DEFAULT: "#C2FE58",
          dark: "#A8E04A",
          light: "#D4FF7A",
        },
      },
    },
  },
  plugins: [],
};
export default config;

