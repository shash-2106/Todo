/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/components/TodoList.jsx",
    "./src/components/TodoItem.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        winkyRough: ['Winky Rough', 'sans-serif'],  // Add Roboto font here
      },
    },
  },
  plugins: [],
}

