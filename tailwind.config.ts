import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "rgba(202, 166, 144, 0.21)",
          100: "rgb(202, 166, 144)",
        },
        f: {
          lbackgroud: "rgb(49 56 63 / 45%)",
          backgroud: "#31383f",
          silver: "#bfc0c0",
          lwhite: "rgb(241 232 221)",
          white: "#e7d7c1",
          lyellow: "#ffffb3",
          yellow: "#ffff2b",
          dyellow: "#f9c22e",
          coral: "#ef8354",
          purple: "hsl(234.12deg 100% 80%)",
          dpurple: "#575cdf",
          pink: "#f490c1",
          zpink: "#ff8a99",
          dpink: "#d7425e",
          lpink: "hsl(319.57deg 100% 63.92%)",
          red: "#e01a4f",
          teal: "hsl(180deg 100% 75.49%)",
          blue: "hsl(214.93deg 100% 55.88%)",
          dblue: "#48A8E2",
          sky: "#53b3cb",
        }
        ,
        zblue: {
          50: "#2b59c3",
          100: "#253c78"
        },
        beige: {
          50: "rgba(241, 239, 235, 0.3)",
          100: "#ffeecf",
        },
        theme: {
          red: "#d36582",
          tan: "#c9a690",
          green: "seagreen"
        },
        zgrey: {
          10: "rgb(244 246 250)",
          50: "#e5e7eb",
          100: "rgb(100 116 139 / var(--tw-bg-opacity))",
          200: "#747A88"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        rotatez: "91vh"
      },
      screens: {
        "zhead": "777px",
        "zearth": "931px",
        "zfoot": "525px"
      }
    },
  },
  plugins: [],
};
export default config;