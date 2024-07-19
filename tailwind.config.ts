import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '375px', // Small devices (mobile phones)
      'md': '768px', // Medium devices (tablets)
      'lg': '1024px', // Large devices (desktops / laptops)
      'xl': '1280px', // Extra large devices (large desktops)
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: '480px', // Ukuran layar ekstra kecil (Anda dapat menyesuaikan nilainya sesuai kebutuhan)
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
export default config;
