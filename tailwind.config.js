module.exports = {
  purge: ["./resources/views/**/*.blade.php", "./resources/js/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
          'xsm': '0px',
          'xl': '1280px',
      },
      height: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '9/10': '90%',
        'full': '100%',
       },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
