import type { Config } from "tailwindcss";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class", // ⬅️ TO JEST KLUCZOWE
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
} satisfies Config;
