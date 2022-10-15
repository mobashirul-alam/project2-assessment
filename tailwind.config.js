/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/assets/home-bg.jpg')",
        'login-bg': "url('/src/assets/bg-login.jpg')",
        'register-bg': "url('/src/assets/bg-register.jpg')",
      }
    },
  },
  plugins: [],
}
