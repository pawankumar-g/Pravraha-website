import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Keep only what you need, remove logo slider animation
    },
  },
  plugins: [tailwindcssAnimated],
};

export default config;



// import tailwindcssAnimated from "tailwindcss-animated";

// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 20s linear infinite",
//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//     },
//   },
//   plugins: [tailwindcssAnimated],
// };

// export default config;