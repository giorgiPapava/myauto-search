/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        button: {
          blue: {
            50: "hsl(var(--button-blue-50))",
          },
          gray: {
            20: "hsl(var(--button-gray-20))",
          },
        },
        error: {
          red: {
            100: "hsl(var(--error-red-100))",
            800: "hsl(var(--error-red-800))",
          },
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",

          black: {
            800: "hsl(var(--primary-black-800))",
          },
          gray: {
            200: "hsl(var(--primary-gray-200))",
          },
          orange: {
            700: "hsl(var(--primary-orange-700))",
          },
          white: "hsl(var(--primary-white))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          black: {
            700: "hsl(var(--secondary-black-700))",
            600: "hsl(var(--secondary-black-600))",
          },
          blue: {
            800: "hsl(var(--secondary-blue-800))",
          },
          gray: {
            300: "hsl(var(--secondary-gray-300))",
            400: "hsl(var(--secondary-gray-400))",
          },
          green: {
            100: "hsl(var(--secondary-green-100))",
            200: "hsl(var(--secondary-green-200))",
            400: "hsl(var(--secondary-green-400))",
          },
        },
        success: {
          green: {
            50: "hsl(var(--success-green-50))",
            800: "hsl(var(--success-green-800))",
          },
        },
        text: {
          black: {
            900: "hsl(var(--text-black-900))",
            800: "hsl(var(--text-black-800))",
            700: "hsl(var(--text-black-700))",
            600: "hsl(var(--text-black-600))",
            500: "hsl(var(--text-black-500))",
            },
          gray: {
            400: "hsl(var(--text-gray-400))",
          },
        },

        // shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
