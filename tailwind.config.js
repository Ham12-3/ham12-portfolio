/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral scale lifted from the Showcasy design system
        ink: "#030712",
        neutral: {
          0: "#FFFFFF",
          10: "#F9FAFB",
          15: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#B6BCC6",
          50: "#6B7280",
          70: "#374151",
          90: "#111827",
        },
        card: "#EBEBEB",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "Inter Tight", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
