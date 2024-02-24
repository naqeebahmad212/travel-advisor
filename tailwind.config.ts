import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",

          secondary: "#0040ff",

          accent: "#0000ff",

          neutral: "#0b0406",

          "base-100": "#fff1ff",

          info: "#00b7da",

          success: "#00a059",

          warning: "#b64500",

          error: "#ff8699",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
